import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {modal,
    modalPhotoData,
    updatedFavourites,
    favourites,
    setModalData} = useApplicationData();
    
  // const [modal, setModal] = useState(false);
  // const [modalPhotoData, setModalPhotoData] = useState({});
  // const setModalData = (modalState, photo) => {
  //   setModal(modalState);
  //   setModalPhotoData(photo);
  // }
  // const [favourites, setFavourites] = useState([])
  // // DATA OUTPUT will look like this [1,2,4,5,6,] <------ photoIDs
  // const updatedFavourites = (photoId) => {
  //   // check if the photoIds exist in the array first. 
  //   // if they exist remove them with the filter function then add that to state
  //   if (favourites.includes(photoId)) {
  //     const updatedArray = [...favourites].filter((photo) => photoId !== photo)
  //     setFavourites(updatedArray);
  //     return;
  //   }
  //   // if the photoID doesnt exist in the array add it to state 
  //   setFavourites(prev => [...prev, photoId]);

  // }

  return (
    <div className="App">
      <HomeRoute setModalData={setModalData} updatedFavourites={updatedFavourites} favourites={favourites} />
      {modal && <PhotoDetailsModal setModalData={setModalData} modalPhotoData={modalPhotoData} updatedFavourites={updatedFavourites} favourites={favourites} />}
    </div>
  );
};

export default App;
