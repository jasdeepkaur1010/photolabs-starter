import { useState } from 'react';
import { useEffect, useReducer } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SHOW_MODAL: "SHOW_MODAL",
  MODAL_PHOTO_DATA: "MODAL_PHOTO_DATA",
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return [...state, action.photoId];
    case ACTIONS.FAV_PHOTO_REMOVED:
      return state.filter((photoId) => photoId !== action.photoId);
    case ACTIONS.SHOW_MODAL:
      return action.modalState;
    case ACTIONS.MODAL_PHOTO_DATA:
      return action.photo;
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {

  const [favourites, dispatch1] = useReducer(reducer, [])
  const [modal, dispatch2] = useReducer(reducer, false);
  const [modalPhotoData, dispatch3] = useReducer(reducer, {});

  const setModalData = (modalState, photo) => {
    dispatch2({ type: ACTIONS.SHOW_MODAL, modalState: modalState });
    dispatch3({ type: ACTIONS.MODAL_PHOTO_DATA, photo: photo });
    // setModal(modalState);
    // setModalPhotoData(photo);
  }
  // DATA OUTPUT will look like this [1,2,4,5,6,] <------ photoIDs
  const updatedFavourites = (photoId) => {
    // check if the photoIds exist in the array first. 
    // if they exist remove them with the filter function then add that to state
    if (favourites.includes(photoId)) {
      console.log('removed');
      dispatch1({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId: photoId });
      // const updatedArray = [...favourites].filter((photo) => photoId !== photo)
      // setFavourites(updatedArray);
      return;
    }
    console.log('added');
    // if the photoID doesnt exist in the array add it to state 
    // setFavourites(prev => [...prev, photoId]);
    dispatch1({ type: ACTIONS.FAV_PHOTO_ADDED, photoId: photoId });

  }
  useEffect(() => {
    console.log(favourites);
  }, [favourites]);

  return {
    modal,
    modalPhotoData,
    updatedFavourites,
    favourites,
    setModalData
  };
};

export default useApplicationData;
