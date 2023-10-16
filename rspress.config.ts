import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Rspress',
  description: 'Rspack-based Static Site Generator',
  icon: "./docs/public/rspress-icon.png",
  logo: {
    light: "./docs/public/rspress-light-logo.png",
    dark: "./docs/public/rspress-dark-logo.png",
  },
  builderConfig: {
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
