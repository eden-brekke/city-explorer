import React from 'react';
import Card from 'react-bootstrap/Card';
import './CityDisplay.css'

class CityDisplay extends React.Component {
  render() {
    return(
      <div className="card-Div">
        <Card className="h-100">
          <Card.Body>
            <Card.Title>{this.props.cityData.display_name}</Card.Title>
            <Card.Text>{this.props.cityData.lon}</Card.Text>
            <Card.Text>{this.props.cityData.lat}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default CityDisplay;