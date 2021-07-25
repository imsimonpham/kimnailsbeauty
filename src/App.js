import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Colors } from "./data/Variables";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GlobalStyle from "./globalStyles";

const theme = createTheme({
  html: {
    boxSizing: "border-box",
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
  shape: {
    borderRadius: 0,
  },
  overrides: {
    // Style sheet name
    MuiTouchRipple: {
      // Name of the rule
      child: {
        // Some CSS
        backgroundColor: `${Colors.red}`,
      },
    },
  },
});

function App({ props }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
