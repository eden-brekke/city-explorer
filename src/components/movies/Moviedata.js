import React from 'react';
import '../header/Header.css'
import './Movie.css'

class Moviedata extends React.Component {

  render(){
  
    return (
      <>
      <h3>{this.props.movie.title}</h3>
      <p>{this.props.movie.tagline}</p>
      <p>{this.props.movie.description}</p>
      <p>Language: {this.props.movie.language}</p>
      </>
    );
  }
  }
  
  export default Moviedata;