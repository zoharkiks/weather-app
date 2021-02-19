import { React, useEffect, useState } from "react";
import { InputBase, AppBar } from "@material-ui/core";
import useStyles from "./styles";
import Card from "../Card/Card";
import dotenv from "dotenv";

function Navbar({ form, setForm, weather, setWeather }) {
  dotenv.config();

  // Styles
  const classes = useStyles();

  //   Api Key
  const params = {
    key: process.env.REACT_APP_KEY,
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  };

console.log(weather);


  //   Fetch weather data from API
  async function weatherData(e) {
    e.preventDefault();

    if (form.location == "") {
      alert("Please Enter City");
    } else {
      let data = await fetch(
        `${params.baseUrl}weather?q=${form.location}&appid=${params.key}&units=metric`
      );
      if (data.status >= 200 && data.status <= 299) {
        const dataRes = await data.json();

        setWeather({
          data: dataRes,
        });
      } else {
        alert("Please Check The Entered City");
      }
    }
  }

  //   Functions

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "location") {
      setForm({ ...form, location: value });
    }
  };

  return (
    <div>
      <AppBar position="static" className={classes.navBar}>
        <form onSubmit={weatherData}>
          <InputBase
            className={classes.inputCity}
            inputProps={{ style: { fontSize: 30 } }}
            placeholder="Enter City"
            name="location"
            onChange={handleChange}
          />
        </form>
      </AppBar>
    </div>
  );
}

export default Navbar;
