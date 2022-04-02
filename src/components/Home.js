import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

// Import Components
import JobListing from "./JobListing";

export default function Home({ listings }) {
  return (
    <Box
      style={{
        maxWidth: "1024px",
        width: "100%",
        margin: "0 auto",
        paddingTop: "0px",
        py: 5,
      }}
    >
      <Typography variant="h3" sx={{ textAlign: "center", mb: 2 }}>
        Open Positions
      </Typography>
      <Typography
        sx={{ textAlign: "center", maxWidth: "768px", margin: "0 auto" }}
      >
        Our data is training and testing autonomous systems at companies around
        the world. We're looking for talented visionaries to help us to expand
        our impact on the way artificial intelligence is developed.
      </Typography>
      {listings.length ? (
        listings.map((listing) => (
          <JobListing listing={listing} key={listing.id} />
        ))
      ) : (
        <Box sx={{ textAlign: "center" }}>
          <br />
          <br />
          <br />
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}
