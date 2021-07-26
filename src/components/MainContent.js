import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import demo1 from "../img/demo/7.jpg";
import demo2 from "../img/demo/4.jpg";
import { Colors } from "../data/Variables";
import clsx from "clsx";
import { ButtonOne } from "./MyButtons";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: `0`,
    },

    sloganContainer: {
      letterSpacing: "3px",
      height: "300px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        height: "150px",
      },
      "& h1": {
        margin: "0",
        fontFamily: ["Italiana", "serif"].join(","),
        fontWeight: "700",

        [theme.breakpoints.down("xs")]: {
          fontSize: "1.2rem",
        },
      },
    },

    secondSlogan: {
      background: `${Colors.lightPrimary}`,
      color: `${Colors.dark}`,
    },

    card: {
      height: "550px",
      width: "100%",
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        height: "auto",
      },
    },
    reverse: {
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column-reverse",
        height: "auto",
      },
    },
    imgContainer: {
      flexBasis: "55%",
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
    textCointainer: {
      flexBasis: "45%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "4%",
      background: `${Colors.primary}`,

      "& h1": {
        marginBottom: "1rem",
        fontFamily: ["Italiana", "serif"].join(","),
        maxWidth: "650px",
        letterSpacing: "3px",
      },
      "& p": {
        letterSpacing: "1.2px",
        fontWeight: "400",
        maxWidth: "650px",
      },
    },
    btn: {
      letterSpacing: "2px",
    },
  };
});

const MainContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.sloganContainer}>
        <Typography variant="h4" component="h1">
          We Have Skills You Will Love
        </Typography>
      </Box>
      <Box className={classes.card}>
        <Box className={classes.imgContainer}>
          <img src={demo1} alt="demo pic" />
        </Box>
        <Box className={classes.textCointainer}>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            excepturi animi unde libero. Odio quaerat incidunt quasi animi
            consequatur laboriosam dicta iure sunt quos sapiente veniam,
            accusamus eius quibusdam rerum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            excepturi animi unde libero. Odio quaerat incidunt quasi animi
            consequatur laboriosam dicta iure sunt quos sapiente veniam,
            accusamus eius quibusdam rerum.
          </p>
          <ButtonOne to="/contact" className={classes.btn}>
            Contact Us
          </ButtonOne>
        </Box>
      </Box>
      <Box className={clsx(classes.sloganContainer, classes.secondSlogan)}>
        <Typography variant="h4" component="h1">
          Give Your Nails A Sweet Treat
        </Typography>
      </Box>
      <Box className={clsx(classes.card, classes.reverse)}>
        <Box className={classes.textCointainer}>
          <h1>Relax! The nail technician is here.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            excepturi animi unde libero. Odio quaerat incidunt quasi animi
            consequatur laboriosam dicta iure sunt quos sapiente veniam,
            accusamus eius quibusdam rerum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            excepturi animi unde libero. Odio quaerat incidunt quasi animi
            consequatur laboriosam dicta iure sunt quos sapiente veniam,
            accusamus eius quibusdam rerum.
          </p>
          <ButtonOne to="/services" className={classes.btn}>
            Learn More
          </ButtonOne>
        </Box>
        <Box className={classes.imgContainer}>
          <img src={demo2} alt="demo pic" />
        </Box>
      </Box>
      <Box className={classes.sloganContainer}>
        <Typography variant="h4" component="h1">
          Feel Elegant
        </Typography>
      </Box>
    </Box>
  );
};

export default MainContent;
