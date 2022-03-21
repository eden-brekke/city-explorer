import React from 'react';
import Container from 'react-bootstrap/Container';

class SearchBar extends React.Component {
  render() {
    return (
      <Container>
        <form> 
          <input type = "text" onInput={(event)=>{this.props.handleCityInput(event.target.value)}}></input>
          <button onClick={this.props.handleGetData}>Explore!</button>
        </form>
      </Container>
    );
  }
}

export default SearchBar;