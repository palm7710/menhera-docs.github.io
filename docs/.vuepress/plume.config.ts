import { defineThemeConfig } from 'vuepress-theme-plume'

export default defineThemeConfig({
  hostname: 'https://example.com',
  logo: false,
  navbarTitle: 'menhera.js',
  appearance: false,
  search: {
    provider: 'local'
  },
  navbar: [
    { text: '導入', link: '/getting-started/' },
    { text: 'モデル', link: '/core-model/' },
    { text: '状態', link: '/state-machine/' },
    { text: 'API', link: '/api/' },
    { text: '運用', link: '/debugging/' }
  ],
  sidebar: [
    {
      text: 'Guide',
      items: [
        { text: 'Overview / Installation', link: '/getting-started/' },
        { text: 'Core Model', link: '/core-model/' },
        { text: 'Signals / Symptoms', link: '/symptoms/' },
        { text: 'Triggers / Behaviors', link: '/triggers/' }
      ]
    },
    {
      text: 'Runtime',
      items: [
        { text: 'State Machine', link: '/state-machine/' },
        { text: 'API', link: '/api/' },
        { text: 'Debugging', link: '/debugging/' },
        { text: 'Error Handling', link: '/error-handling/' },
        { text: 'Best Practices', link: '/coping/' },
        { text: 'FAQ / Notice', link: '/contact/' }
      ]
    }
  ],
  docFooter: {
    prev: '前の項目',
    next: '次の項目'
  },
  footer: {
    message: '静かな読解のための文書。',
    copyright: 'Copyright © 2026 menhera.js'
  }
})
