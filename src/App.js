import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// import app components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Home from "./components/Home";

// import utils
import { getListings } from "./utils";

// import theme
import theme from "./theme/mui";

function App() {
  //
  const [jobListings, setJobListings] = useState([]);

  // Set job listings
  useEffect(() => {
    async function populateListings() {
      const listings = await getListings();
      setJobListings(listings);
      console.log("Current job listings: ", listings);
    }
    populateListings();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header />

      <Banner />

      <Home listings={jobListings} />
    </ThemeProvider>
  );
}

export default App;
