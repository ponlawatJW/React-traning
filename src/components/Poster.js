import React from 'react';

const Poster = (props) =>{
  const urlImage = `https://image.tmdb.org/t/p/w500/${props.imgUrl}`;

  return(
    <div>
      <img src={urlImage} alt={props.name} style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default Poster;