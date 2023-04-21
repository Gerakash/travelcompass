import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocatiOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material';

import { StyledPaper, MapContainer, MarkerContainer, Pointer } from './styles';



const Map = ({setBounds, setCoordinates}) => {


    // const isMobile = useMediaQuery('(min-width: 600px)')

    const coordinates = {lat: 0, lng: 0};
    return (
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={10}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    console.log("Event data:", e);
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.bounds.ne, sw: e.bounds.sw });
                }}
                // onChildClick={''}
            >
            </GoogleMapReact>
        </MapContainer>
    );
};

export default Map;

