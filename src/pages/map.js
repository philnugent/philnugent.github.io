import React from "react"

import Layout from "../components/layout"
import LeafletMap from "../components/leafletmap"

const MapPage = () => (
  <Layout>
   
        <LeafletMap
          position={[35.96,-83.92]}
          zoom={8}
          markerText={"Hello, this is a marker"}
        />
  </Layout>
)

export default MapPage