import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Jewel from '../util/Jewel';

export default class SimpleMap extends Component {
    state = {
        lat: 47.1167748,
        lng: -88.5482105,
        zoom: 13,
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <Map
                center={position}
                zoom={this.state.zoom}
                style={{ width: '100%', height: '600px', position: 'absolute', top: '60px', zIndex: '-1' }}
            >
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[47.468824, -87.890311]}>
                    <Popup>
                        Copper Harbor <br/>
                        <Jewel handleFound={this.props.handleFound}/><br/><br/><br/><br/>
                    </Popup>
                </Marker>
                <Marker position={[47.121231, -88.564461]}>
                    <Popup>Houghton</Popup>
                </Marker>
                <Marker position={[47.130692, -88.591217]}>
                    <Popup>Hancock</Popup>
                </Marker>
                <Marker position={[47.198250, -88.408562]}>
                    <Popup>Lake Linden</Popup>
                </Marker>
                <Marker position={[47.251579, -88.452751]}>
                    <Popup>Calumet</Popup>
                </Marker>
                <Marker position={[47.413799, -88.295575]}>
                    <Popup>Eagle River</Popup>
                </Marker>
                <Marker position={[47.458157, -88.162197]}>
                    <Popup>Eagle Harbor</Popup>
                </Marker>
                <Marker position={[47.388827, -87.955023]}>
                    <Popup>Bete Grise</Popup>
                </Marker>
                <Marker position={[47.227376, -88.163722]}>
                    <Popup>Gay</Popup>
                </Marker>
            </Map>
        )
    }
}
