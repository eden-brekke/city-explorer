import React from 'react';
import './Image.css';

class Image extends React.Component {
  render() {
    return (
      <>
      <div className = "map-container">
       <h3 className="map-header">Searched City Map</h3>
      <img className ="map"  src={this.props.cityData} alt="text"></img>
      </div>
      </>
    )
  }
}

export default Image;