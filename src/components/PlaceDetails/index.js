import React from 'react';
import { styled } from '@mui/system';
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import Rating from '@mui/material'



const StyledChip = styled(Chip)({
    margin: '5px 5px 5px 0',
  });
  
  const Subtitle = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px',
  });
  
  const Spacing = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  });
  

const PlaceDetails = ({place}) => {
    console.log(place);
    return (
        <Card elevation={6}>
            <CardMedia
            style={{height: 350}}
            image={ place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
            title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name}/>
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({name}) => (
                    <StyledChip key="name" size="smal" label={name}></StyledChip>
                ))}

                {place?.address && (
                    <Subtitle gutterBottom variant="subtitle2" color="textSecondary">
                        <LocationOnIcon/> {place.address}                    
                    </Subtitle>
                )}
                {place?.address && (
                    <Spacing gutterBottom variant="subtitle2" color="textSecondary">
                        <PhoneIcon/> {place.phone}                    
                    </Spacing>
                )}
                <CardActions>
                    <Button size='small' color='primary' onClick={() => window.open(place.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size='small' color='primary' onClick={() => window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default PlaceDetails;