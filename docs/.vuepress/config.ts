import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'
import plumeConfig from './plume.config'

export default defineUserConfig({
  lang: 'ja-JP',
  title: 'menhera.js',
  description: '感情を技術文書として記述する、日本語の静かなドキュメントサイト。',
  // GitHub Pages の base:
  // User Pages の場合は '/'
  // Project Pages の場合は '/<repo>/'
  base: '/',
  head: [
    ['meta', { name: 'theme-color', content: '#f5f6fa' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
  theme: plumeTheme(plumeConfig),
  bundler: viteBundler()
})
