import { styled } from '@mui/system';
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, Select, FormControl } from "@mui/material";
import PlaceDetails from '../PlaceDetails'


const Container = styled('div')({
    padding: '25px',
  })

const FilterContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(3),
  }));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: '30px',
  }))

const Loading = styled('div')({
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  })

const List = styled('div')({
    height: '75vh',
    overflow: 'auto',
  })

  
const PlacesList = ({places, isLoading, type, setType, rating, setRating}) => {

    return (
        <Container>
            <Typography variant='4'>Restaurants & Attractions</Typography>
            {isLoading ? (
                <Loading>
                    <CircularProgress size="5rem"/>
                </Loading>
            ) : (
                <>
                <FilterContainer>
                <StyledFormControl>
                    {/* <InputLabel>Choose</InputLabel> */}
                    <Select value={type} onChange={(e) => setType(e.target.value)}>
                        <MenuItem value="restaurants">Restaurants</MenuItem>
                        <MenuItem value="attractions">Attractions</MenuItem>
                    </Select>
                </StyledFormControl>
                <StyledFormControl>
                    <InputLabel>Ratings</InputLabel>
                    <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                        <MenuItem value={0}>All</MenuItem>
                        <MenuItem value={3}>3 +</MenuItem>
                        <MenuItem value={4}>4 +</MenuItem>
                        <MenuItem value={4.5}>4.5 +</MenuItem>
                    </Select>
                </StyledFormControl>
                </FilterContainer>
            <List container spacing={3} component={Grid}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails 
                            place={place}
                            // selected={childClicked === i}
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