import React from 'react';
import Poster from './Poster';
import Title from './Title';

const Item = ({item}) =>{
   const style = {
    border: '1px solid #eee',
    margin: 30,
    display: 'block',
    color: '#333'
  };

  return(

    <a href={`https://www.themoviedb.org/movie/${item.id}`} target="_blank" style={style}>
      <div style={{ display: 'inline-block', verticalAlign: 'middle', width: 200 }}>
        <Poster name={item.title} imgUrl={item.poster_path} />
      </div>
      <div style={{ display: 'inline-block', verticalAlign: 'middle', width: 600, paddingLeft: 40 }}>
        <Title titleName={item.title} titleDate={item.release_date} titleDetail={item.overview} />
      </div>
    </a>
  );
}

export default Item;