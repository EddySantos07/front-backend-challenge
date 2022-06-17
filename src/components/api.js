import React, { useState, useEffect } from "react";
import axios from axios;

function callBreweryAPI() {

  const [ apiData, setApiData ] = useState();

  useEffect(() => {
    let city = "new_york";

    // call brewery api
    axios.get('https://api.openbrewerydb.org/breweries?by_city=san_diego&per_page=3')
    .then( (data) => {
        setApiData(data);
    })
  });

  return <div></div>;
}

export default callBreweryAPI;