import React from 'react';
import Item from './Item';

const List = ({itemList}) =>{

  return(

        <div>
            {
              itemList.map(list => (
                <Item key={list.id} item={list}/>
              ))
            }   
        </div>
        
  );
}

export default List;
