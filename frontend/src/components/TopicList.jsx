import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const { photosByTopic } = props;

  const topics = props.topics.map(topic => {
    return (
      <TopicListItem
        topic={topic}
        id={topic.id}
        key={topic.id}
        title={topic.title}
        photosByTopic={photosByTopic}
      />
    )
  })

  return (
    <div className="top-nav-bar__topic-list">
      {topics}
    </div>
  );
};

export default TopicList;
