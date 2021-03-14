import React from "react"

import Layout from "../components/layout"
import Container from "../components/container"

const AboutPage = () => (
    <Layout>
        <Container>
            <div >
                <h1>About Me</h1>
                <p>Some stuff</p>
                <img src="https://source.unsplash.com/random/400x200" alt="" />
            </div>
        </Container>
    </Layout>
)

export default AboutPage