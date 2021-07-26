import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Colors } from "../data/Variables";
import vid from "../video/nails_bg.mp4";
import { ButtonOne } from "./MyButtons";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: "100%",
      height: "750px",
      position: "relative",
      color: `${Colors.light}`,
      [theme.breakpoints.down("sm")]: {
        height: "830px",
      },
    },
    vid: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      pointerEvents: "none",
      "&::-webkit-media-controls": {
        display: "none",
      },
    },
    heroTextBox: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: `translate(-50%, -50%)`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      width: "80%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    motto: {
      textTransform: "capitalize",
      letterSpacing: "2px",
      marginBottom: "3rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.7rem",
        margin: "10rem auto 3rem auto",
        paddingLeft: "1rem",
        paddingRightL: "1rem",
      },
      fontFamily: ["Italiana", "serif"].join(","),
    },
    btnBox: {
      display: "flex",
      marginBottom: "4rem",
      "& :first-child": {
        marginRight: "2rem",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        "& :first-child": {
          marginRight: "0",
          marginBottom: "1.5rem",
        },
      },
    },
    contactBox: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      width: "100%",
      "& :nth-child(2)": {
        marginRight: "1rem",
        marginLeft: "1rem",
      },

      "& > div": {
        flexBasis: "30%",
      },

      "& h6": {
        fontWeight: "700",
        fontSize: "1rem",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        width: "100%",
        bottom: "0",
        "& > div": {
          marginBottom: "2rem",
        },
      },
    },
    contact: {
      "& h6": {
        marginBottom: "1rem",
      },
      "& p": {
        fontWeight: "400",
      },
      displaty: "flex",
      flexDirection: "column",
      fontSize: "0.9rem",

      [theme.breakpoints.down("sm")]: {
        "& h6": {
          marginBottom: "0.3rem",
        },
      },
    },
  };
});

const Hero = () => {
  const classes = useStyles();
  return (
    <>
      {" "}
      <Box className={classes.container}>
        <video playsInline autoPlay loop muted className={classes.vid}>
          <source src={vid} type="video/mp4" />
        </video>
        <Box className={classes.heroTextBox}>
          <Typography variant="h3" className={classes.motto}>
            Life is too short to NOT wear beautiful nails
          </Typography>
          <Box className={classes.btnBox}>
            <ButtonOne primary="true" to="/">
              Book appointment
            </ButtonOne>
            <ButtonOne to="/services">View Service Menu</ButtonOne>
          </Box>
          <Box className={classes.contactBox}>
            <Box className={classes.contact}>
              <Typography variant="h6">CONTACT</Typography>
              <p>Tel: 455.043.55</p>
            </Box>
            <Box className={classes.contact}>
              <Typography variant="h6">HOURS</Typography>
              <p>Mon to Fri: 10:00 - 18:00</p>
              <p>Sat: 10:00 - 16:00</p>
              <p>Sun: CLOSED</p>
            </Box>
            <Box className={classes.contact}>
              <Typography variant="h6">LOCATION</Typography>
              <p>Prinsensgate 6 1530 Moss, Norway</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
