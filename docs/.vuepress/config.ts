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
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:title', content: 'menhera.js' }],
    ['meta', { property: 'twitter:description', content: '感情の不安定性、依存、対人関係の揺らぎを、状態管理として読むためのパロディドキュメント。' }],
    ['meta', { property: 'twitter:image', content: 'https://palm7710.github.io/menhera-docs.github.io/ogp.png' }],
    ['meta', { name: 'theme-color', content: '#f5f6fa' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
  theme: plumeTheme(plumeConfig),
  bundler: viteBundler()
})
