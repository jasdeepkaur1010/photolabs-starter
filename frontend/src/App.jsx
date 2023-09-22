import React, { useState, useEffect } from 'react';

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
    setModalData,
    fetchData,
    photosByTopic
  } = useApplicationData();
    
  return (
    <div className="App">
      <HomeRoute setModalData={setModalData} updatedFavourites={updatedFavourites} favourites={favourites} photos={fetchData.photoData} topics={fetchData.topicData} photosByTopic={photosByTopic}/>
      {modal && <PhotoDetailsModal fetchData={fetchData} setModalData={setModalData} modalPhotoData={modalPhotoData} updatedFavourites={updatedFavourites} favourites={favourites} />}
    </div>
  );
};

export default App;
