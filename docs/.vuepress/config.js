module.exports = {
    title: '互动游戏',
    description: 'Canvas webGL CSS3',
    themeConfig: {
        editLinks: true,
        docsDir: 'docs',
        lastUpdated: '上次更新',
        editLinks: true,
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: 'Canvas',
                items: [{
                    text: '图形绘制',
                    link: '/Canvas_ch01/'
                }, {
                    text: '文本',
                    link: '/Canvas_ch02/'
                }],
            },
            {
                text: 'webGL',
                link: '/webGL/'
            },
            {
                text: 'CSS3',
                link: '/CSS3/'
            }
        ],
        sidebar: {
            '/Canvas_ch01/': ['d01', 'd02', 'd03', 'd04', 'd05', 'd06', 'd07', 'd08', 'd09', 'd10'],
            '/Canvas_ch02/': ['t01', 't02', 't03'],
            '/CSS3/': ['c01', 'c02', 'c03', 'c04', 'c05', 'c06']
        }
    }
}