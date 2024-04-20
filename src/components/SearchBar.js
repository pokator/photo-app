import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "./map.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      markers: [],
      selectedPlace: {},
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({ query: event.target.value });
    // Here you can perform a search based on the query and update the markers accordingly
    // For simplicity, we're not implementing the search functionality in this example
  }

  render() {
    return (
      <div>
        <TextField
          value={this.state.query}
          onChange={this.handleSearch}
          placeholder="Search..."
          variant="outlined" // or "filled" for a filled input
          fullWidth // to make the input take up full width
        />
      </div>
    );
  }
}

export default SearchBar;
