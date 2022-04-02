import React from "react";
import { Box, Container, Typography } from "@mui/material";

import banner from "../images/banner.jpeg";

export default function Banner() {
  return (
    <Container
      style={{
        maxWidth: "revert",
        width: "100%",
        margin: "0px",
        padding: "0px",
      }}
    >
      <img
        src={banner}
        style={{ height: "188px", width: "100%", objectFit: "cover" }}
      />
      <Typography
        // variant="h2"
        sx={{
          zIndex: "1",
          top: "50%",
          transform: "translateY(-207%)",
          width: "100%",
          textAlign: "center",
          fontSize: "2.8rem",
          padding: "0px 20px",
          letterSpacing: "-2.3px",
          fontWeight: "100",
        }}
      >
        Join Us
      </Typography>
    </Container>
  );
}
