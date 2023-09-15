import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favourites }) => {
  let isFavPhotoExist = false;
  let selected = false;
  { isFavPhotoExist = favourites.length ? !isFavPhotoExist : isFavPhotoExist }
  { selected = favourites.length ? !selected : selected }
  return (
    <div className='fav-badge'>
      <FavIcon selected={!!selected} displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;