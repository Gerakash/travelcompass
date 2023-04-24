import React, {useState, useEffect } from "react";
import { Grid, CssBaseline } from "@mui/material";
import { getPlacesData } from "../../data";

import Header from "../Header";
import Map from "../Map";
import PlacesList from "../PlacesList";

const App = () => {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({lat: 0, lng: 0})
  const [bounds, setBounds] = useState({})
  // const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')
  const [filteredPlaces, setfilteredPlaces] = useState([])


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coordinates: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, [])


  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating) 
    setfilteredPlaces(filteredPlaces)
  }, [places, rating])

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true)

      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          console.log(data.filter((place)=> place.name && place.num_reviews > 0))
          setPlaces(data)
          setfilteredPlaces([])
          setIsLoading(false)
        });
    }
  }, [ bounds, type]);

  console.log(places);

  return (
    <>
    <CssBaseline/>
    <Header setCoordinates={setCoordinates}/>
    <Grid container spacing={3} style={{width: "100%"}}>
      <Grid item xs={12} md={4}>
        <PlacesList 
          places={filteredPlaces.length ? filteredPlaces : places}
          // childClicked={childClicked}
          isLoading = {isLoading}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}

        />

      </Grid>
      <Grid item xs={12} md={8}>
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          places={places}
          // setChildClicked = {setChildClicked}
        />
      </Grid>

    </Grid>
    </>
  );
}

export default App;
