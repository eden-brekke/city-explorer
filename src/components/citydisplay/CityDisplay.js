import React from 'react';
import Card from 'react-bootstrap/Card';
import './CityDisplay.css'

class CityDisplay extends React.Component {
  render() {
    let mapurl =`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.city.lat},${this.props.city.lon}&zoom=13`
    return(
      <div className="card-Div">
        <Card className="h-100">
          <Card.Body>
            <Card.Img variant="top" src={mapurl}/>
            <Card.Title>City:  {this.props.city.display_name}</Card.Title>
            <Card.Text>Longitude: {this.props.city.lon}</Card.Text>
            <Card.Text>Latitude: {this.props.city.lat}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default CityDisplay;