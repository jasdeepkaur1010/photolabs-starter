import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const { photosByTopic } = props;
  
  return (
    <div className="topic-list__item" onClick={() => photosByTopic(true, props.topic)}>
      <p>{props.title}</p>
    </div>
  );
};

export default TopicListItem;
