import React from 'react';
import Card from 'react-bootstrap/Card';

class CityDisplay extends React.Component {
  render() {
    return(
      <div>
        <Card>
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