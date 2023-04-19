// import CssBaseline from "@mui/material/CssBaseline"
import { Grid, CssBaseline } from "@mui/material";


import Header from "../Header";
import Map from "../Map";
import PlacesList from "../PlacesList";

const App = () => {
  return (
    <>
    <CssBaseline/>
    <Header/>
    <Grid container spacing={3} style={{width: "100%"}}>
      <Grid item xs={12} md={4}>
        <PlacesList/>
      </Grid>
      <Grid item xs={12} md={8}>
        <Map/>
      </Grid>

    </Grid>
    </>
  );
}

export default App;
