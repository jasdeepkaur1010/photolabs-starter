import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  
  const { photosByTopic } = props;

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favourites={props.favourites} photosByTopic={photosByTopic} />
      <PhotoList setModalData={props.setModalData} photos={props.photos} updatedFavourites={props.updatedFavourites} favourites={props.favourites} photosByTopic={photosByTopic} />
    </div>
  );
};

export default HomeRoute;
