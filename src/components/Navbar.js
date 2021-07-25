import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuData } from "../data/MenuData";
import { Box, Typography, Button, makeStyles } from "@material-ui/core";
import { Colors } from "../data/Variables";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
import MenuIcon from "./Icons/MenuIcon";
import DrawerMenu from "./DrawerMenu";

const useStyles = makeStyles((theme) => {
  return {
    linkRemoveDefault: {
      textDecoration: "none",
    },
    btnBorderLess: {
      fontWeight: "600",
      fontSize: "0.9rem",
      letterSpacing: "1.2px",
      marginRight: "2rem",
      transition: `all 0.5s ease-in-out`,
      "&:hover": {
        background: "transparent",
        borderBottom: `1px solid ${Colors.dark}`,
      },
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      color: `${Colors.light}`,
    },
    nav: {
      height: "130px",
      display: "flex",
      position: "fixed",
      width: "100%",
      flexDirection: "column",
      zIndex: "1",
      [theme.breakpoints.down("md")]: {
        height: "78px",
      },
    },
    logo: {
      width: "150px",
      height: "150px",
    },
    navTop: {
      width: "100%",
      height: "60%",
      position: "relative",
      display: "flex",
      borderBottom: `1px solid ${Colors.clearLight}`,
      alignItems: "center",
      justifyContent: "space-between",
      background: `transparent`,
      transition: "all 0.5s ease-in-out",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        borderBottom: `none`,
        height: "100%",
      },
    },
    socialMedia: {
      width: "80px",
      height: "25px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: "2rem",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    brandname: {
      position: "absolute",
      width: "auto",
      left: "50%",
      top: "50%",
      transform: `translate(-50%, -50%)`,
      [theme.breakpoints.down("md")]: {
        left: "5%",
        top: "50%",
        transform: `translate(0,-50%)`,
      },
    },
    brandnameText: {
      color: `${Colors.light}`,
      fontFamily: ["Italiana", "serif"].join(","),
      fontSize: "2.125rem",
      fontWeight: "600",
      letterSpacing: "3px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.7rem",
      },
    },
    icons: {
      fontSize: "1.5rem",
      fill: `${Colors.light}`,
    },
    navBottom: {
      height: "40%",
      borderBottom: `1px solid ${Colors.clearLight}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: `transparent`,
      transition: "all 0.5s ease-in-out",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    navLinks: {
      width: "40%",
      display: "flex",
      justifyContent: "space-around",
    },
    navLinkItems: {
      textTransform: "uppercase",
      textDecoration: "none",
      color: `${Colors.light}`,
      fontSize: ".8rem",
      fontWeight: "600",
      letterSpacing: ".1rem",
    },
  };
});

const Navbar = (props) => {
  const classes = useStyles();
  const location = useLocation();

  //nav bar change color on scroll
  const [effects, setEffects] = useState(false);

  const effectTriggered = () => {
    if (window.scrollY > 0) {
      setEffects(true);
    } else {
      setEffects(false);
    }
  };

  useEffect(() => {
    const watchEffects = () => {
      window.addEventListener("scroll", effectTriggered);
    };
    watchEffects();
  }, []);

  let style = {
    background: {
      background: effects ? `${Colors.light}` : "transparent",
    },

    border: {
      borderBottom: effects
        ? `1px solid ${Colors.grey}`
        : `1px solid ${Colors.clearLight}`,
    },
    border2: {
      borderBottom: `1px solid ${Colors.grey}`,
    },
    textColor: {
      color: effects ? `${Colors.dark}` : `${Colors.light}`,
    },
    textColor2: {
      color: `${Colors.dark}`,
    },
    fill: {
      fill: effects ? `${Colors.dark}` : `${Colors.light}`,
    },
    fill2: {
      fill: `${Colors.dark}`,
    },

    stroke: {
      stroke: effects ? `${Colors.dark}` : `${Colors.light}`,
    },
    stroke2: {
      color: `${Colors.dark}`,
    },
  };

  return (
    <nav
      className={classes.nav}
      style={style.background}
      onMouseEnter={() => {
        setEffects(true);
      }}
      onMouseLeave={() => {
        if (window.scrollY > 0) {
          setEffects(true);
        } else {
          setEffects(false);
        }
      }}
    >
      <Box
        className={classes.navTop}
        style={location.pathname === "/" ? style.border : style.border2}
      >
        <Box className={classes.socialMedia}>
          <a
            rel="noreferrer"
            href="https://www.facebook.com/kimnailsbeauty2"
            target="_blank"
            className={classes.linkRemoveDefault}
          >
            <TiSocialFacebook
              className={classes.icons}
              style={location.pathname === "/" ? style.fill : style.fill2}
            />
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com/kim.beauty.no"
            target="_blank"
            className={classes.linkRemoveDefault}
          >
            <IoLogoInstagram
              className={classes.icons}
              style={location.pathname === "/" ? style.fill : style.fill2}
            />
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com/kim.beauty.no"
            target="_blank"
            className={classes.linkRemoveDefault}
          >
            <IoLogoTiktok
              className={classes.icons}
              style={location.pathname === "/" ? style.fill : style.fill2}
              size="0.75em"
            />
          </a>
        </Box>
        <Box className={classes.brandname}>
          <Link to="/" className={classes.linkRemoveDefault}>
            <Typography
              variant="body1"
              className={classes.brandnameText}
              style={
                location.pathname === "/" ? style.textColor : style.textColor2
              }
            >
              Kim Nails Beauty
            </Typography>
          </Link>
        </Box>
        <Button
          style={location.pathname === "/" ? style.textColor : style.textColor2}
          className={classes.btnBorderLess}
        >
          Book appointment
        </Button>
        <MenuIcon
          onClick={() => {
            props.setOpenDrawer(true);
          }}
          style={location.pathname === "/" ? style.stroke : style.stroke2}
        />
      </Box>

      <Box
        className={classes.navBottom}
        style={location.pathname === "/" ? style.border : style.border2}
      >
        <Box className={classes.navLinks}>
          {MenuData.map((item, index) => {
            return (
              <Link
                className={classes.navLinkItems}
                key={index}
                to={item.link}
                style={
                  location.pathname === "/" ? style.textColor : style.textColor2
                }
              >
                {item.title}
              </Link>
            );
          })}
        </Box>
      </Box>
      <DrawerMenu
        openDrawer={props.openDrawer}
        setOpenDrawer={props.setOpenDrawer}
      />
    </nav>
  );
};

export default Navbar;
