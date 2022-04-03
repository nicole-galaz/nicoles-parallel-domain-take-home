import React, { useState } from "react";
import { Container, MenuItem, Select, Stack, Typography } from "@mui/material";

function Filter({ valueType, values, updateFilter }) {
  const defaultValue = `all ${valueType}`;
  const [value, setValue] = useState(defaultValue);
  return (
    <Select
      key={`select-${valueType}`}
      value={value}
      onChange={(e) => {
        // Reset filter value to 'null' if the default
        // 'ALL <type>' value was selected
        const value = e.target.value;
        setValue(value);
        updateFilter(value === defaultValue ? "" : value);
      }}
      sx={{ mx: "10px" }}
    >
      {[defaultValue, ...values].map((value) => {
        return (
          <MenuItem value={value} key={`menu-item-${value}`}>
            <Typography variant="menuItem" sx={{ mx: "2px" }}>
              {value}
            </Typography>
          </MenuItem>
        );
      })}
    </Select>
  );
}

export default function FilterSet({
  teams,
  setTeamFilter,
  locations,
  setLocationFilter,
  commitments,
  setCommitmentFilter,
}) {
  return (
    <Stack
      direction="row"
      sx={{ alignItems: "center", pt: "80px", pb: "20px" }}
    >
      <Typography
        sx={{
          minWidth: "95px",
          textTransform: "uppercase",
          fontSize: "14px",
          letterSpacing: "2px",
        }}
      >
        Filter by:
      </Typography>
      <Container sx={{ verticalAlign: "center" }}>
        <Filter
          valueType="locations"
          values={locations}
          updateFilter={setLocationFilter}
        />
        <Filter valueType="teams" values={teams} updateFilter={setTeamFilter} />
        <Filter
          valueType="work types"
          values={commitments}
          updateFilter={setCommitmentFilter}
        />
      </Container>
    </Stack>
  );
}
