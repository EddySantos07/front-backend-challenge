import React, { useState, useEffect } from "react";
import axios from "axios";

function callBreweryAPI() {
  let city = "new_york";
  let count = 5;
  
  // call brewery api
  return axios.get(
    `https://api.openbrewerydb.org/breweries?by_city=${city}&per_page=${count}`
  );
}

export default callBreweryAPI;
