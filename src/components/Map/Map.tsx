import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./Map.style.js";

interface Props {
  setCoordinates: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
  setBounds: React.Dispatch<
    React.SetStateAction<{
      sw: {
        lat: number;
        lng: number;
      };
      ne: {
        lat: number;
        lng: number;
      };
    }>
  >;
  coordinates: {
    lat: number;
    lng: number;
  };
  places: {
    name: string;
    photo: {
      images: {
        large: {
          url: string;
        };
      };
    };
    price_level: string;
    ranking: string;
    awards: {
      images: {
        small: string;
      };
      display_name: string;
    }[];
    cuisine: {
      name: string;
    }[];
    address: string;
    phone: string;
    web_url: string;
    website: string;
    latitude: string;
    longitude: string;
  }[];
}

const Map = ({ setCoordinates, setBounds, coordinates, places }: Props) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width: 600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBonI3eCiqFEiIxWhOZkcfkwj94EHiGXiU" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={""}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // onChildClick={""}
      >
        {/* {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  // className={classes.typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
              </Paper>
            )}
          </div>
        ))} */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
