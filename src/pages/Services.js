import React from "react";
import { Box, makeStyles, Typography, Button, Grid } from "@material-ui/core";
import { Colors } from "../data/Variables";
import bg from "../img/demo/8.png";
import { GalleryData } from "../data/Gallery";
import clsx from "clsx";
import { SRLWrapper } from "simple-react-lightbox";
import { FiPlus } from "react-icons/fi";
import { ServiceList } from "../data/PricingData";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

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
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& p": {
        fontSize: "1.4rem",
        letterSpacing: "1.5px",
        fontWeight: "300",
        marginBottom: "0 auto",
        textAlign: "center",
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
      minHeight: "800px",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    titleContainer: {
      width: "50%",
      textAlign: "center",
      margin: "4rem 0",
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
      fontWeight: "500",
      position: "relative",
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

    root: {
      width: "100%",
      position: "relative",
    },
    serviceTiltle: {},
    singleServiceContainer: {
      width: "100%",
      height: "auto",
      display: "flex",
      flexDirection: "column",
    },

    plusIcon: {
      fontSize: "1.4rem",
    },
    singleService: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      color: `${Colors.secondary}`,
      fontWeight: "400",
      marginBottom: "1rem",

      "& p": {
        margin: "0",
      },

      "& p:nth-child(2)": {
        textAlign: "left",
        minWidth: "50px",
        marginLeft: "5px",
      },
    },

    btn: {
      margin: "4rem 0rem",
      background: `${Colors.primary}`,
      fontSize: "0.9rem",
      padding: "0.8rem 2rem",
      letterSpacing: "1.2px",
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
      textTransform: "capitalize",
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
            Tjenester
          </Typography>
          <p>Kom, slapp av og nyt.</p>
        </div>
      </Box>
      <Box className={classes.pricingSection}>
        <div className={classes.titleContainer}>
          <Typography variant="h4" className={classes.title}>
            Servicemeny
          </Typography>
          <p className={classes.subtitle}>
            Få neglene dine gjort for godt humør. Enkle gleder kan gjøre uken
            din, ikke bare dagen.
          </p>
        </div>

        <Box className={classes.priceListContainer}>
          {ServiceList.map((item, i) => {
            return (
              <Accordion className={classes.root} elevation={0} key={i}>
                <AccordionSummary
                  expandIcon={<FiPlus />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={classes.serviceTiltle}
                >
                  {item.title}
                </AccordionSummary>
                <AccordionDetails className={classes.singleServiceContainer}>
                  {item.content.map((single, index) => {
                    return (
                      <div className={classes.singleService} key={index}>
                        <p>{single.name}</p>
                        <p>{single.price}</p>
                      </div>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>

        <Button
          target="_blank"
          href="https://kimnailsbeauty.setmore.com/"
          className={classes.btn}
        >
          Bestill avtale
        </Button>
      </Box>
      <Typography
        variant="h4"
        className={clsx(classes.title, classes.titleOutside)}
      >
        Din skjønnhet er vårt yrke
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
