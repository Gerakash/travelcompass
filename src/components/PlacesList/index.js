import React, {useState, useEffect, createRef} from 'react';
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import {StyledFormControl, SelectEmpty, Loading, Container, MarginBottom, List } from './styles'
import PlaceDetails from '../PlaceDetails'

const PlacesList = ({places, childClicked, isLoading, type, setType, rating, setRating}) => {
    // const [type, setType] = useState('restaurants')
    // const [rating, setRating] = useState('')
    const [elRefs, setElRefs] = useState([])

    useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef())
        setElRefs(refs)
    }, [places])

    return (
        <Container>
            <Typography variant='4'>Restaurants, Hotels & Attractions</Typography>
            {isLoading ? (
                <Loading>
                    <CircularProgress size="5rem"/>
                </Loading>
            ) : (
                <>
            <FormControl component={StyledFormControl}>
                <InputLabel>Choose</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl component={FormControl}>
                <InputLabel>Ratings</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>3 +</MenuItem>
                    <MenuItem value={4}>4 +</MenuItem>
                    <MenuItem value={4.5}>4.5 +</MenuItem>
                </Select>
            </FormControl>
            <List container spacing={3} component={Grid}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails 
                            place={place}
                            selected={childClicked === i}
                            refProp={elRefs[i]}
                        />
                    </Grid>
                ))}
            </List>
            </>
            )}
        </Container>
    );
};

export default PlacesList;