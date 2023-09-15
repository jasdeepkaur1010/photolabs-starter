import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({isFavPhotoExist, topics, favourites}) => {
  // const colorCheck = props.favourites.includes(props.photoId);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      <FavBadge favourites={favourites} displayAlert={!!isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigationBar;