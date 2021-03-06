import {
  makeStyles
} from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'space-evenly',
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

  location: {
    fontFamily: "Roboto Mono",
    fontWeight:'400'
  },
  temp: {
    fontFamily: "Roboto Mono",
    fontWeight: '300',
    color:'white'
  },

  extras:{
    fontFamily:"Roboto Mono",
    fontWeight:'300'
  },

  
  containerTemp: {
    display: 'flex',
    justifyContent: 'space-evenly',

  },

  containerMinMax: {
    display: 'flex',
    justifyContent: 'space-evenly',
    borderRadius:'8px',
    width:'90%',
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  },


  icon: {
    height: '5rem',
    width: "5rem",

  },
  weatherInfo:{
    display:"flex",
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:'1rem',
    
    
  }
}));