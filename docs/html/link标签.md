# link 标签的preload、prefetch、preconnect

## 使用

```JavaScript
<link rel="preload" as="script" src="./a.js">
```

初看起来，这三个属性设置起来比较简单，但是如果使用得当，效果却会非常棒。比如 [奈飞](https://link.juejin.cn?target=https%3A%2F%2Fmedium.com%2Fdev-channel%2Fa-netflix-web-performance-case-study-c0bcde26a9d9) 通过使用 prefetch 把 TTI ( Time-to-Interactive) 的时间减少了 30 %。

preload、prefetch 都有助于优化 TTI、FCP ( First Content Paint ) 。为了让大家更好的理解 preload、prefetch 的好处，我们简单了解一下这两个指标代表的含义。

为了直观的认识，可以打开一个 Chrome 的控制台，进入 LightHouse 跑跑分，下图就是我跑的 Github 的分数，可以看到，头两个指标就是 FCP（First Contntful Paint） 和 TTI ( Time to Interactive)。

FCP 也叫做首次内容绘制，指的是从开始加载页面内容到任何部分的内容在屏幕上渲染出来了，这里的内容，可以是一个文本，也可以是一个图片（背景图片也算）。

TTI 也叫做可交互时间，计算规则稍微有一点复杂，它是以 FCP 结束的时间作为起始，也就是有任何内容出现在屏幕上了，这个点就作为 TTI 的时间点。

有了起始点之后，它会寻找一个长度至少是 5 S 的安静窗口（安静窗口是没有耗时超过 50 ms 的任务，并且不超过两个正在处理的请求），找到安静窗口之后，会再往回找，找到离这个安静窗口最近的长任务，这个时间点就是 TTI 的时间点，如果 FCP 后没有任何长任务，那此时 FCP 就会等于 TTI，上面截图也表现了这一点。

举一个例子来说明 TTI：假设 FCP 时间点是 0.8 S，之后在 1 S 时有了一个长度为 100 ms 的长任务，执行后，就来到了 1.1 S，之后就没有任何任务和请求了。过了 5 秒，发现找到了一个安静窗口，会再往前找最近的一个长任务，时间点是 1.1 S，那 TTI 就是 1.1 S。

## TL DR

- prefetch 用于在浏览器的空闲时间请求资源

- preload 用于提前加载在页面初始化加载（page load）时用到的资源

- preconnect 用于提前和一个网站建立起连接

在谈这三个属性之前，我们先对浏览器请求各种资源的优先级顺序有一个大概的认识，在默认情况下，有如下的划分：

1. 第一个级别就是这个页面的主资源，它所包含的当前主页（index.html）、 css 资源、font 资源

2. 第二个级别就是 JS 资源、在视口区域的图片、Fetch API、XHR

3. 第三个级别可以是我们网站的标题的图标 Favicon

4. 第四个级别是 async/defer 标签的 JS 资源、不在视口里的图片、视频这些

上面优先级的叙述省略了一些细节，比如 CSS、JS 也是分 early 和 later 的，以至于他们优先级不同，如果想了解完整的内容，可以看 [这篇文章](https://link.juejin.cn?target=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F1bCDuq9H1ih9iNjgzyAL0gpwNFiEP4TZS-YLRp_RuMlc%2Fedit)

## preload

```JavaScript
<head>
  <link rel="preload" as="script" href="foo.js">
</head>
```

值得关注的就是 as 属性，preload 的优先级顺序和这个属性指定的资源类型相关。

举一个例子，假如我们指定了 as 的值是 style，也就是把它当做 css 资源，那它的优先级就会变得最高。

但是也有一个例外：虽然 font 的优先级是最高，但把 as 的值指定为 font 并不会把此资源的优先级放到最高，文档专门为 font 的 preload 指定了优先级：位于第二级。目前来说，除了 font，其他都按照和资源优先级相同的规则。

as 属性可以说是必须要设置的，除了上面可以给优先级排级别以外，还有一个原因：如果不设置的话，它会被作为一个 XHR 请求去触发，浏览器可能不能正确的认识到，我们其实已经把资源预加载了，这样子就会加载两次了，完全没有了优化的效果。

不指定 as 浏览器也会有警告：

![https://cdn.nlark.com/yuque/0/2022/png/1472301/1659928276997-e6a51b72-1e31-4900-819b-4f475c9357d3.png](https://cdn.nlark.com/yuque/0/2022/png/1472301/1659928276997-e6a51b72-1e31-4900-819b-4f475c9357d3.png)

preload 只会加载，真正执行要等到资源被用到的地方。

## prefetch

它的使用方法和 preload 非常像。

首先，prefetch 的请求的优先级是在上面几个的最后面。也就是说，在第五个级别。

明白了这一点，我们大概就知道它的应用场景了，一个典型的应用场景就是 prefetch 在未来可能打开的路由页面。举一个例子来说明这个问题，假如有一个搜索页面，点击搜索出来的结果是跳转新的路由，其实如果搜索结果好，一般用户都会点击前几条，所以我们就可以 prefetch 前几条搜索结果对应的路由。

像我们的现在的应用，一般都会有懒加载，我们可以给非首页但是打开频率很高的页面加 prefetch。

它的使用就是直接加一个 link 标签，这样它就会在浏览器空闲的时候下载了：

```JavaScript
<link rel="prefetch" as="script" href="a.bundle.js">
```

其中 as 的取值有 document 、style、script、images ...

如果使用 webpack ，没有使用 preload 那么坑，可以直接在引入的地方加魔法注释：

```JavaScript
import(/*webpackPrefetch: true */ 'a.bundle.js')
```

截止目前（2022-08-05），prefetch的支持性没有特别好，只覆盖了 80 % 的浏览器 。所以我们一般都是需要 polyfill 的，可以使用 XHR 去模拟：

```JavaScript
const xhrRequest = new XMLHttpRequest()
xhrRequest.open('GET', './bundle.js', true)
xhrRequest.send()
```

除了直接给资源加 prefetch 标签。还有一个触发 prefetch 的思路，我们可以在入口到达可视窗口的时候，自动 prefetch。[这个库](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FGoogleChromeLabs%2Fquicklink) 就实现了这样的功能。它使用了 Intersection API 监听元素到达可视窗口，到达了就进行 prefetch。

## preconnect

它的作用使用了提前和第三方资源建立连接的。在我们请求一个资源之前，可能会涉及 DNS 寻址、TLS 握手、TCP 握手、重定向等。这期间就花费了很多时间了。如果我们加上 preconnect：

```JavaScript
<link rel="preconnect" href="https://example.com">
```

浏览器就知道我们将要连接这个网站，跳转也好、请求资源也好，它会做好早期的连接工作。但是浏览器只会保留 10 S，如果 10 S 不用就会浪费了这资源了。

还有一个和它很相似的 dns-prefetch，只不过这个只预解析 DNS ：

```JavaScript
<link rel="dns-prefetch" href="https://example.com">.4
```
