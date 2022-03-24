import React from 'react';
import { Modal } from "react-bootstrap";
import WeatherInfo from "./WeatherInfo"
import './Weather.css';

class Weather extends React.Component {
  render() {
    let weatherResults = this.props.weatherData.map((weather, index)=> {
      // console.log(index)
      // console.log(weather)
      return (
        <WeatherInfo
        key={index}
        weather={weather}
        />
      );
    });
      return (
    <>
      <Modal className="modal"
      show={this.props.weatherModal}
      onClick={this.props.hideWeatherModal}
      >
      <Modal.Header closeButton className="modal-head"> Seven Day Forecast! </Modal.Header>
      <Modal.Body className='modal-body'onClick={this.props.hideWeatherModal}>
        {weatherResults}
      </Modal.Body>
      </Modal>
    </>
    );
  }
}

export default Weather; 