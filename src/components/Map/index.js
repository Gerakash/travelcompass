import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocatiOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material';

import { StyledPaper, MapContainer, MarkerContainer, Pointer } from './styles';



const Map = ({setCoordinates, setBounds, coordinates}) => {


    const isMobile = useMediaQuery('(min-width: 600px)')

    return (
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={10}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                  }}

                // onChildClick={''}
            >
            </GoogleMapReact>
        </MapContainer>
    );
};

export default Map;

