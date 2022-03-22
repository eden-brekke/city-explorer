import React from 'react';
import Container from 'react-bootstrap/Container';
import './SearchBar.css'

class SearchBar extends React.Component {
  render() {
    return (
      <Container className="search-bar">
        <form>
          <input type="text" onInput={(event) => { this.props.handleCityInput(event.target.value) }}></input>
          <button className="search-button" onClick={this.props.getCityData}>Explore!</button>
        </form>
      </Container>
    );
  }
}

export default SearchBar;