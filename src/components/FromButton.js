import React, { Component } from 'react';
import Button from './Button'
import fetch from 'isomorphic-fetch';

class FromButton extends Component {

  constructor(props){
    super(props);
    this.state = {
      page:1,
    };
     this.handleNext = this.handleNext.bind(this);
     this.handlePrevious = this.handlePrevious.bind(this); 
    }
    handlePrevious(){
        if(this.state.page === 1){
            this.setState({page: this.state.page})
        }
        else
        {
            this.setState({page: this.state.page - 1}) 
        }
    }

    handleNext(){
      this.setState({ page: this.state.page + 1 });
    }
   
    componentWillUpdate(nextProps, nextState){
      if(nextState.page !== this.state.page){
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2b5b451b57e6c7418d74e5a36a9e3ee3&page=${nextState.page}`)
        .then((res) => res.json())
        .then(data =>{
          this.props.handleChange(data.results)
        });
        
      }
    }

  

  render() {
    return (
       <div style={{textAlign:'center'}}>
        <div>
          <Button  handleClick={this.handlePrevious}>Previous</Button>
          <Button  handleClick={this.handleNext}>Next</Button>
        </div>
      </div> 
    );
  }
}

export default FromButton;
