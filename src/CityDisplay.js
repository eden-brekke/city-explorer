import React from 'react';
import Card from 'react-bootstrap/Card';
import './CityDisplay.css'

class CityDisplay extends React.Component {
  render() {
    return(
      <div className="card-Div">
        <Card className="h-100">
          <Card.Body>
            <Card.Title>City:  {this.props.cityData.display_name}</Card.Title>
            <Card.Text>Longitude: {this.props.cityData.lon}</Card.Text>
            <Card.Text>Latitude: {this.props.cityData.lat}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default CityDisplay;