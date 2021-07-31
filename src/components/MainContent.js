import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import demo1 from "../img/demo/10.jpg";
import demo2 from "../img/demo/11.jpg";
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
        textTransform: "capitalize",
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
      height: "700px",
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
        //to prevent line-break between img tag and the vest div tag
        display: "block",
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
          Vi har ferdigheter du vil elske
        </Typography>
      </Box>
      <Box className={classes.card}>
        <Box className={classes.imgContainer}>
          <img src={demo1} alt="demo pic" />
        </Box>
        <Box className={classes.textCointainer}>
          <h1>Om Oss</h1>

          <p>
            Startet som et lidenskapsprosjekt av en spikerartist som ligger i en
            liten, men vakker by Moss. Kim Nails Beauty søker å frembringe den
            indre skjønnheten til alle individer og formidler dem ved hjelp av
            neglekunst.
          </p>
          <p>
            Målet vårt er å alltid trives for kundenes tilfredshet, slik at
            enhver person som forlater døren vår, føler seg godt ivaretatt, godt
            pleiet og elsket. Vi er sikre på at uansett hvor fantasien tar deg,
            kan vi alltid følge og oversette de levende bildene til neglene
            dine. Med tilbakemeldinger fra våre gjester og fortsatt støtte, vil
            vi vokse videre og fortsette å elske deg og neglene dine.
          </p>
          <ButtonOne to="/contact" className={classes.btn}>
            kontakt oss
          </ButtonOne>
        </Box>
      </Box>
      <Box className={clsx(classes.sloganContainer, classes.secondSlogan)}>
        <Typography variant="h4" component="h1">
          Gi neglene en godbit
        </Typography>
      </Box>
      <Box className={clsx(classes.card, classes.reverse)}>
        <Box className={classes.textCointainer}>
          <h1>Slappe av! Spikerteknikeren er her.</h1>
          <p>
            La ditt indre bli sett gjennom neglene dine. Enten det er en
            selvtillit eller ditt kreative utsalgssted, er vi her med deg på
            reisen. Hos Kim Nails Beauty er det vi som gjør mesterverket ditt
            til virkelighet på neglene dine! Ikke la fantasien din bli hindret,
            da vi får drømmemanikyren til å ta form foran deg.
          </p>
          <p>
            Alle fortjener en fin, avslappende manikyr, og vi tror at den beste
            måten å oppnå det på er gjennom omsorg og engasjement. Hos Kim nails
            beauty vil våre spikerteknikere gi omsorg bare det beste settet med
            negler trenger. La neglene dine bli våre også, mens vi behandler deg
            etter beste evne, og gir deg ingenting annet enn stor tilfredshet,
            avslapning og stolthet for din glamorøse mani! Måtte alle
            fingertuppene være et aspekt av ditt sanne potensial
          </p>
          <ButtonOne to="/services" className={classes.btn}>
            semer
          </ButtonOne>
        </Box>
        <Box className={classes.imgContainer}>
          <img src={demo2} alt="demo pic" />
        </Box>
      </Box>
      <Box className={classes.sloganContainer}>
        <Typography variant="h4" component="h1">
          Føl deg elegant
        </Typography>
      </Box>
    </Box>
  );
};

export default MainContent;
