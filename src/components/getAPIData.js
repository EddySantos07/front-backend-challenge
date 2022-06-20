import React, { useState, useEffect } from "react";
import axios from "axios";

function getAPIData(Breweries) {
  return axios
    .get(`/getBreweryData`, {
      Breweries,
    })
    .then((data) => {
        return data
    })
    .catch((err) => {
      console.log(err, "err fetching breweries");
    });
}

export default getAPIData;
