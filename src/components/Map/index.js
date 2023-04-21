import React from 'react';
import { styled } from '@mui/system';

import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocatiOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Rating } from '@mui/material';


const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100px',
  }));

const MapContainer = styled('div')({
    height: '85vh',
    width: '100%',
  });
  
const MarkerContainer = styled('div')(({ theme }) => ({
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': {
      zIndex: 2,
    },
  }));
  
const Pointer = styled('img')({
    cursor: 'pointer',
  });

const Map = ({setBounds, setCoordinates, places}) => {


    const isDesktop = useMediaQuery('(min-width: 600px)')

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
                {places?.map((place, i) => (
                    <MarkerContainer
                        lat = {Number(place.latitude)}
                        lng = {Number(place.longitude)}
                        key={i}
                    >
                        {
                            !isDesktop ? (
                                <LocatiOnOutlinedIcon color='primary' fontSize='large'/>
                            ) : (
                                <StyledPaper elevation={3}>
                                    <Typography variant='subtitles2' gutterBottom>
                                        {place.name}
                                    </Typography>
                                        <Pointer 
                                        src ={ place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                        alt={place.name}
                                        />
                                        <Rating size='small' value={Number(place.rating)} readOnly />
                                </StyledPaper>
                            )
                        }
                    </MarkerContainer>
                ))}
            </GoogleMapReact>
        </MapContainer>
    );
};

export default Map;

