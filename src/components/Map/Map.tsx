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
}

const Map = ({ setCoordinates, setBounds, coordinates }: Props) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");
  // const coordinates = { lat: 0, lng: 0 };

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
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
