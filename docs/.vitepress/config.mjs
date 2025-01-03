import {defineConfig} from 'vitepress'

export default defineConfig({
  title: "云朵备份",
  description: "微信备份，微信云备份，备份，工具",
  themeConfig: {
    logo: "/logo/logo.svg",
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/explain-cloudbak' },
      { text: 'Zdir', link: 'https://www.zdir.pro/zh/', target: '_blank'}
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/likeflyme/cloudbak' },
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '什么是云朵备份', link: '/explain-cloudbak' },
          { text: '安装',
            items: [
              { text: '源码安装', link: '/install/install-source'},
              { text: 'docker安装', link: '/install/install-docker'},
              { text: '宝塔9.2安装', link: '/install/install-bt'},
              { text: '群辉NAS安装', link: '/install/install-synology'},
            ],
          },
          {
            text: '开始使用',
            items: [
              { text: '创建/删除会话', link: '/use/create-session'},
              { text: '客户端备份', link: '/backup'},
              { text: '数据解密', link: '/use/decrypt'},
              { text: '小工具', link: '/use/docker-tools'},
              { text: 'version.json', link: '/use/version'},
            ]
          },
          {
            text: '进阶',
            items: [
              { text: '使用其他同步工具', link: '/advanced/other-sync-tools'},
              { text: '定时解析', link: '/advanced/timing-analysis'},
            ]
          },
          { text: '更新日志', link: '/changelog' },
          { text: '下载客户端', link: '/download-desktop' },
          { text: '使用截图', link: '/use-case' },
          { text: '问题排查', link: '/questions' },
          { text: '计划', link: '/plan' },
          { text: '隐私政策', link: '/privacy-policy' },
          { text: '免责声明', link: '/disclaimer' },
          { text: '关于我们', link: '/about' },
        ]
      }
    ]


  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
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
