import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const toggleFavouritePhoto = () => {
    props.updatedFavourites(props.photoId)
  }

  const colorCheck = (props.favourites && props.favourites.includes(props.photoId));

  return (
    <div onClick={toggleFavouritePhoto} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={colorCheck} />
      </div>
    </div>
  );
}

export default PhotoFavButton;