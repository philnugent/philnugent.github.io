import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Phil Nugent</h1>
    <p>Personal sandbox of Phil Nugent</p>

    <StaticImage
      src="../images/motorcycle.jpg"
      width={600}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt=""
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
