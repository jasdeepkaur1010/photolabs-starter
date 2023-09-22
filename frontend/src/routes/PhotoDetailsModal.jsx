import React, { useEffect, useState } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {

  const { setModalData, modalPhotoData, favourites, updatedFavourites, fetchData } = props;
  const similarPhotos = modalPhotoData.similar_photos.map((simPhoto) => {
    const photoObject = fetchData.photoData.find(p => p.id === simPhoto.id);
    return photoObject;
  });
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} onClick={() => setModalData(false, {})} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton updatedFavourites={updatedFavourites} photoId={modalPhotoData.id} favourites={favourites} />
        <img src={modalPhotoData.urls.regular} className="photo-details-modal__image" alt="main image" />
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={modalPhotoData.user.profile} />
          <div>
            <p className="photo-list__user-info">{modalPhotoData.user.username}</p>
            <p className="photo-list__user-location">{modalPhotoData.location.city}, {modalPhotoData.location.country}</p>
          </div>
        </div>
        <h1 className="photo-details-modal__header">Similar Photos</h1>
        <div className="photo-details-modal__images">
          <PhotoList favourites={favourites} updatedFavourites={updatedFavourites} setModalData={setModalData} photos={similarPhotos} />
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
