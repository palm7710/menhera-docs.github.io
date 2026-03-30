import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja-JP',
  title: 'menhera-docs',
  description: '感情の設計書、不安定さの記録、心の取扱説明書を静かに編むためのドキュメントサイト',
  // GitHub Pages の base 設定:
  // - username.github.io で公開する場合は '/'
  // - project pages で公開する場合は '/<repo>/'
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: {
      src: '/logo.svg',
      alt: 'menhera-docs'
    },
    nav: [
      { text: 'Getting Started', link: '/getting-started' },
      { text: '状態一覧', link: '/symptoms' },
      { text: '対処法', link: '/coping' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: '典型的な状態', link: '/symptoms' },
          { text: 'トリガー整理', link: '/triggers' },
          { text: '対処法', link: '/coping' },
          { text: '他者との関わり方', link: '/contact' }
        ]
      }
    ],
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },
    footer: {
      message: 'Written in quiet tones.',
      copyright: 'Copyright © 2026 menhera-docs'
    }
  }
})
