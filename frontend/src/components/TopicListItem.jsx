import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  const { photosByTopic } = props;
  return (
    <div className="topic-list__item" onClick={() => photosByTopic(true, props.topic)}>
      <p>{props.title}</p>
    </div>
  );
};

export default TopicListItem;
