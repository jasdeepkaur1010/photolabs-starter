import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({ isFavPhotoExist, topics, favourites }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='topics-favBadge'>
        <TopicList topics={topics} />
        <FavBadge favourites={favourites} displayAlert={!!isFavPhotoExist} />
      </div>
    </div>
  )
}

export default TopNavigationBar;