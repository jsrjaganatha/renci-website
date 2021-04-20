const path = require(`path`)
const createPagesQuery = require(`./gatsby/create-pages-query`)

const now = new Date()
const dateString = `${ now.getFullYear() }-${ now.getMonth() + 1 < 10 ? '0' : '' }${ now.getMonth() + 1 }-${ now.getDate()  < 10 ? '0' : '' }${ now.getDate() }`

console.log(`\n\nStarting build, ${ now }\n\n`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions

  // add path field to reference each object's page public URL when used in client
  if (node.internal.type === 'PeopleYaml') { createNodeField({ node, name: 'path', value: `/people/${ node.id }` }) }
  else if (node.internal.type === 'GroupsYaml') { createNodeField({ node, name: 'path', value: `/research/${ node.id }` }) }
  else if (node.internal.type === 'TeamsYaml') { createNodeField({ node, name: 'path', value: `/teams/${ node.id }` }) }
  else if (node.internal.type === 'CollaborationsYaml') { createNodeField({ node, name: 'path', value: `/research/${ node.id }` }) }
  else if (node.internal.type === 'ProjectsYaml') { createNodeField({ node, name: 'path', value: `/projects/${ node.id }` }) }
  else if (node.internal.type === 'MarkdownRemark') {
    const matches = node.fileAbsolutePath.match(/content\/news\/(features|blog)\/(\d{4})\/(\d{2})\/.+\/index.md$/)
    if (matches) {
      const [, fileDirectory, yyyy, dd] = matches
      const newsType = (fileDirectory === 'blog') ? 'blog' : (fileDirectory === 'features') ? 'news' : 'unsorted'
      const publicDir = (fileDirectory === 'blog') ? 'blog' : (fileDirectory === 'features') ? 'news' : 'unsorted'
      const path = `/${ publicDir }/${ yyyy }/${ dd }/${ node.frontmatter.slug }`
      createNodeField({ node, name: 'newsType', value: newsType })
      createNodeField({ node, name: 'path', value: path })
    }
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type PeopleYaml implements Node {
      teams: [TeamsYaml] @link(by: "members.id", from: "id")
      groups: [GroupsYaml] @link(by: "members.id", from: "id")
      collaborations: [CollaborationsYaml] @link(by: "members.id", from: "id")
      projects: [ProjectsYaml] @link(by: "members.id", from: "id")
      role: String
    }
  `
  createTypes(typeDefs)
}

exports.createResolvers = ({ actions, createResolvers }) => {
  const fullName = {
    type: "String",
    resolve(source, args, context, info) {
      return `${ source.name.first } ${ source.name.last }`
    }
  }
  const resolvers = {
    PeopleYaml: {
      fullName,
      teams: {
        type: ["TeamsYaml"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            query: { filter: { members: { elemMatch: { id: { eq: source.id } } } } },
            type: "TeamsYaml",
            firstOnly: false,
          })
        }
      },
      groups: {
        type: ["GroupsYaml"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            query: { filter: { members: { elemMatch: { id: { eq: source.id } } } } },
            type: "GroupsYaml",
            firstOnly: false,
          })
        }
      },
      collaborations: {
        type: ["CollaborationsYaml"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            query: { filter: { members: { elemMatch: { id: { eq: source.id } } } } },
            type: "CollaborationsYaml",
            firstOnly: false,
          })
        },
      },
      projects: {
        type: ["ProjectsYaml"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            query: { filter: { members: { elemMatch: { id: { eq: source.id } } } } },
            type: "ProjectsYaml",
            firstOnly: false,
          })
        },
      },
      news: {
        type: ["MarkdownRemark"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            query: { filter: { frontmatter: { people: { elemMatch: { id: { eq: source.id } } } } } },
            type: "MarkdownRemark",
            firstOnly: false,
          })
        }
      },
      authoredNews: {
        type: ["MarkdownRemark"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            query: { filter: { frontmatter: { author: { elemMatch: { id: { eq: source.id } } } } } },
            type: "MarkdownRemark",
            firstOnly: false,
          })
        }
      },
    },
    TeamsYaml: {
      members: {
        type: ["PeopleYaml"],
        resolve(source, args, context, info) {
          if (!source.members) { return [] }
          const memberIds = source.members.map(member => member.id)
          // console.log(source.members.map(({ id, role }) => `${ id } (${ role })`))
          return context.nodeModel.getNodesByIds({ ids: memberIds })
            .map(node => {
              const index = source.members.findIndex(member => member.id === node.id)
              if (index === -1) {
                return node
              }
              return ({ ...node, role: source.members[index].role })
            })
        }
      },
    },
    GroupsYaml: {
      members: {
        type: ["PeopleYaml"],
        resolve(source, args, context, info) {
          if (!source.members) { return [] }
          const memberIds = source.members.map(member => member.id)
          // console.log(source.members.map(({ id, role }) => `${ id } (${ role })`))
          return context.nodeModel.getNodesByIds({ ids: memberIds })
            .map(node => {
              const index = source.members.findIndex(member => member.id === node.id)
              if (index === -1) {
                return node
              }
              return ({ ...node, role: source.members[index].role })
            })
        }
      },
      news: {
        type: ["MarkdownRemark"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            query: {
              sort: { fields: ['frontmatter.publishDate'], order: ['DESC'] },
              filter: {
                frontmatter: {
                  publishDate: {  lte: dateString },
                  groups: { elemMatch: { id: { eq: source.id } } }
                }
              }
            },
            type: "MarkdownRemark",
            firstOnly: false,
          })
        }
      },
    },
    CollaborationsYaml: {
      members: {
        type: ["PeopleYaml"],
        resolve(source, args, context, info) {
          if (!source.members) { return [] }
          const memberIds = source.members.map(member => member.id)
          // console.log(source.members.map(({ id, role }) => `${ id } (${ role })`))
          return context.nodeModel.getNodesByIds({ ids: memberIds })
            .map(node => {
              const index = source.members.findIndex(member => member.id === node.id)
              if (index === -1) {
                return node
              }
              return ({ ...node, role: source.members[index].role })
            })
        }
      },
      news: {
        type: ["MarkdownRemark"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            query: { filter: { frontmatter: { collaborations: { elemMatch: { id: { eq: source.id } } } } } },
            type: "MarkdownRemark",
            firstOnly: false,
          })
        }
      },
    },
    ProjectsYaml: {
      members: {
        type: ["PeopleYaml"],
        resolve(source, args, context, info) {
          if (!source.members) { return [] }
          const memberIds = source.members.map(member => member.id)
          // console.log(source.members.map(({ id, role }) => `${ id } (${ role })`))
          return context.nodeModel.getNodesByIds({ ids: memberIds })
            .map(node => {
              const index = source.members.findIndex(member => member.id === node.id)
              if (index === -1) {
                return node
              }
              return ({ ...node, role: source.members[index].role })
            })
        }
      },
      news: {
        type: ["MarkdownRemark"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            query: { filter: { frontmatter: { projects: { elemMatch: { id: { eq: source.id } } } } } },
            type: "MarkdownRemark",
            firstOnly: false,
          })
        }
      },
      group: {
        type: ["GroupsYaml"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            query: { filter: { projects: { elemMatch: { id: { eq: source.id } } } } },
            type: "GroupsYaml",
            firstOnly: false,
          })
        }
      },
    },
  }
  createResolvers(resolvers)
}
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const personTemplate = path.resolve(`src/templates/person-template.js`)
  const groupTemplate = path.resolve(`src/templates/group-template.js`)
  const teamTemplate = path.resolve(`src/templates/team-template.js`)
  const projectTemplate = path.resolve(`src/templates/project-template.js`)
  const collaborationTemplate = path.resolve(`src/templates/collaboration-template.js`)
  const newsArticleTemplate = path.resolve(`src/templates/news-article-template.js`)

  return await graphql(createPagesQuery).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    
    // Create person pages
    const people = result.data.people.edges
    console.log(`\nCreating staff pages...`)
    const createPersonPage = ({ node }) => {
      console.log(` - ${ node.name.first } ${ node.name.last } (${ node.fields.path })`)
      createPage({
        id: node.id,
        path: node.fields.path,
        component: personTemplate,
        context: { // additional data passed via context
          id: node.id,
        },
      })
    }
    people.forEach(createPersonPage)

    // Create group pages
    const groups = result.data.groups.edges
    console.log(`\nCreating group pages...`)
    const createGroupPage = ({ node }) => {
      console.log(` - ${ node.name } (${ node.fields.path })`)
      createPage({
        id: node.id,
        path: node.fields.path,
        component: groupTemplate,
        context: { // additional data passed via context
          id: node.id,
        },
      })
    }
    groups.forEach(createGroupPage)

    // Create project pages
    const projects = result.data.projects.edges
    console.log(`\nCreating project pages...`)
    const createProejctPage = ({ node }) => {
      console.log(` - ${ node.name } (${ node.fields.path })`)
      createPage({
        id: node.id,
        path: node.fields.path,
        component: projectTemplate,
        context: { // additional data passed via context
          id: node.id,
        },
      })
    }
    projects.forEach(createProejctPage)

    // Create team pages
    const teams = result.data.teams.edges
    console.log(`\nCreating team pages...`)
    const createTeamPage = ({ node }) => {
      console.log(` - ${ node.name } (${ node.fields.path })`)
      createPage({
        id: node.id,
        path: node.fields.path,
        component: teamTemplate,
        context: { // additional data passed via context
          id: node.id,
        },
      })
    }
    teams.forEach(createTeamPage)

    // Create collaboration pages
    const collaborations = result.data.collaborations.edges
    console.log(`\nCreating collaboration pages...`)
    const createCollaborationPage = ({ node }) => {
      console.log(` - ${ node.name } (${ node.fields.path })`)
      createPage({
        id: node.id,
        path: node.fields.path,
        component: collaborationTemplate,
        context: { // additional data passed via context
          id: node.id,
        },
      })
    }
    collaborations.forEach(createCollaborationPage)

    // Create news article pages
    const newsArticles = result.data.news.edges
    console.log(`\nCreating news pages...`)
    const createNewsArticlePage = ({ node }, index) => {
      const matches = node.fileAbsolutePath.match(/content\/news\/features\/(\d{4}\/\d{2})\/.+\/index.md$/)
      if (matches) {
        const [, yyyydd] = matches
        const path = `/news/${ yyyydd }/${ node.frontmatter.slug }`
        console.log(` - ${ node.frontmatter.title } (${ path })`)
        createPage({
          path: path,
          component: newsArticleTemplate,
          context: { // additional data passed via context
            slug: node.frontmatter.slug,
            prevArticle: index === newsArticles.length - 1 ? null : newsArticles[index + 1].node,
            nextArticle: index === 0 ? null : newsArticles[index - 1].node,
          },
        })
      }
    }
    newsArticles.forEach(createNewsArticlePage)

    // Create blog article pages
    const blogArticles = result.data.blog.edges
    console.log(`\nCreating blog pages...`)
    const createBlogArticlePage = ({ node }, index) => {
      const matches = node.fileAbsolutePath.match(/content\/news\/blog\/(\d{4}\/\d{2})\/.+\/index.md$/)
      if (matches) {
        const [, yyyydd] = matches
        const path = `/blog/${ yyyydd }/${ node.frontmatter.slug }`
        console.log(` - ${ node.frontmatter.title } (${ path })`)
        createPage({
          path: path,
          component: newsArticleTemplate,
          context: { // additional data passed via context
            slug: node.frontmatter.slug,
            prevArticle: index === blogArticles.length - 1 ? null : blogArticles[index + 1].node,
            nextArticle: index === 0 ? null : blogArticles[index - 1].node,
          },
        })
      }
    }
    blogArticles.forEach(createBlogArticlePage)

    return [
      ...people,
      ...groups,
      ...projects,
      ...teams,
      ...collaborations,
      ...newsArticles,
      ...blogArticles,
    ]
  })
}