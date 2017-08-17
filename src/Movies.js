import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import List from './components/List';
import FromButton from './components/FromButton';


class Movies extends Component {
  constructor(props) {
    super(props);
    this.url = 'https://api.themoviedb.org/3/discover/movie?api_key=2b5b451b57e6c7418d74e5a36a9e3ee3&page=1'
    this.state = {
      movies: [],
    };

    this.handleChange = this.handleChange.bind(this);
    
  }
  componentDidMount() {
    fetch(this.url)
    .then(res => res.json())
    .then(data =>{ 
      this.setState({ movies: data.results })
    });
  } 

  handleChange(data){
    this.setState({ movies: data});

  }

  render() {
    return (
        <div>
          <div>
            <List itemList={this.state.movies}/>  
          </div>
          <div>
            <FromButton handleChange={this.handleChange} /> 
         
          </div>
            
        </div>
    );
  }
}

export default Movies;
