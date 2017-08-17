import React from 'react';

const Button = (props) =>{
  const style = {
    //backgroundColor: '#eee',
    border: 'none',
    color: 'black',
    padding: 15,
    textDecoration: 'none',
    display: 'inline-block',
    margin:5,
    marginBottom: 50,
    fontSize: 16, 
    cursor: 'pointer'
    
  };
  return(
        <button style={style} onClick={props.handleClick}>{props.children}</button>
        
  );
}
export default Button;