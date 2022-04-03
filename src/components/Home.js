import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

// Import Components
import Banner from "./Banner";
import FilterSet from "./FilterSet";
import JobsList from "./JobsList";

// import utils
import { getListings } from "../utils";

export default function Home() {
  //
  // State variables
  //

  // Job listings
  const [listings, setListings] = useState([]);

  // All options for each filter
  const [teams, setTeams] = useState(new Set());
  const [locations, setLocations] = useState(new Set());
  const [commitments, setCommitments] = useState(new Set());

  // Stored options per filter and the corresponding filtered listings
  const [teamFilter, setTeamFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [commitmentFilter, setCommitmentFilter] = useState("");
  const [filteredListings, setFilteredListings] = useState([]);

  //
  // Effects for managing state variables
  //

  // Get job listings from external API when component is loaded.
  useEffect(() => {
    async function populateListings() {
      // Get listings via API url
      const jobListings = await getListings();
      setListings(jobListings);
      console.log("Current job listings: ", jobListings);
    }
    populateListings();
  }, []);

  // After the job listings are populated, parse each job category
  // (teams, locations, work types(commitments)), and create lists
  // per category with unique values.
  useEffect(() => {
    let newTeams = new Set();
    let newLocations = new Set();
    let newCommitments = new Set();
    listings.map((listing) => {
      const info = listing.categories;
      newTeams.add(info.team);
      newLocations.add(info.location);
      newCommitments.add(info.commitment);
      return;
    });
    setTeams(newTeams);
    setLocations(newLocations);
    setCommitments(newCommitments);
  }, [listings]);

  // Update the visible job listings based on the filtered
  // categories the user has selected.
  useEffect(() => {
    let newListings = listings;
    const filters = {
      team: teamFilter,
      location: locationFilter,
      commitment: commitmentFilter,
    };

    for (const filterName in filters) {
      const filterValue = filters[filterName];
      if (filterValue) {
        newListings = newListings.filter((listing) => {
          return listing.categories[filterName] === filterValue;
        });
      }
    }

    setFilteredListings(newListings);
  }, [listings, teamFilter, locationFilter, commitmentFilter]);

  return (
    <Box>
      <Banner />
      <Box
        sx={{
          maxWidth: "1024px",
          width: "100%",
          margin: "0 auto",
          paddingTop: "0px",
          py: 3,
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center", mb: 2 }}>
          Open Positions
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            maxWidth: "768px",
            margin: "0 auto",
          }}
        >
          Our data is training and testing autonomous systems at companies
          around the world. We're looking for talented visionaries to help us to
          expand our impact on the way artificial intelligence is developed.
        </Typography>
        <FilterSet
          teams={teams}
          setTeamFilter={setTeamFilter}
          locations={locations}
          setLocationFilter={setLocationFilter}
          commitments={commitments}
          setCommitmentFilter={setCommitmentFilter}
        />
        <JobsList listings={filteredListings} teams={teams} />
      </Box>
    </Box>
  );
}
