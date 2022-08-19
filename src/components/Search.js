import { Input, Stack } from "@chakra-ui/react";
import React from "react";
import "./Search.css";

function Search({ setUsers, value, handleInputChange, handleSubmit }) {
  return (
    <Stack className="search-container">
      <h2 className="heading">Search For Github User</h2>
      <form>
        <Input
          width={500}
          className="search-input"
          placeholder="Search for username"
          onChange={(e) => handleInputChange(e)}
          value={value}
        />
        <button className="search-btn" onClick={(e) => handleSubmit(e)}>
          Check details
        </button>
      </form>
    </Stack>
  );
}

export default Search;
