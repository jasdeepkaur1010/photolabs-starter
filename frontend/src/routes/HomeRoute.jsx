import { React, useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const HomeRoute = (props) => {
  const [favourites, setFavourites] = useState([])
// DATA OUTPUT will look like this [1,2,4,5,6,] <------ photoIDs
  const updatedFavourites = (photoId) => {
    console.log('favourites', favourites)
      // check if the photoIds exist in the array first. 
      // if they exist remove them with the filter function then add that to state
      if(favourites.includes(photoId)) {
        const updatedArray = [...favourites].filter((photo) => photoId !== photo)
        setFavourites(updatedArray);
        return;
      } 
        // if the photoID doesnt exist in the array add it to state 
      setFavourites(prev =>[...prev, photoId]);
      
  }
  
  
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favourites={favourites} />
      {favourites}
      <PhotoList setModal={props.setModal} photos={photos} updatedFavourites={updatedFavourites} favourites={favourites}/>
    </div>
  );
};

export default HomeRoute;
