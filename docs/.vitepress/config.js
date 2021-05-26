module.exports = {
  lang: 'Zh',
  title: '闻星',
  description: '闻星',

  themeConfig: {
    repo: 'vansin/blog',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'main',
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
        activeMatch: '^/weekly/'
      },
      {
        text: 'JavaScript',
        link: '/JavaScript/index',
        activeMatch: '^/JavaScript/'
      },
      {
        text: '跨端',
        link: 'cross-platform/index'
      },
      {
        text: '其他',
        link: 'other/index'
      },
      {
        text: 'Release Notes',
        link: 'https://github.com/vansin'
      }
    ],

    sidebar: {
      '/web/': getGuideSidebar(),
      '/weekly/': getWeeklySidebar(),
      '/JavaScript/': getJavaScriptSidebar(),
      '/cross-platform/': getCrossPlatformSidebar(),
      '/other/': getOtherSidebar(),
      '/': getGuideSidebar()
    }
  }
}

function getOtherSidebar() {
  return [
    {
      text: 'Web前端相关',
      children: [
        { text: 'Vue组件', link: '/other/vue-component' }
      ]
    }
  ]
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

function getJavaScriptSidebar() {
  return [
    {
      text: 'JavaScript核心基础',
      children: [
        { text: '前言', link: '/JavaScript/index' }
      ]
    }
  ]
}

function getCrossPlatformSidebar() {
  return [
    {
      text: '跨端方案',
      children: [
        { text: '前言', link: '/cross-platform/index' }
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
