import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    svg: {
      cursor: "pointer",
      strokeWidth: "1",
      width: "2rem",
      height: "2rem",
      display: "none",
      [theme.breakpoints.down("md")]: {
        display: "block",
        position: "absolute",
        right: "5%",
      },
    },
  };
});

const MenuIcon = (props) => {
  const classes = useStyles();
  return (
    <svg
      style={props.style.stroke}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
      className={classes.svg}
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
};

export default MenuIcon;
