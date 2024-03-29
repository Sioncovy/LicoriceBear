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
      { text: 'Front-End', link: '/front-end/' },
      { text: 'Coding', link: '/coding/' },
      { text: 'Algorithm', link: '/algorithm/' },
      { text: 'Practice', link: '/practice/' },
      { text: 'Friends', link: '/friends/' }
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
      '/reading/': [
        {
          text: '书单',
          items: [
            { text: '2022年及以前', link: '/reading/book-list/2022' },
            { text: '2023年', link: '/reading/book-list/2023' }
          ]
        },
        {
          text: '读书笔记',
          items: [
            {
              text: '2023年',
              items: [
                {
                  text: '《JavaScript高级程序设计》',
                  link: '/reading/reading-notes/2023/JavaScript高级程序设计'
                }
              ]
            }
          ]
        }
      ],
      '/front-end/': [
        {
          text: 'Vue',
          items: []
        },
        {
          text: 'React',
          items: []
        },
        {
          text: 'Book',
          items: [
            {
              text: '《JavaScript高级程序设计》',
              link: '/front-end/book/JavaScript高级程序设计'
            }
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
      '/algorithm/': [
        {
          text: 'LeetCode',
          items: [
            { text: '139. 单词拆分', link: '/algorithm/leetcode/139.md' },
            { text: '198. 打家劫舍', link: '/algorithm/leetcode/198' }
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
    socialLinks: [{ icon: 'github', link: 'https://github.com/Sioncovy' }],
    footer: {
      message: `<a href="https://beian.miit.gov.cn">蜀ICP备2023001934号-1</a>`,
      copyright: 'Copyright © 2023-present by Licorice Bear'
    }
  }
})
