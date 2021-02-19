import React, { useEffect } from "react";
import { CardMedia, Container, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

function Card({ form, setForm, weather, setWeather }) {
  const classes = useStyles();

  const data = weather.data;
  console.log(data);

  return (
    <div>
      <Paper className={classes.card}>
        <Typography className={classes.location} variant="h4">Weather in {data?.name}</Typography>
        <Container className={classes.containerTemp}>
          <Typography className={classes.temp} variant="h2"> {data?.main?.temp} &#8451;</Typography>
          <img
            className={classes.icon}
            onError={(event) =>
              event.target.setAttribute(
                "src",
                "https://img.icons8.com/color/344/thermometer.png"
              )
            }
            src={`http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`}
          />
        </Container>

        <Container className={classes.containerMinMax}>
          <Typography className={classes.extras} variant="h4">Min</Typography>
          <Typography className={classes.extras} variant="h4">Max</Typography>
          <Typography className={classes.extras} variant="h4">Feels Like</Typography>
          <Typography className={classes.extras} variant="h4">Humidity</Typography>
        </Container>

        <Container className={classes.containerMinMax}>
          <Typography className={classes.extras} variant="h4">{data?.main?.temp_min} &#8451;</Typography>
          <Typography className={classes.extras} variant="h4">{data?.main?.temp_max} &#8451;</Typography>
          <Typography className={classes.extras} variant="h4">{data?.main?.feels_like} &#8451;</Typography>
          <Typography className={classes.extras} variant="h4">{data?.main?.humidity} %</Typography>
        </Container>
      </Paper>
    </div>
  );
}

export default Card;
