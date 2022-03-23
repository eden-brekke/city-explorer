import React from 'react';
import axios from 'axios';
import SearchBar from '../searchbar/SearchBar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Image from '../image/Image';
// import Groups from '../groups/Groups';
import './Main.css'
import Errormodal from '../errormodal/Errormodal';
import CityDisplay from '../citydisplay/CityDisplay';
import Weather from '../weather/Weather';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      // searchResults: [],
      cityData: [],
      mapurl: '',
      error: false,
      errorMessage: '',
      showModal: false,
      weatherData: ['sunny'],
      weatherModal: false,
    }
  }
  hideWeatherModal = () => {
    this.setState({
      weatherModal: false,
    })
  }
  
  hideModal= () => {
    this.setState({
      showModal: false,
      weatherModal: false,
    })
  }
  handleShowModal = () => {
    this.setState({
      showModal: true,
    })
  }
  getCityData = async (event) => {
    event.preventDefault();

    try {
      let cityRequest = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.query}&format=json`
      let cityData = await axios.get(cityRequest);
      this.setState({
        cityData: cityData.data,
        // searchResults: cityData.data,
      });
    } catch (error) {
      console.log('Error: ', error.response);
      this.setState({
        error: true,
        showModal: true,
        errorMessage: `An Error Occurred ${error.response.status}, ${error.response.statusText}`,
      });
    }
  };

  getWeather = async (city) => {
    try {
      let weatherRequestUrl = `${process.env.REACT_APP_SERVER}/weather?city=${city}`;
      console.log(weatherRequestUrl);
      let weatherData = await axios.get(weatherRequestUrl);
      this.setState({
        weatherData: weatherData.data,
      });
      this.setState({
        weatherModal: true,
      })
      console.log(weatherData);
    }catch (error){
      console.log("Error response: ", error.response);
      this.setState({
        error: true,
        showModal: true,
        errorMessage: `An Error Occurred ${error.response.status}, ${error.response.statusText}`,
      });
      console.log(this.state.errorMessage);
    }
  };
  handleCityInput = (event) => {
    this.setState({
      query: event,
    });
  }

  render() {
    let cityResults = this.state.cityData.map((city, index) => {
      // console.log(index)
      return(
      <CityDisplay 
  
      key={index}
      city={city}
      getWeather={this.getWeather}
      />
      );
    }
  );
  return (
      <>
      {this.state.error ? (
        <p>{this.state.errorMessage}</p>
      ) : (
        <>
        <Container style={{justifyContent: "center"}}>
          <SearchBar handleCityInput={this.handleCityInput}
          getCityData={this.getCityData} />
        {/* <Container>
          <Groups searchResults={this.state.searchResults}/>
        </Container> */}
       
        </Container>
        <Container>
          <Weather
          weatherModal={this.state.weatherModal}
          hideWeatherModal={this.hideModal}
          weatherData={this.state.weatherData}
          query={this.state.query}
          />
        </Container>
        </>
      )}
      <main>
        {cityResults}
      </main>
      <Errormodal 
        error={this.state.error}
        errorMessage={this.state.errorMessage}
        modalState={this.state.showModal}
        hideModal={this.hideModal}
        showModal={this.handleShowModal}
      />
      </>
    )
  }
}

export default Main;