import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // const [selected, setSelected] = useState(false);
  // const handleClick = function(){
  //   // setSelected((prev) => !prev);
  //   console.log(updatedFavourites);
  // } 
  const toggleFavouritePhoto = () => {
    
    props.updatedFavourites(props.photoId)
    console.log(props.favourites)
  }

  const colorCheck = props.favourites.includes(props.photoId);
  
  return (
    <div onClick={toggleFavouritePhoto} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={colorCheck} />
      </div>
    </div>
  );
}

export default PhotoFavButton;