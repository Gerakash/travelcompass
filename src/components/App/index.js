import React, {useState, useEffect } from "react";
import { Grid, CssBaseline } from "@mui/material";
import { getPlacesData } from "../../data";

import Header from "../Header";
import Map from "../Map";
import PlacesList from "../PlacesList";

const App = () => {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({})


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coordinates: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, [])

  console.log(coordinates);

  useEffect(() => {
    if (bounds && coordinates) {
      getPlacesData(bounds.sw, bounds.ne)
        .then((data) => {
          console.log(data);
          setPlaces(data);
        });
    }
  }, [coordinates, bounds]);

  console.log(places);

  return (
    <>
    <CssBaseline/>
    <Header/>
    <Grid container spacing={3} style={{width: "100%"}}>
      <Grid item xs={12} md={4}>
        <PlacesList places={places}/>
      </Grid>
      <Grid item xs={12} md={8}>
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
        />
      </Grid>

    </Grid>
    </>
  );
}

export default App;
