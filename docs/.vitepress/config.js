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
        text: 'vue',
        link: '/vue/index',
        activeMatch: '^/vue/'
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
      '/vue/': getVueSidebar(),
      '/': getGuideSidebar()
    }
  }
}

function getOtherSidebar() {
  return [
    {
      text: 'Web前端相关',
      children: [
        { text: 'Vue组件', link: '/other/vue-component' },
        { text: '早早聊彩蛋场', link: '/other/zaorun20210529' }
      ]
    }
  ]
}
function getVueSidebar() {
  return [
    {
      text: 'Vue3',
      children: [
        { text: 'Vue3基本情况', link: '/vue/vue3/index' },
        { text: 'Vue3源码解析', link: '/vue/vue3/sourceLean' }
      ]
    },
    {
      text: 'Vue2',
      children: [
        { text: 'Vue2基本情况', link: '/vue/vue2/index' }
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
        { text: 'Web前端性能指标', link: '/web/webPerformance' },
        { text: '递归组件', link: '/web/recursion' }
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
