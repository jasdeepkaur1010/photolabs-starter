import { React, useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const HomeRoute = (props) => {
  
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favourites={props.favourites} />
      {props.favourites}
      <PhotoList setModalData={props.setModalData} photos={photos} updatedFavourites={props.updatedFavourites} favourites={props.favourites}/>
    </div>
  );
};

export default HomeRoute;
