import React, { useState, useEffect } from "react";

import callBreweryAPI from "../api";

import GoogleMapReact from "google-map-react";

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
        <ul className="list-group">
          {currentBrewerys.map((brewery) => {
            return (
              <>
                <li className="list-group-item">
                  <div> {brewery.name} </div>
                  <div> {brewery.brewery_type}</div>
                  <div>
                    {" "}
                    {brewery.street}, {brewery.city}, {brewery.state},{" "}
                    {brewery.postal_code}
                  </div>
                  <div>
                    {" "}
                    <a target="_blank" href={brewery.website_url}>
                      {" "}
                      {brewery.website_url}
                    </a>{" "}
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      ) : (
        <div> No current Brewerys available </div>
      )}

      <div> {/*here the map will go  */}</div>
    </div>
  );
}

export default home;
