import React from "react";
import { CardMedia, Container, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

function Card({ form, setForm, weather, setWeather }) {
  const classes = useStyles();

  const data = weather.data;


  return (
    <div>
      <Paper className={classes.card}>
        <Typography variant="h4">Weather in {data?.name}</Typography>
        <Container className={classes.containerTemp}>
          <Typography variant="h2"> {data?.main?.temp} &#8451;</Typography>
          <img
            className={classes.media}
            src="https://img.icons8.com/officel/344/rainy-weather.png"
          />
        </Container>

        <Container className={classes.containerMinMax}>
          <Typography variant="h4">Min</Typography>
          <Typography variant="h4">Max</Typography>
          <Typography variant="h4">Feels Like</Typography>
          <Typography variant="h4">Humidity</Typography>
        </Container>

        <Container className={classes.containerMinMax}>
          <Typography variant="h4">{data?.main?.temp_min} &#8451;</Typography>
          <Typography variant="h4">{data?.main?.temp_max} &#8451;</Typography>
          <Typography variant="h4">{data?.main?.feels_like} &#8451;</Typography>
          <Typography variant="h4">{data?.main?.humidity} %</Typography>
        </Container>
      </Paper>
    </div>
  );
}

export default Card;
