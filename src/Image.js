import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <img style={{width: '80%'}} src={this.props.cityData} alt="text"></img>
    )
  }
}

export default Image;