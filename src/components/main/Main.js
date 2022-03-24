import React from 'react';
import axios from 'axios';
import SearchBar from '../searchbar/SearchBar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
import Errormodal from '../errormodal/Errormodal';
import CityDisplay from '../citydisplay/CityDisplay';
import Weather from '../weather/Weather';
import Movie from '../movies/Movie';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      cityData: [],
      mapurl: '',
      error: false,
      errorMessage: '',
      showModal: false,
      weatherData: ['sunny'],
      weatherModal: false,
      movieData: [''],
      movieModal: false,
    };
  };

  hideModal = () => {
    this.setState({
      showModal: false,
      weatherModal: false,
      movieModal: false,
    })
  }
  handleShowModal = () => {
    this.setState({
      showModal: true,
    })
  }

  handleCityInput = (event) => {
    this.setState({
      query: event,
    });
  }

  getCityData = async (event) => {
    event.preventDefault();

    try {
      let cityRequest = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.query}&format=json`
      let cityData = await axios.get(cityRequest);
      this.setState({
        cityData: cityData.data,
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
      let weatherData = await axios.get(weatherRequestUrl);
      this.setState({
        weatherData: weatherData.data,
      });
      this.setState({
        weatherModal: true,
      })
    } catch (error) {
      console.log("Error response: ", error.response);
      this.setState({
        error: true,
        showModal: true,
        errorMessage: `An Error Occurred ${error.response.status}, ${error.response.statusText}`,
      });
      console.log(this.state.errorMessage);
    }
  };

  getMovies = async (city) => {
    try {
      let movieCall = `${process.env.REACT_APP_SERVER}/movies?city=${city}`;
      let movieData = await axios.get(movieCall)
      this.setState({
        movieData: movieData.data,
      })
      this.setState({
        movieModal: true,
      })
    } catch (error) {
      this.setState({
        error: true,
        showModal: true,
        errorMessage: `An error has been caught: ${error.response.status} ${error.response.statusText}`
      });
    }
  }

  render() {
    let cityResults = this.state.cityData.map((city, index) => {
      return (
        <CityDisplay

          key={index}
          city={city}
          getWeather={this.getWeather}
          getMovies={this.getMovies}
        />
      );
    }
    );
    return (
      <>
        <Container style={{ justifyContent: "center" }}>
          <SearchBar handleCityInput={this.handleCityInput}
            getCityData={this.getCityData} />
        </Container>
          <main>
            {cityResults}
          </main>
        <Container>
          <Weather
            weatherModal={this.state.weatherModal}
            hideWeatherModal={this.hideModal}
            weatherData={this.state.weatherData}
            query={this.state.query}
          />
          <Movie
            movieModal={this.state.movieModal}
            hideMovieModal={this.hideModal}
            movieData={this.state.movieData}
          />
          <Errormodal
            error={this.state.error}
            errorMessage={this.state.errorMessage}
            modalState={this.state.showModal}
            hideModal={this.hideModal}
            showModal={this.handleShowModal}
          />
        </Container>
      </>
    )
  }
}

export default Main;