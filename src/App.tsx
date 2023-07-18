import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([
    {
      name: "",
      photo: {
        images: {
          large: {
            url: "",
          },
        },
      },
      price_level: "",
      ranking: "",
      awards: [
        {
          images: {
            small: "",
          },
          display_name: "",
        },
      ],
      cuisine: [
        {
          name: "",
        },
      ],
      address: "",
      phone: "",
      web_url: "",
      website: "",
      latitude: "",
      longitude: "",
    },
  ]);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState({
    sw: {
      lat: 0,
      lng: 0,
    },
    ne: {
      lat: 0,
      lng: 0,
    },
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coordinates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
