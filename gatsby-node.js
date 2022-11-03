const path = require(`path`)
const slugify = require("slugify")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise(async resolve => {
    const result = await graphql(`
      {
        allAirtable(filter: { table: { eq: "galleries" } }) {
          edges {
            node {
              table
              recordId
              data {
                title
                author
                photos {
                  localFiles {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                tags
                url
              }
            }
          }
        }
      }
    `)
    // For each path, create page and choose a template.
    // values in context Object are available in that page's query
    result.data.allAirtable.edges.forEach(({ node }) => {
      const slug = slugify(node.data.title, { lower: true })
      createPage({
        path: `/${slug}`,
        component: path.resolve(`./src/templates/gallery.js`),
        context: {
          recordId: node.recordId,
        },
      })
    })
    resolve()
  })
}
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/gallery",
//     component: require.resolve("./src/templates/gallery.js"),
//     context: {},
//     defer: true,
//   })
// }
