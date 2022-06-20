import React, { useState, useEffect } from "react";
import axios from "axios";

function saveAPIData() {
 
  return axios.post(
    `https://api.openbrewerydb.org/breweries?by_city=${city}&per_page=${count}`
  );
}

export default saveAPIData;