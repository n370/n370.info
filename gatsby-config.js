module.exports = {
    siteMetadata: {
        title: '|\\|370.info'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/posts/`
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-katex',
                    'gatsby-remark-prismjs'
                ]
            }
        }
    ]
};