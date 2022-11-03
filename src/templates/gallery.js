import React from "react"
import { graphql } from "gatsby"
import Carousel from "../components/Carousel"

const gallery = ({
  data: {
    airtable: { data },
  },
}) => {
  const images = data.photos.localFiles

  return <Carousel images={images} />
}

export const query = graphql`
  query gallery($recordId: String) {
    airtable(recordId: { eq: $recordId }) {
      data {
        title
        tags
        author
        url
        photos {
          localFiles {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default gallery
