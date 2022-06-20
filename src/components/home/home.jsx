import React, { useState, useEffect } from "react";

import callBreweryAPI from "../api";
// import

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import Card from "@mui/material/Card";
import ButtonBase from "@mui/material/ButtonBase";
import CardActionArea from "@mui/material/CardActionArea";
import { makeStyles } from "@mui/styles";

import GoogleMaps from "./googleMaps";

function home() {
  let [currentBrewerys, setCurrentBrewerys] = useState([]);

  useEffect(() => {
    let breweryData = callBreweryAPI().then((data) => {
      // console.log(data.data);
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

const useOverRideStyles = makeStyles({
  width: "auto",
});

const drawerWidth = 500;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  let [currentBrewerys, setCurrentBrewerys] = useState([]);
  let [currentBrewryName, setCurrentBrewryName] = useState("");

  let [currentLatLang, setCurrentLatLang] = useState([40.73, -73.93]);
  let [isValidLocation, setIsValidLocation] = useState("");

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const defaultMUI = useTheme();

  useEffect(() => {
    let breweryData = callBreweryAPI().then((data) => {
      console.log(data.data);
      setCurrentBrewerys(data.data);
    });
  }, []);

  const handleDrawerOpen = ({ name, latitude, longitude }) => {
    setCurrentBrewryName(name);

    console.log(latitude, longitude, "??");
    if (latitude !== null && longitude !== null) {
      setCurrentLatLang([latitude, longitude]);
    } else {
      setIsValidLocation("Couldnt Get Brewery Location! ");
    }

    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>

      <Main open={open}>
        <DrawerHeader />
        <>
          <div>
            {currentBrewerys.length > 0 ? (
              <Box
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  boxShadow: 1,
                }}
              >
                <List>
                  {currentBrewerys.map((brewery, i) => {
                    // if (!brewery.latitude && !brewery.longitude) { // this was for testing brewery locations if there is no location map will say Couldnt Get Brewery Location! in nyc there is no location if you uncomment the if statement it will throw you to alaska, zoom out becuase it looks like it doesnt work but zooming out will let you see the icy biome! "
                    //   brewery.latitude = "-75.2565195";
                    //   brewery.longitude = "43.24211175";
                    // }

                    return (
                      <div key={i}>
                        <CardActionArea>
                          <div onClick={() => handleDrawerOpen(brewery)}>
                            {/*  */}
                            <ListItem disablePadding>
                              <ListItemText
                                component={"span"}
                                variant={"body2"}
                                primary={brewery.name}
                                secondary={
                                  <>
                                    <Typography
                                      component={"span"}
                                      sx={{ display: "inline" }}
                                      variant="body2"
                                      color="text.primary"
                                    >
                                      {brewery.brewery_type}
                                      <Typography
                                        display="block"
                                        component={"span"}
                                      >
                                        Address - {brewery.street},{" "}
                                        {brewery.city},{brewery.state},{" "}
                                        {brewery.postal_code}
                                      </Typography>
                                    </Typography>
                                    Website: -
                                    <a
                                      target="_blank"
                                      href={brewery.website_url}
                                    >
                                      {" "}
                                      {brewery.website_url}
                                    </a>{" "}
                                  </>
                                }
                              />
                            </ListItem>
                          </div>
                        </CardActionArea>
                      </div>
                    );
                  })}
                </List>
              </Box>
            ) : (
              <div> No current Brewerys available </div>
            )}

            <div> {/*here the map will go  */}</div>
          </div>
        </>
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          <ListItem>
            <Typography variant="h5" gutterBottom component="div">
              Current Brewery - {currentBrewryName}
            </Typography>
          </ListItem>

          <ListItem>
            <Typography variant="h6" gutterBottom component="div">
              {isValidLocation.length > 0 ? isValidLocation : null}
            </Typography>
          </ListItem>
        </List>

        <Divider />
        <br></br>
        <br></br>
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMaps
            lat={currentLatLang[0]}
            lang={currentLatLang[1]}
            text={currentBrewryName}
          />
        </div>
      </Drawer>
    </Box>
  );
}

function initDrawerAndGoogleMaps(CurrentBreweryData) {}
