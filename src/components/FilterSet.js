import React, { useState } from "react";
import { Container, MenuItem, Select, Stack, Typography } from "@mui/material";

function Filter({ valueType, values, updateFilter }) {
  const defaultValue = `ALL ${valueType.toUpperCase()}`;
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
    >
      {[defaultValue, ...values].map((value) => {
        return (
          <MenuItem value={value} key={`menu-item-${value}`}>
            {value}
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
    <Stack direction="row">
      <Typography>FILTER BY:</Typography>
      <Container>
        <Filter
          valueType="location"
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
