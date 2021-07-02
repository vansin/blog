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
        text: '数据结构与算法',
        link: '/leetcode/index',
        activeMatch: '^/vue/'
      },
      {
        text: 'JavaScript',
        link: '/JavaScript/index',
        activeMatch: '^/JavaScript/'
      },
      {
        text: 'Vue',
        link: '/vue/index',
        activeMatch: '^/vue/'
      },
      {
        text: '闻星周刊',
        link: '/weekly/index'
      },
      {
        text: '其他',
        link: 'other/index'
      },
      {
        text: 'paper（前端智能化）',
        link: 'paper/index'
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
      '/other/': getOtherSidebar(),
      '/vue/': getVueSidebar(),
      '/leetcode/': getLeetcodeSidebar(),
      '/paper/': getPaperSidebar(),
      '/': getGuideSidebar()
    }
  }
}

function getLeetcodeSidebar() {
  return [
    {
      text: '数据结构与算法',
      children: [
        { text: '算法复杂程度', link: '/leetcode/complexity' },
        { text: '数组&链表', link: '/leetcode/array_linklist' },
      ]
    }
  ]
}
function getPaperSidebar() {
  return [
    {
      text: '前端智能化调研',
      children: [
        { text: '经典论文参考', link: '/paper/reference' },
        { text: '前端智能化落地调研', link: '/paper/front-end-intelligence-research' },
        { text: '数据集汇总', link: '/paper/dataset' },
        { text: '常用模型总结', link: '/paper/common_model' }
      ]
    },
    {
      text: '科研方法论',
      children: [
        { text: '方法论', link: '/paper/methodology' },
        { text: '搭建炼丹炉', link: '/paper/environment' },
        { text: 'docker炼丹炉', link: '/paper/docker' }
      ]
    },
    {
      text: '论文复现',
      children: [
        { text: 'pix2code(论文复现)', link: '/paper/pix2code' },
      ]
    },


  ]
}
function getOtherSidebar() {
  return [
    {
      text: 'Web前端相关',
      children: [
        { text: 'Vue组件', link: '/other/vue-component' },
        { text: '早早聊彩蛋场', link: '/other/zaorun20210529' },
        { text: 'ubuntu', link: '/other/ubuntu' },
        { text: '环境变量相关', link: '/other/environment_value' },
        { text: 'docker', link: '/other/docker' },
        { text: 'ubuntu下高效写作', link: '/other/write_at_ubuntu' },
        { text: '性能监控截图', link: '/other/performance' },
      ]
    },    
    {
      text: '开课吧Web全栈笔记&总结',
      children: [
        { text: 'miniVueRouter', link: '/other/kkb/kkb01' },
        { text: 'miniVue', link: '/other/kkb/kkb02' }
      ]
    },
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
        { text: 'Vue2基本情况', link: '/vue/vue2/index' },
        { text: 'vue plugin', link: '/vue/vue2/plugin' },
        { text: '插槽', link: '/vue/vue2/slot' },
        { text: '数据相关 API', link: '/vue/vue2/DataApi' },
        { text: '事件相关API', link: '/vue/vue2/EventApi' },
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
        { text: '前言', link: '/JavaScript/index' },
        { text: 'Array', link: '/JavaScript/Array' },
        { text: 'Closure', link: '/JavaScript/Closures' },
        { text: '对象、类与面向对象编程', link: '/JavaScript/object' },
        { text: 'this', link: '/JavaScript/this' },
        { text: 'Hoisting', link: '/JavaScript/Hoisting' },
        { text: 'Async', link: '/JavaScript/async' },
        { text: 'ClientStorage', link: '/JavaScript/ClientStorage' },
        { text: 'Proxy', link: '/JavaScript/proxy' },
        { text: 'for', link: '/JavaScript/for' },
        { text: 'class', link: '/JavaScript/class' },
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
      children: [
        { text: '20210704', link: '/weekly/20210704' },
        { text: '20210627', link: '/weekly/20210627' },
        { text: '20210613', link: '/weekly/20210613' },
        { text: '20210606', link: '/weekly/20210606' },
        { text: '20210530', link: '/weekly/20210530' }
    ]
    }
  ]
}
