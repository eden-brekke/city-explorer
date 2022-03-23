import React from 'react';
import { Modal } from "react-bootstrap";
import WeatherInfo from "./WeatherInfo"
import './Weather.css';

class Weather extends React.Component {
  render() {
    let weatherResults = this.props.weatherData.map((weather, index)=> {
      console.log(index)
      console.log(weather)
      return (
        <WeatherInfo
        key={index}
        weather={weather}
        />
      );
    });
      return (
    <>
      <Modal 
      show={this.props.weatherModal}
      onClick={this.props.hideModal}
      />
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body onClick={this.props.hideModal}>
        {weatherResults}
      </Modal.Body>
    </>
    );
  }
}

export default Weather; 