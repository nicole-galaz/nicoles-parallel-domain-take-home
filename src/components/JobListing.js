import React, { useState, useEffect } from "react";

import { Box, Button } from "@mui/material";

export default function JobListing({ listing, ...props }) {
  return (
    <Box>
      <p>{listing.text}</p>
      <a href={listing.hostedUrl}>
        <Button className="outlinedPrimary">Apply</Button>
      </a>
    </Box>
  );
}
