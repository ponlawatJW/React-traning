import React from 'react';

const Title = ({titleName, titleDate, titleDetail}) =>{
  
  return(
    <div>
      <h1>{titleName}</h1>
      <p>{titleDate}</p>
      <p>{titleDetail}</p>
      
    </div>

  );
}
export default Title;

