import React, { useState, useEffect } from "react";

import callBreweryAPI from "../api";

function home() {
  let [currentBrewerys, setCurrentBrewerys] = useState([]);

  useEffect(() => {
    let breweryData = callBreweryAPI().then((data) => {
      console.log(data.data);
      setCurrentBrewerys(data.data);
    });
  }, []);

  return (
    <div>
      {currentBrewerys.length > 0 ? (
        currentBrewerys.map((brewery) => {
          return (
            <>
              <div> {brewery.name} </div>
              <div> {brewery.brewery_type}</div>
              <div>
                {" "}
                {brewery.street}, {brewery.city}, {brewery.state},{" "}
                {brewery.postal_code}
              </div>
              <div>
                {" "}
                <a href={brewery.website_url}> {brewery.website_url}</a>{" "}
              </div>
            </>
          );
        })
      ) : (
        <div> No current Brewerys available </div>
      )}
    </div>
  );
}

export default home;
