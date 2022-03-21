import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
import Image from './Image';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchResults: [],
      cityData: {},
      error: false,
      errorMessage: ''
    }
  }

  getCityData = async (event) => {
    event.preventDefault();

    try {
      let cityRequest = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q={this.state.query}&format=json`
      let cityData = await axios.get(cityRequest);
      this.setState({
        cityData: cityData.data[0],
        searchResults: cityData.data,
      });
    } catch (event) {
      console.log('Error: ', event.response);
      this.setState({
        error: true,
        errorMessage: `An Error Occurred ${event.response.status}, ${event.response.data}`,
      });
    }
  };
  handleCityInput = (event) => {
    this.setState({
      query: event,
    });
  }

  render() {
    console.log(this.state);
  return (
      <>
      {this.state.error ? (
        <p>{this.state.errorMessage}</p>
      ) : (
        <Container>
          <SearchBar handleCityInput={this.handleCityInput}
          getCityData={this.getCityData} />
        <Image cityData={`https://map.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},{this.state.cityData.lon}%zoom=13`}
        />
        </Container>
      )}
      </>
    )
  }
}

export default Main;