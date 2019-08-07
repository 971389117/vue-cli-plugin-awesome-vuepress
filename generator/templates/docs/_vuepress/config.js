module.exports = {
    title: '<%= options.projectName%>',
    description: 'Just playing around',
    base:'/<%= options.projectName%>/',
    themeConfig: {
        lastUpdated: 'Last Updated',
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
                link: 'https://google.com'
            },
            {
                text: 'Languages',
                items: [{
                        text: '简体中文',
                        link: '/language/chinese'
                    },
                    {
                        text: 'Japanese',
                        link: '/language/japanese'
                    }
                ]
            }
        ],
        sidebar: [{
                title: '快速启动',
                collapsable: true,
                children: [
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: true,
                children: [
                    '/components/cat/',
                    '/components/dog/',
                ]
            }
        ]
    }
}
