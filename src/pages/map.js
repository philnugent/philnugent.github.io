import React from "react"

import Layout from "../components/layout"
import Container from "../components/container"
import LeafletMap from "../components/leafletmap"

const MapPage = () => (
  <Layout>
    <Container>
        <LeafletMap
          position={[35.96,-83.92]}
          zoom={8}
          markerText={"Hello, this is a marker"}
        />
    </Container>
  </Layout>
)

export default MapPage