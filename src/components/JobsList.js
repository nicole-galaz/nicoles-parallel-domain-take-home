import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";

function JobListing({ listing }) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ borderBottom: 1, py: "35px" }}
    >
      <Stack>
        <Typography variant="h4">{listing.text}</Typography>
        <Typography variant="subtitle2" sx={{ py: "10px" }}>
          {listing.categories.location} / {listing.categories.team}
        </Typography>
      </Stack>
      <Box sx={{ alignSelf: "center" }}>
        <a style={{ textDecoration: "none" }} href={listing.hostedUrl}>
          <Button variant="outlined" color="primary">
            Apply
          </Button>
        </a>
      </Box>
    </Stack>
  );
}

export default function JobsList({ listings, teams }) {
  return (
    <Box>
      {listings && teams ? (
        [...teams].map((team) => {
          const teamListings = listings.filter((listing) => {
            return listing.categories.team === team;
          });

          return teamListings.length ? (
            <Box key={`box-${team}`}>
              <Typography
                variant="subtitle1"
                sx={{ pt: "70px", pb: "20px" }}
                key={`header-${team}`}
              >
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
    </Box>
  );
}
