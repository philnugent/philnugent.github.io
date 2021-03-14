import React from "react"

import Layout from "../components/layout"
import Container from "../components/container"
import Post from "../components/post"

const PostsPage = () => (
    <Layout>
        <Container>
            <h1>Super Helpful Advice</h1>
            <p>Recent Posts</p>
            <Post
                title="5 things you must do if you want to do that"
                avatar="https://source.unsplash.com/random/400x200"
                excerpt="Doing that isn't easy.  Here are 5 tricks I deiscovered to do that."
            />
            <Post
                title="10 ways how I did this"
                avatar="https://source.unsplash.com/random/400x200"
                excerpt="You may think doing this is difficult. Learn the 10 ways I did this with ease."
            />
        </Container>
    </Layout>
)

export default PostsPage