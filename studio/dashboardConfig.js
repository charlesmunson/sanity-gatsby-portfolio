export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6259c8ec2ba98c16b2cc4ff3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-nraaqxew',
                  apiId: '1974e1eb-b25c-42cd-91ab-09dcde8de455'
                },
                {
                  buildHookId: '6259c8ecf3c11e1564b7efc7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-daajqmay',
                  apiId: 'e82122ee-4b73-4eca-9cee-c0b6dafcb364'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/charlesmunson/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-daajqmay.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
