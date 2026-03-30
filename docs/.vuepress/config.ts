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
  base: '/menhera-docs.github.io/',
  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'menhera.js' }],
    ['meta', { property: 'og:description', content: '感情の不安定性、依存、対人関係の揺らぎを、状態管理として読むためのパロディドキュメント。' }],
    ['meta', { property: 'og:image', content: 'https://palm7710.github.io/menhera-docs.github.io/ogp.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'menhera.js の共有サムネイル' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'menhera.js' }],
    ['meta', { name: 'twitter:description', content: '感情の不安定性、依存、対人関係の揺らぎを、状態管理として読むためのパロディドキュメント。' }],
    ['meta', { name: 'twitter:image', content: 'https://palm7710.github.io/menhera-docs.github.io/ogp.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'menhera.js の共有サムネイル' }],
    ['meta', { name: 'theme-color', content: '#f5f6fa' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
  theme: plumeTheme(plumeConfig),
  bundler: viteBundler()
})
