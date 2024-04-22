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
    this.setState({ query });
    this.props.onSearch(query);
  }

  render() {
    return (
      <div>
        <TextField
          value={this.state.query}
          onChange={this.handleSearch}
          placeholder="Search..."
          variant="outlined"
          fullWidth
        />
      </div>
    );
  }
}

export default SearchBar;
