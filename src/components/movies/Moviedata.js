import React from 'react';
import '../header/Header.css'
import './Movie.css'

class Moviedata extends React.Component {

  render(){
  
    return (
      <>
      <h3>{this.props.movie.title}</h3>
      <img src={`https://image.tmdb.org/t/p/w500/${this.props.movie.imgURL}`} alt="If the Movie has a Poster, it's here!"/>
      <p> Movie Synopsis:  {this.props.movie.description}</p>
      <p>Language: {this.props.movie.language}</p>
      </>
    );
  }
  }
  
  export default Moviedata;