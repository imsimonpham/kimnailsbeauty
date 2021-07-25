import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    svg: {
      position: "absolute",
      right: "5%",
      top: "3%",
      cursor: "pointer",
      zIndex: "1",
      strokeWidth: "2",
      width: "2.2rem",
      height: "2.2rem",
    },
  };
});

const TimesIcon = (props) => {
  const classes = useStyles();
  return (
    <svg
      className={classes.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
};

export default TimesIcon;
