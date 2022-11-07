import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Galleries from "../components/Galleries"
import Survey from "../components/Survey"
import Contact from "../components/Contact"
const homePage = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <About />
      <Galleries galleries={data.allAirtable.nodes} />
      <Survey />
      <Contact />
    </Layout>
  )
}
export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "galleries" } }
      sort: { fields: id, order: DESC }
    ) {
      nodes {
        id
        recordId
        data {
          title
          tags
          author
          url
          highlight
          photos {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`
export default homePage
