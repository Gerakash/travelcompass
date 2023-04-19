import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocatiOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material';

import { StyledPaper, MapContainer, MarkerContainer, Pointer } from './styles';



const Map = () => {


    // const isMobile = useMediaQuery('(min-width: 600px)')

    const coordinates = {lat: 0, lng: 0};
    return (
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAMYo0xQ2HmEML7AKgzyWPmBhAvVsL2el8'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={10}
                margin={[50, 50, 50, 50]}
                options={''}
                // onChange={''}
                // onChildClick={''}
            >
            </GoogleMapReact>
        </MapContainer>
    );
};

export default Map;

