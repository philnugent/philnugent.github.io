import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { graphql } from "gatsby"
 
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"

export const query = graphql`
  query  {
    site {
      siteMetadata {
        title,
        author,
        description
      }
    }
  }
`
const IndexPage = ({data}) => (

  <Layout>
    <SEO title="Home" />
    <Container>
      <h1>{data.site.siteMetadata.author}</h1>
      <p>{data.site.siteMetadata.description}</p>

      <StaticImage
        src="../images/motorcycle.jpg"
        width={600}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt=""
        style={{ marginBottom: `1.45rem` }}
      />
    </Container>
  </Layout>
)

export default IndexPage
