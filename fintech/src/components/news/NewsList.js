import React from "react";

const NewsList = ({ newsList }) => {
  return (
    <div>
      {newsList.map((news) => {
        return <p>{news.title}</p>;
      })}
    </div>
  );
};

export default NewsList;
