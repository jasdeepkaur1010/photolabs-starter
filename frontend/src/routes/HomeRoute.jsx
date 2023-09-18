import { React, useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const HomeRoute = (props) => {
  const { photosByTopic } = props;
  
  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favourites={props.favourites} photosByTopic={photosByTopic} />
      {props.favourites}
      <PhotoList setModalData={props.setModalData} photos={props.photos} updatedFavourites={props.updatedFavourites} favourites={props.favourites} photosByTopic={photosByTopic} />
    </div>
  );
};

export default HomeRoute;
