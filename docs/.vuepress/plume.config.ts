import { defineThemeConfig } from 'vuepress-theme-plume'

export default defineThemeConfig({
  hostname: 'https://example.com',
  logo: false,
  navbarTitle: 'menhera-docs',
  appearance: false,
  search: {
    provider: 'local'
  },
  navbar: [
    { text: '導入', link: '/getting-started/' },
    { text: '状態', link: '/symptoms/' },
    { text: 'トリガー', link: '/triggers/' },
    { text: '対処', link: '/coping/' },
    { text: '連携', link: '/contact/' }
  ],
  sidebar: [
    {
      text: 'Overview',
      items: [
        { text: 'はじめに', link: '/getting-started/' }
      ]
    },
    {
      text: 'Manual',
      items: [
        { text: '典型的な状態', link: '/symptoms/' },
        { text: 'トリガー', link: '/triggers/' },
        { text: '対処法', link: '/coping/' },
        { text: '他者との連携', link: '/contact/' }
      ]
    }
  ],
  docFooter: {
    prev: '前の項目',
    next: '次の項目'
  },
  footer: {
    message: '静かな読解のための文書。',
    copyright: 'Copyright © 2026 menhera-docs'
  }
})
