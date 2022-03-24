import React from 'react';
import Card from 'react-bootstrap/Card';
import './CityDisplay.css'
import { Button } from 'react-bootstrap';

class CityDisplay extends React.Component {
  getWeather = () =>{
    console.log(this.props.city.display_name.split(',')[0])
    this.props.getWeather(this.props.city.display_name.split(',')[0])
  }
  getMovies = () =>{
    this.props.getMovies(this.props.city.display_name.split(',')[0])
  }
  render() {
    let mapurl =`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.city.lat},${this.props.city.lon}&zoom=13`
    return(
      <div className="card-Div">
        <Card className="h-100">
          <Card.Body>
            <Card.Img variant="top" src={mapurl}/>
            <Card.Title className='card-title'>City:  {this.props.city.display_name}</Card.Title>
            <Card.Text>Longitude: {this.props.city.lon}</Card.Text>
            <Card.Text>Latitude: {this.props.city.lat}</Card.Text>
          </Card.Body>
          <Button onClick={this.getWeather} className="search-button">Weather Forecast</Button>
          <Button onClick={this.getMovies} className="search-button">Find Movies!</Button>
        </Card>
      </div>
    );
  }
}
export default CityDisplay;