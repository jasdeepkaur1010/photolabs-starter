import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const { setModalData, photo } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton updatedFavourites={props.updatedFavourites} photoId={props.photoId} favourites={props.favourites} />
      <img className="photo-list__image" onClick={() => setModalData(true, photo)} src={photo.urls.regular} alt="image" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile} />
        <div>
          <p className="photo-list__user-info">{props.username}</p>
          <p className="photo-list__user-location">{props.city}, {props.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
