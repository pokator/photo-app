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
    const query = event.target.value;
    console.log("SearchBar input change:", query); // Debugging line
    this.setState({ query });
    // Call the onSearch prop function passed from the parent component
    this.props.onSearch(query);
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
