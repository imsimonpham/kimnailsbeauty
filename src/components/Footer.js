import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
import PhoneIcon from "./Icons/PhoneIcon";
import ClockIcon from "./Icons/ClockIcon";
import LocationIcon from "./Icons/LocationIcon";
import { Colors } from "../data/Variables";
import { Link } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles((theme) => {
  return {
    footer: {
      display: "flex",
      flexDirection: "column",
    },
    footerTop: {
      height: "340px",
      padding: "3rem 2rem 2rem 2rem",
      background: `${Colors.lightPrimary}`,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      "& > div": {
        flexBasis: "30%",
      },
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        height: "auto",
      },
    },
    footerTopItem: {
      maxWidth: "230px",
      height: "230px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      textAlign: "center",
      "& p": {
        fontWeight: "300",
        marginBottom: "0rem",
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "4rem",
        height: "auto",
      },
    },
    title: {
      fontWeight: "600",
      marginBottom: "1rem",
    },
    iconLg: {
      marginBottom: "1.2rem",
    },

    linkRemoveDefault: {
      textDecoration: "none",
      color: `${Colors.dark}`,
    },
    contactUs: {
      textDecoration: "underline",
    },
    footerBtm: {
      height: "30px",
      padding: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: `${Colors.primary}`,
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        height: "auto",
        "& > *": {
          marginBottom: "1rem",
        },
      },
    },
    footerText: {
      fontWeight: "600",
      color: `${Colors.secondary}`,
      fontFamily: ["Italiana", "serif"].join(","),
      letterSpacing: "1.2px",
      fontSize: "0.9rem",
      textAlign: "center",
    },
    brandNameText: {
      color: `${Colors.dark}`,
      fontWeight: "700",
      fontSize: "1rem",
    },
    socialMedia: {
      display: "flex",
      alignItems: "center",
      marginLeft: "5rem",
      [theme.breakpoints.down("xs")]: {
        marginLeft: "0rem",
      },
    },
    icons: {
      fontSize: "1.5rem",
      color: `${Colors.dark}`,
      marginRight: "0.5rem",
    },
  };
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Box className={classes.footerTop}>
        <Box className={classes.footerTopItem}>
          <PhoneIcon className={classes.iconLg} />
          <Typography variant="h6" component="h3" className={classes.title}>
            Kontakt
          </Typography>
          <p>Mob: 455.403.55</p>

          <Link
            to="/contact"
            className={clsx(classes.linkRemoveDefault, classes.contactUs)}
          >
            <p>Kontakt Oss</p>
          </Link>
        </Box>
        <Box className={classes.footerTopItem}>
          <ClockIcon className={classes.iconLg} />
          <Typography variant="h6" component="h3" className={classes.title}>
            Åpningstider
          </Typography>

          <p>Mandag til Fredag: 10:00 - 18:00</p>
          <p>Lørdag: 10:00 - 16:00</p>
          <p>Søndag: STENGT</p>
          <Box className={classes.socialMedia}></Box>
        </Box>
        <Box className={classes.footerTopItem}>
          <LocationIcon className={classes.iconLg} />
          <Typography variant="h6" component="h3" className={classes.title}>
            Adresse
          </Typography>
          <p>Prinsensgate 6 1530 Moss, Norway</p>
          <Box className={classes.socialMedia}></Box>
        </Box>
      </Box>
      <Box className={classes.footerBtm}>
        <Typography className={classes.footerText}>
          <span className={classes.brandNameText}>Kim Nails Beauty</span> &copy;{" "}
          {new Date().getFullYear()}
        </Typography>
        <Box className={classes.socialMedia}>
          <a
            rel="noreferrer"
            href="https://www.facebook.com/kimnailsbeauty2"
            target="_blank"
            className={classes.linkRemoveDefault}
          >
            <TiSocialFacebook className={classes.icons} />
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com/kim.beauty.no"
            target="_blank"
            className={classes.linkRemoveDefault}
          >
            <IoLogoInstagram className={classes.icons} />
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com/kim.beauty.no"
            target="_blank"
            className={classes.linkRemoveDefault}
          >
            <IoLogoTiktok className={classes.icons} size="0.75em" />
          </a>
        </Box>
        <Typography className={classes.footerText}>
          Designed & Created by Simon Pham
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
