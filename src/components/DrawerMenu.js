import React from "react";
import { Drawer, List, Box, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Colors } from "../data/Variables";
import { MenuData } from "../data/MenuData";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import TimesIcon from "./Icons/TimesIcon";
import { IoLogoTiktok } from "react-icons/io5";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      height: "100%",
      width: "100%",
      position: "relative",
      overflow: "hidden",
    },
    drawer: {
      width: "50%",
      background: `transparent`,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    drawerPaPer: {
      width: "50%",
      background: `${Colors.light}`,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      overflow: "hidden",
    },
    navLinkList: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      height: "100%",
      width: "100%",
    },

    navLinksContainer: {
      display: "flex",
      flexDirection: "column",
    },
    navLinks: {
      textDecoration: "none",
      color: `${Colors.dark}`,
      marginBottom: "5rem",
      "&:hover": {
        color: `${Colors.secondary}`,
      },
    },
    linkRemoveDefault: {
      textDecoration: "none",
      color: `${Colors.dark}`,
    },
    socialMedia: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    icons: {
      fontSize: "1.5rem",
      "&:hover": {
        color: `${Colors.secondary}`,
      },
    },
    navLinkText: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.25rem",
      },
    },
  };
});
const DrawerMenu = (props) => {
  const classes = useStyles();
  return (
    <Drawer
      anchor="right"
      open={props.openDrawer}
      onClose={() => props.setOpenDrawer(false)}
      className={classes.drawer}
      classes={{ paper: classes.drawerPaPer }}
      BackdropProps={{ invisible: true }}
    >
      <Box className={classes.container}>
        <TimesIcon
          onClick={() => {
            props.setOpenDrawer(false);
          }}
        />

        <List className={classes.navLinkList}>
          <Box className={classes.navLinksContainer}>
            {MenuData.map((item, index) => {
              return (
                <Link
                  className={classes.navLinks}
                  key={index}
                  to={item.link}
                  onClick={() => {
                    props.setOpenDrawer(false);
                  }}
                >
                  <Typography variant="h5" className={classes.navLinkText}>
                    {item.title}
                  </Typography>
                </Link>
              );
            })}
            <Box className={classes.socialMedia}>
              <a
                rel="noreferrer"
                href="https://www.facebook.com/kimnailsbeauty2"
                target="_blank"
                className={classes.linkRemoveDefault}
                onClick={() => {
                  props.setOpenDrawer(false);
                }}
              >
                <TiSocialFacebook className={classes.icons} />
              </a>
              <a
                rel="noreferrer"
                href="https://www.facebook.com/kimnailsbeauty2"
                target="_blank"
                className={classes.linkRemoveDefault}
                onClick={() => {
                  props.setOpenDrawer(false);
                }}
              >
                <IoLogoInstagram className={classes.icons} />
              </a>
              <a
                rel="noreferrer"
                href="https://www.facebook.com/kimnailsbeauty2"
                target="_blank"
                className={classes.linkRemoveDefault}
                onClick={() => {
                  props.setOpenDrawer(false);
                }}
              >
                <IoLogoTiktok className={classes.icons} size="0.75em" />
              </a>
            </Box>
          </Box>
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;
