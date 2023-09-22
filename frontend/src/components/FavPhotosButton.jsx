import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {favourites} = props;
  const photos = props.photos.map(photo => {
    return (
      <PhotoListItem
        photo={photo}
        setModalData={props.setModalData}
        updatedFavourites={props.updatedFavourites}
        favourites={props.favourites}
        photoId={photo.id}
        key={photo.id}
        username={photo.user.username}
        imageSource={photo.urls.regular}
        profile={photo.user.profile}
        city={photo.location.city}
        country={photo.location.country}
      />
    )
  })
  return (
    <ul className="photo-list">
      {photos}
    </ul>
  );
};

export default PhotoList;
