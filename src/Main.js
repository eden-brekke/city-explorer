import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
import Image from './Image';
import Groups from './Groups';
import './Main.css'

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
      let cityRequest = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.query}&format=json`
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
    console.log(this.cityData);
    console.log(this.state.query);
  return (
      <>
      {this.state.error ? (
        <p>{this.state.errorMessage}</p>
      ) : (
        <Container style={{justifyContent: "center"}}>
          <SearchBar handleCityInput={this.handleCityInput}
          getCityData={this.getCityData} />
        <Container>
          <Groups searchResults={this.state.searchResults}/>
        </Container>
        <Image cityData={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=13`}
        />
        </Container>
      )}
      </>
    )
  }
}

export default Main;