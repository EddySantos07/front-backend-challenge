import React, { useState, useEffect } from "react";
import axios from "axios";

function saveAPIData(Breweries) {
  return axios
    .post(`/saveBreweryData`, {
      Breweries,
    })
    .then((data) => {
      console.log(data, " was it a successful post?");
    })
    .catch((err) => {
      console.log(err, "err posting breweries");
    });
}

export default saveAPIData;
