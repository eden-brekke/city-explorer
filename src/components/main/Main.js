import React from 'react';
import axios from 'axios';
import SearchBar from '../searchbar/SearchBar';
import Container from 'react-bootstrap/Container';
// import Image from '../image/Image';
// import Groups from '../groups/Groups';
import './Main.css'
import Errormodal from '../errormodal/Errormodal';
import CityDisplay from '../citydisplay/CityDisplay';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      // searchResults: [],
      cityData: [],
      error: false,
      errorMessage: '',
      showModal: false,
    }
  }
  hideModal= () => {
    this.setState({
      showModal: false,
    })
  }
  showModal = () => {
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
    } catch (event) {
      console.log('Error: ', event.response);
      this.setState({
        error: true,
        showModal: true,
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
    let cityResults = this.state.cityData.map((city, index) => {
      console.log(index)
      return(
      <CityDisplay 
  
      key={index}
      city={city}
      />
      );
    }
  );
  return (
      <>
      {this.state.error ? (
        <p>{this.state.errorMessage}</p>
      ) : (
        <Container style={{justifyContent: "center"}}>
          <SearchBar handleCityInput={this.handleCityInput}
          getCityData={this.getCityData} />
        {/* <Container>
          <Groups searchResults={this.state.searchResults}/>
        </Container> */}
       
        </Container>
      )}
      <main>
        {cityResults}
      </main>
      <Errormodal 
        error={this.state.error}
        errorMessage={this.state.errorMessage}
        modalState={this.state.showModal}
        showModal={this.showModal}
        hideModal={this.hideModal}
      />
      </>
    )
  }
}

export default Main;