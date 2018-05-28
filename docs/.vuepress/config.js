module.exports = {
    title: 'vuepress',
    description: 'Just playing around',
    themeConfig: {
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'External',
                items: [{
                        text: 'Chinese',
                        link: '/language/chinese'
                    },
                    {
                        text: 'Japanese',
                        link: '/language/japanese'
                    }
                ]
            }
        ],
        sidebar: {
            '/guide/': genSidebarConfig('指南')
        }
    }
}

function genSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            '',
            'getting-started'
        ]
    }]
}