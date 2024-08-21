import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "云朵备份",
  description: "微信备份，微信云备份，备份，工具",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/explain-cloudbak' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '什么是云朵备份', link: '/explain-cloudbak' },
          { text: '如何安装', link: '/install-docker' },
          { text: '如何备份', link: '/backup' },
          { text: '下载客户端', link: '/download-desktop' },
          { text: '隐私政策', link: '/privacy-policy' },
          { text: '免责声明', link: '/disclaimer' },
          { text: '关于我们', link: '/about' },
        ]
      }
    ]


    // socialLinks: [
    //   // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
  head: [
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-8R186H4EQ6'
      }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-8R186H4EQ6');"
    ]
  ]
})
