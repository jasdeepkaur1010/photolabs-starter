import { useEffect, useReducer } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SHOW_MODAL: "SHOW_MODAL",
  MODAL_PHOTO_DATA: "MODAL_PHOTO_DATA",
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return [...state, action.payload];
    case ACTIONS.FAV_PHOTO_REMOVED:
      return state.filter((photoId) => photoId !== action.payload);
    case ACTIONS.SHOW_MODAL:
      return action.payload;
    case ACTIONS.MODAL_PHOTO_DATA:
      return action.payload;
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.payload };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {

  const initialState = {
    photoData: [],
    topicData: []
  };
  const [favourites, dispatch1] = useReducer(reducer, [])
  const [modal, dispatch2] = useReducer(reducer, false);
  const [modalPhotoData, dispatch3] = useReducer(reducer, {});
  const [fetchData, dispatch4] = useReducer(reducer, initialState);

  const fetchAllPhoto = () => {
    fetch('/api/photos')
      .then(res => res.json())
      .then((data) => dispatch4({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }
  useEffect(() => {
    fetchAllPhoto();
  }, []);

  useEffect(() => {
    fetch('api/topics')
      .then(res => res.json())
      .then((data) => dispatch4({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);

  const photosByTopic = (data, topic) => {
    if (data) {
      fetch(`/api/topics/photos/${topic.id}`)
        .then(res => res.json())
        .then((data) => dispatch4({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }));
    } else {
      fetchAllPhoto();
    }
  };

  const setModalData = (modalState, photo) => {
    dispatch2({ type: ACTIONS.SHOW_MODAL, payload: modalState });
    dispatch3({ type: ACTIONS.MODAL_PHOTO_DATA, payload: photo });
  }
  const updatedFavourites = (photoId) => {
    // check if the photoIds exist in the array first. 
    // if they exist remove them with the filter function then add that to state
    if (favourites.includes(photoId)) {
      dispatch1({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
      return;
    }
    // if the photoID doesnt exist in the array add it to state 
    dispatch1({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });

  }

  return {
    modal,
    modalPhotoData,
    updatedFavourites,
    favourites,
    setModalData,
    fetchData,
    photosByTopic
  };
};

export default useApplicationData;
