import GoogleMapReact from "google-map-react";
import {useState} from 'react';

// maps component
const Maps =({latlng, zoom}) =>{
    const [key]=useState("AIzaSyB7GP4r5D5IeAC3W2G6Aj_bfAjN93PlMLQ");
    const [inLatLng, setLatLng]=useState(latlng);
    const [inZoom, setZoom]=useState(zoom);

return (
    <div style={{height:"300px"}}>
        <GoogleMapReact bootstrapURLKeys={{key}}
            center={inLatLng}
            defaultZoom={inZoom}
        >
            <ReactMapPointComponent
                lat={inLatLng.lat}
                lng={inLatLng.lng}
            />
        </GoogleMapReact>
    </div>
    );
}

const ReactMapPointComponent =() => {
    const markerStyle={
        border:'1px solid white',
        borderRadius:'50px',
        height:10,
        width:10,
        backgroundColor:'red',
        cursor:'pointer',
        zIndex:10,
    };
    return (
        <div style={markerStyle}>

        </div>
    )
}

export default Maps;
