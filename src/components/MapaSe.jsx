import React, {Component} from "react";
import {Map, GeoJSON} from "react-leaflet";
import mapaData from "../data/json_geojs-sergipe.json";
import "leaflet/dist/leaflet.css";

import "./styles.css";

class MapaSe extends Component {
    state={};

    componentDidMount(){
        console.log(mapaData);
    }

    estadoStyle ={
        color: "#11183D",
        wheight: 1,
    };

    onEachEstado =(estado, layer) => {
        const estadoNome = estado.properties.name;
        const estadoid = estado.properties.id;
        console.log(estadoNome);
        layer.bindPopup("Cidade: "+estadoNome+" id: "+ estadoid);

        layer.on({
            mouse:(event) =>{
                event.mouse("Cidade: "+estadoNome+" id: "+ estadoid)
            }
        })
        layer.options.fillOpacity = Math.random();
    };
    render(){
        return(
            <div>
              <h1 style={{textAlign: "center"}}></h1>
              <Map style={{height:"80vh"}} zoom={8.4} center={[-10.5,-37.3]}>
                  <GeoJSON style={this.estadoStyle} data={mapaData.features} onEachFeature={this.onEachEstado}/>
              </Map>
            </div>
        )
    }
}

export default MapaSe;
