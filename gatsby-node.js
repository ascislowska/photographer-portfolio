exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/gallery",
    component: require.resolve("./src/templates/gallery.js"),
    context: {},
    defer: true,
  })
}
