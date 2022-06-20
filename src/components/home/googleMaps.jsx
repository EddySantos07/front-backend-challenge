import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";

function GoogleMaps({ lat, lang, text }) {
  console.log(lat, lang, "lat lang updates??");
  let centerx = [Number(lat), Number(lang)];
  const API_KEY = process.env.REACT_APP_API_KEY;
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: API_KEY }}
      defaultCenter={[40.73, -73.93]} // default cordinates for nyc
      defaultZoom={11}
      //   initialCenter={centerx}
      center={centerx}
    >
      <CurrentPin lat={lat} lng={lang} text={text} />
    </GoogleMapReact>
  );
}
const iconStyle = {
  borderRadius: "100px",
  boxShadow: "3px 3px 1px #888888",
};

const CurrentPin = ({ text }) => {
  return (
    <div>
      <PinDropOutlinedIcon
        name="user circle outline"
        color="blue"
        size="big"
        style={iconStyle}
      />
      {text}
    </div>
  );
};

// function InitMapForBrewery({ text }) {
//     console.log( "--", text,"Text>??")
//   return (
//     <div
//       style={{
//         color: "white",
//         background: "red",
//         padding: "15px 10px",
//         display: "inline-flex",
//         textAlign: "center",
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: "100%",
//         transform: "translate(-50%, -50%)",
//       }}
//     >
//       {text}
//     </div>
//   );
// }

export default GoogleMaps;
