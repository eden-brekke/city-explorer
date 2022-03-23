import React from 'react';


class WeatherInfo extends React.Component {
  render() {
    return (
      <>
      <p>Date: {this.props.weather.date} Forecast: {this.props.weather.description}</p>
      </>
    );
  }
}

export default WeatherInfo;
      // <div className="weather-Div">
      //   <Card className="h-100">
      //     <Card.Body>
      //       <Card.Title>{this.props.query} Weather: </Card.Title>
      //       <Card.Text>Forecasted Weather: {this.props.weatherResults.description}</Card.Text>
      //       <Card.Text>Date: {this.props.weatherResults.date}</Card.Text>
      //     </Card.Body>
      //   </Card>
      // </div>