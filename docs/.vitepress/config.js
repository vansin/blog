module.exports = {
  lang: 'Zh',
  title: '闻星',
  description: '闻星',

  themeConfig: {
    repo: 'vansin/blog',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    // algolia: {
    //   apiKey: 'c57105e511faa5558547599f120ceeba',
    //   indexName: '古月闻星'
    // },

    // carbonAds: {
    //   carbon: 'CEBDT27Y',
    //   custom: 'CKYD62QM',
    //   placement: 'vuejsorg'
    // },

    nav: [
      { text: '技术博客', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: '技术周刊',
        link: '/weekly/index',
        activeMatch: '^/config/'
      },
      {
        text: 'Release Notes',
        link: 'https://github.com/vansin'
      }
    ],

    sidebar: {
      '/web/': getGuideSidebar(),
      '/weekly/': getWeeklySidebar(),
      '/': getGuideSidebar(),
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: '前端核心基础',
      children: [
        { text: '配置高效前端开发环境', link: '/web/front' },
        { text: 'Element', link: '/web/element' }
      ]
    },
    {
      text: '阿里云最佳实践',
      children: [
        { text: '表格存储', link: '/aliyun/tablestore' },
        { text: '函数计算', link: '/aliyun/serverless' },
      ]
    }
  ]
}

function getWeeklySidebar() {
  return [
    {
      text: '闻星周刊',
      children: [{ text: '20210530', link: '/weekly/20210530' }]
    }
  ]
}
