import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";

function JobListing({ listing }) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ borderBottom: 1 }}
    >
      <Stack>
        <Typography>{listing.text}</Typography>
        {/* <Typography variant="h5">
          {listing.location} / {listing.team}
        </Typography> */}
        <p>
          {listing.categories.location} / {listing.categories.team}
        </p>
      </Stack>
      <a style={{ textDecoration: "none" }} href={listing.hostedUrl}>
        <Button variant="outlined" color="primary">
          Apply
        </Button>
      </a>
    </Stack>
  );
}

export default function JobsList({ listings, teams }) {
  return (
    <Container>
      {listings && teams ? (
        [...teams].map((team) => {
          const teamListings = listings.filter((listing) => {
            return listing.categories.team === team;
          });

          return teamListings.length ? (
            <Box key={`box-${team}`}>
              <Typography variant="h5" key={`header-${team}`}>
                {team}
              </Typography>
              {teamListings.map((listing) => (
                <JobListing listing={listing} key={listing.id} />
              ))}
            </Box>
          ) : null;
        })
      ) : (
        // To-do: implement 'no results found'
        //
        // Listings are loading, so display progress icon instead
        <Box sx={{ textAlign: "center" }}>
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
}
