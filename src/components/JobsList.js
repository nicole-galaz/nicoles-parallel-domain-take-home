import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";

// Individual Job Listing
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

// Full list of jobs listings
export default function JobsList({ listings, teams }) {
  return (
    <Box>
      {listings && teams ? (
        [...teams].map((team) => {
          // Organize the listings per team - so we need to filter
          // out listings that do not have a matching team for this
          // team section.
          const teamListings = listings.filter((listing) => {
            return listing.categories.team === team;
          });

          return teamListings.length ? (
            <Box key={`box-${team}`}>
              {/* Team Header */}
              <Typography
                variant="subtitle1"
                sx={{ pt: "70px", pb: "20px" }}
                key={`header-${team}`}
              >
                {team}
              </Typography>
              {/* Individual listings for all jobs in this team */}
              {teamListings.map((listing) => (
                <JobListing listing={listing} key={listing.id} />
              ))}
            </Box>
          ) : // Don't display this section at all (including team header)
          // if there are no available listings for this team.
          null;
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
