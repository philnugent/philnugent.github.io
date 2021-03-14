import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import './leafletmap.css'

const LeafletMap = (props) => {
  return (
    <div>
       { typeof window !== 'undefined' && 
        <MapContainer
          center={props.position} 
          zoom={props.zoom}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={props.position}>
            <Popup>
              {props.markerText}
            </Popup>
          </Marker>
        </MapContainer>
          }

    </div>
  )
}

LeafletMap.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  markerText: PropTypes.string,
}

LeafletMap.defaultProps = {
  position: [51, -1],
  zoom: 13,
  markerText: ""
}

export default LeafletMap