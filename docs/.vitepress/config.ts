import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/reference/site-config
export default defineConfig({
  title: 'Licorice Bear',
  description: '甘草熊的博客，记录一些关于前端、算法和一些杂感',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.vuejs.org/reference/default-theme-config
    nav: [
      { text: 'Trifles', link: '/trifles/' },
      { text: 'Reading', link: '/reading/' },
      { text: 'Web', link: '/web/' },
      { text: 'Coding', link: '/coding/' },
      { text: 'Practice', link: '/practice/' }
    ],
    sidebar: {
      '/trifles/': [
        {
          text: '随想',
          items: []
        },
        {
          text: '年终总结',
          items: [
            { text: '2021年总结', link: '/trifles/summary/2021' },
            { text: '2022年总结', link: '/trifles/summary/2022' }
          ]
        }
      ],
      '/coding/': [
        {
          text: 'Rust',
          items: [
            { text: '开始', link: '/coding/rust/start.md' },
            { text: '错题集', link: '/coding/rust/practice-errors.md' }
          ]
        }
      ],
      '/practice/': [
        {
          text: 'Github Action 自动化部署',
          link: '/practice/github-action-deploy.md'
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Sioncovy' }]
  }
})
