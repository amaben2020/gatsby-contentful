const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query ProductsQuery {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)

  //product template is what would programmatically create pages
  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve(`src/template/product-template.js`),
      context: {
        slug: product.slug,
      },
    })
  })

  console.log("######")
  console.log(JSON.stringify(result))
  console.log("######")
}
