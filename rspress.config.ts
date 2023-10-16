import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Rspress',
  description: 'Rspack-based Static Site Generator',
  icon: "https://raw.githubusercontent.com/2401345934/picgo/master/imgrspress-icon.png",
  logo: {
    light: "https://raw.githubusercontent.com/2401345934/picgo/master/imgrspress-light-logo.png",
    dark: "https://raw.githubusercontent.com/2401345934/picgo/master/imgrspress-dark-logo.png",
  },
  builderConfig: {
    dev: {
        assetPrefix: true,
    },
    output: {
      assetPrefix: './',
    },
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
});
