import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Alan Xiao',
  icon: "https://raw.githubusercontent.com/2401345934/picgo/master/imgrspress-icon.png",
  logo: {
    light: "https://raw.githubusercontent.com/2401345934/picgo/master/imgrspress-light-logo.png",
    dark: "https://raw.githubusercontent.com/2401345934/picgo/master/imgrspress-dark-logo.png",
  },
  builderConfig: {
 
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
});
