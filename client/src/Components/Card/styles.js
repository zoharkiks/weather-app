import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:'space-evenly',
    marginTop: "50px",
    margin: "auto",
    width: "75%",
    height: "30rem",
    background: "rgba( 137, 10, 210, 0.25 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 11.0px )",
    webkitBackdropFilter: "blur( 11.0px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },

  containerTemp:{
    display:'flex',
    justifyContent:'space-evenly'
},

  containerMinMax:{
      display:'flex',
      justifyContent:'space-evenly'
  },

  media:{
    height: '5rem',
    width:"5rem",
    
  }
}));
