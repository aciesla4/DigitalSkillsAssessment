import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Jewel from '../util/Jewel';

export default class SimpleMap extends Component {
    state = {
        lat: 47.1167748,
        lng: -88.5482105,
        zoom: 13,
    };

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <Map
                center={position}
                zoom={this.state.zoom}
                style={{ width: '100%', height: '90%', position: 'absolute', top: '60px', zIndex: '-1' }}
            >
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[47.468824, -87.890311]} onClick={(id) => this.props.logClick("level 12 copper harbor popup")}>
                    <Popup>
                        Copper Harbor <br/>
                        <Jewel handleFound={(e) => this.props.handleFound(e)}/><br/><br/><br/><br/>
                    </Popup>
                </Marker>
                <Marker position={[47.121231, -88.564461]} onClick={(id) => this.props.logClick("level 12 houghton popup")}>
                    <Popup>Houghton</Popup>
                </Marker>
                <Marker position={[47.130692, -88.591217]} onClick={(id) => this.props.logClick("level 12 hancock popup")}>
                    <Popup>Hancock</Popup>
                </Marker>
                <Marker position={[47.198250, -88.408562]} onClick={(id) => this.props.logClick("level 12 lake linden popup")}>
                    <Popup>Lake Linden</Popup>
                </Marker>
                <Marker position={[47.251579, -88.452751]} onClick={(id) => this.props.logClick("level 12 calumet popup")}>
                    <Popup>Calumet</Popup>
                </Marker>
                <Marker position={[47.413799, -88.295575]} onClick={(id) => this.props.logClick("level 12 eagle river popup")}>
                    <Popup>Eagle River</Popup>
                </Marker>
                <Marker position={[47.458157, -88.162197]} onClick={(id) => this.props.logClick("level 12 eagle harbor popup")}>
                    <Popup>Eagle Harbor</Popup>
                </Marker>
                <Marker position={[47.388827, -87.955023]} onClick={(id) => this.props.logClick("level 12 bete grise popup")}>
                    <Popup>Bete Grise</Popup>
                </Marker>
                <Marker position={[47.227376, -88.163722]} onClick={(id) => this.props.logClick("level 12 gay popup")}>
                    <Popup>Gay</Popup>
                </Marker>
            </Map>
        )
    }
}
