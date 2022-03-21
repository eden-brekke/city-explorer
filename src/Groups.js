import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CityDisplay from './CityDisplay';

class Groups extends React.Component {
  render() {
    let cityFilter = this.props.searchResults.slice(0, -1);
    return (
      <Row xs={1} sm={2} md={3} lg={4}>
        {cityFilter.map((city, index) => (
          <Col key={index}>
            <CityDisplay cityData={city} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default Groups;