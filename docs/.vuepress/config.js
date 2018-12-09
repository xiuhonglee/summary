module.exports = {
    base: '/',
    title: '程序设计开发',
    description: '学习实践总结',
    markdown: {
        lineNumbers: true,
        config: _ => {
            _.use(require('markdown-it-html5-embed'), {
                html5embed: {
                    useImageSyntax: true,
                    useLinkSyntax: false,
                    attributes: {
                        'video': 'width="600" class="audioplayer" controls'
                    }
                }
            })
        }
    },
    themeConfig: {
        editLinks: true,
        // displayAllHeaders: true,
        docsDir: 'docs',
        lastUpdated: '上次更新',
        editLinks: true,
        nav: [{
            text: '首页',
            link: '/'
        },
        {
            text: '前端相关',
            items: [{
                text: 'Canvas',
                link: '/Canvas/'
            }, {
                text: 'webGL',
                link: '/webGL'
            }, {
                text: 'CSS3',
                link: '/CSS3/c02'
            }, {
                text: 'SVG',
                link: '/SVG/s01'
            }]
        },
        {
            text: '服务端相关',
            items: [{
                text: 'Node',
                link: '/Node/'
            }]
        },
        {
            text: '运维相关',
            items: [{
                text: 'MySQL',
                link: '/MySQL/m01'
            }, {
                text: 'Nginx',
                link: '/Nginx/n01'
            }]
        }
        ],
        sidebar: {
            '/Canvas/': ['d01', 'd02'],
            '/CSS3/': ['c02', 'c03', 'c04', 'c05'],
            '/SVG/': ['s01', 's01-01', 's02', 's03', 's04', 's05', 's06', 's07'],
            '/Nginx/': ['n01', 'n02', 'n03', 'n04', 'n05'],
            '/MySQL/': ['m01', 'm02']
        }
    }
}