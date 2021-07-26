import React from "react";
import { Box, makeStyles, Typography, Button, Grid } from "@material-ui/core";
import { Colors } from "../data/Variables";
import bg from "../img/demo/8.png";
import { PricingData } from "../data/PricingData";
import { GalleryData } from "../data/Gallery";
import clsx from "clsx";
import { SRLWrapper } from "simple-react-lightbox";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: "100%",
      height: "500px",
      position: "relative",
      color: `${Colors.dark}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("xs")]: {
        height: "400px",
      },
    },
    bg: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
    textBox: {
      position: "absolute",
      textAlign: "center",

      "& p": {
        fontSize: "1.4rem",
        letterSpacing: "1.5px",
        fontWeight: "300",
        marginBottom: "0",
        [theme.breakpoints.down("xs")]: {
          fontSize: "1rem",
        },
      },
    },
    bigText: {
      fontFamily: ["Italiana", "serif"].join(","),
      fontWeight: "700",
      letterSpacing: "4px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "2.5rem",
      },
    },

    pricingSection: {
      height: "800px",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    titleContainer: {
      width: "50%",
      textAlign: "center",
      marginBottom: "2rem",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    title: {
      fontFamily: ["Italiana", "serif"].join(","),
      fontWeight: "700",
      letterSpacing: "4px",
    },
    subtitle: {
      letterSpacing: "1.5px",
      lineHeight: "2",
    },
    priceListContainer: {
      width: "70%",
      height: "auto",
      fontWeight: "500",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
      "& > div": {
        borderTop: `1px solid ${Colors.grey}`,
      },
      "& > div:last-child": {
        borderBottom: `1px solid ${Colors.grey}`,
      },
    },
    service: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.5rem 0 ",
      "& > p": {
        margin: "0",
      },
    },
    btn: {
      marginTop: "4rem",
      background: `${Colors.primary}`,
      fontSize: "0.9rem",
      padding: "0.8rem 2rem",
      transition: `all 0.3s ease-in-out`,
      "&:hover": {
        background: `${Colors.lightPrimary}`,
        border: "none",
      },
    },
    gallery: {
      width: "80%",
      margin: `0 auto 4rem auto`,
      maxWidth: "1000px",
      "& img": {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        cursor: "pointer",
      },
    },
    gridItem: {
      width: "300px",
      height: "300px",
    },
    titleOutside: {
      marginBottom: "3rem ",
      textAlign: "center",
    },
  };
});
const Services = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        <img src={bg} alt="bg" className={classes.bg} />
        <div className={classes.textBox}>
          <Typography variant="h2" className={classes.bigText}>
            Services
          </Typography>
          <p>Come, Relax, and Enjoy.</p>
        </div>
      </Box>
      <Box className={classes.pricingSection}>
        <div className={classes.titleContainer}>
          <Typography variant="h4" className={classes.title}>
            Service Menu
          </Typography>
          <p className={classes.subtitle}>
            Get your nails done for great mood. Simple pleasures can make your
            week, not just day.
          </p>
        </div>
        <div className={classes.priceListContainer}>
          {PricingData.map((item, i) => {
            return (
              <div key={i} className={classes.service}>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            );
          })}
        </div>
        <Button className={classes.btn}>Book appointment</Button>
      </Box>
      <Typography
        variant="h4"
        className={clsx(classes.title, classes.titleOutside)}
      >
        Your Beauty Is Our Profession
      </Typography>

      <SRLWrapper>
        <Grid container spacing={3} className={classes.gallery}>
          {GalleryData.map((item, i) => {
            return (
              <Grid item xs={12} md={4} className={classes.gridItem} key={i}>
                <img src={item.src} alt={item.alt} />
              </Grid>
            );
          })}
        </Grid>
      </SRLWrapper>
    </>
  );
};

export default Services;
