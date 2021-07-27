import React, { useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Colors } from "../data/Variables";
import bg from "../img/demo/8.png";
import demo from "../img/demo/9.jpg";
import { ButtonTwo } from "../components/MyButtons";
import clsx from "clsx";
import emailjs from "emailjs-com";

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
        maxWidth: "80%",
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
    formContainer: {
      maxWidth: "1000px",
      margin: "5rem auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
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
    contactForm: {
      width: "80%",
    },
    formControl: {
      boxSizing: "border-box",
      marginBottom: "3rem",
      width: "100%",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        marginBottom: "1rem",
      },

      "& input": {
        height: "60px",
        outline: "none",
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: "1dfdfnrem",
        border: `1px solid ${Colors.secondary}`,
        borderRadius: "0",
        "&::placeholder": {
          fontSize: "0.9rem",
          color: `${Colors.dark}`,
          letterSpacing: "1px",
        },
      },

      "& textarea": {
        outline: "none",
        width: "100%",
        height: "150px",
        padding: "10px",
        border: `1px solid ${Colors.secondary}`,
        borderRadius: "0",
        "&::placeholder": {
          fontSize: "1rem",
          color: `${Colors.dark}`,
          letterSpacing: "1px",
          fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Oxygen",
            "Ubuntu",
            "Cantarell",
            "Fira Sans",
            "Droid Sans",
            "Helvetica Neue",
            "sans-serif",
          ].join(","),
        },
      },
    },
    infoContainer: {
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
      "& input": {
        width: "30%",
        padding: "10px",
        [theme.breakpoints.down("xs")]: {
          width: "100%",
          "&:not(:last-child)": { marginBottom: "1rem" },
        },
      },
    },
    subject: {
      "& input": {
        width: "100%",
        padding: "10px",
      },
    },
    btn: {
      width: "100%",
      fontWeight: "900",
    },

    mapWrapper: {
      width: "90%",
      display: "flex",
      margin: `1rem auto`,
      minHeight: "500px",
      marginBottom: "6rem",
      maxWidth: "1200px",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
    },

    imgContainer: {
      flexBasis: "50%",
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
    mapContainer: {
      flexBasis: "50%",
      fill: `${Colors.primary}`,
      "& iframe": {
        width: "100%",
        height: "100%",
        [theme.breakpoints.down("xs")]: {
          minHeight: "500px",
        },
      },
    },
    notification: {
      width: "300px",
      height: "100px",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: `translate(-50%, -50%)`,
      background: `${Colors.primary}`,
      color: `${Colors.dark}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1rem",
      transition: `all 1s ease-in-out`,
    },
  };
});

const Contact = () => {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(0);
  const submissionAlert = () => {
    setSubmitted(1);
    setTimeout(() => {
      setSubmitted(0);
    }, 2000);
  };

  let style = {
    opacity: submitted ? "1" : "0",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4ggfugg",
        "template_wmuxbid",
        e.target,
        "user_dn4e2OhxXRlY3UHDirelr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    submissionAlert();
    e.target.reset();
  };
  return (
    <>
      <div style={style} submitted={submitted} className={classes.notification}>
        Your message has been submitted
      </div>
      <Box className={classes.container}>
        <img src={bg} alt="bg" className={classes.bg} />
        <div className={classes.textBox}>
          <Typography variant="h2" className={classes.bigText}>
            Kontakt
          </Typography>
          <p>
            We would love hearing from you and moreover meeting you in person
          </p>
        </div>
      </Box>
      <Box className={classes.formContainer}>
        <div className={classes.titleContainer}>
          <Typography variant="h4" className={classes.title}>
            Drop Us a Line
          </Typography>
          <p className={classes.subtitle}>
            Leave us a message and we will get back to you as soon as possible.
            We’d love hearing from you.
          </p>
        </div>

        <form
          className={classes.contactForm}
          onSubmit={(e) => {
            sendEmail(e);
          }}
        >
          <div className={clsx(classes.formControl, classes.infoContainer)}>
            <input name="name" required type="text" placeholder="Navn *" />
            <input name="email" required type="email" placeholder="E-post *" />
            <input name="phone number" type="text" placeholder="Telefonen " />
          </div>

          <div className={clsx(classes.formControl, classes.subject)}>
            <input type="text" placeholder="Emne" name="subject" />
          </div>

          <div className={classes.formControl}>
            <textarea name="message" required placeholder="Beskjed *" />
          </div>
          <div className={classes.btnContainer}>
            <ButtonTwo type="submit" className={classes.btn}>
              Sende Melding
            </ButtonTwo>
          </div>
        </form>
      </Box>
      <Box className={classes.mapWrapper}>
        <div className={classes.imgContainer}>
          <img src={demo} alt="demo" />
        </div>
        <div className={classes.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.7704539818988!2d10.660722616244755!3d59.43690288169653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46414d625cb24471%3A0xfb20e2046b0cc548!2sPrinsens%20gate%206%2C%201530%20Moss%2C%20Norway!5e0!3m2!1sen!2sca!4v1627237356376!5m2!1sen!2sca"
            allowFullScreen
            loading="lazy"
            title="map"
          ></iframe>
        </div>
      </Box>
    </>
  );
};

export default Contact;
