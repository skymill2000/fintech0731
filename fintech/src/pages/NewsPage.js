import React, { useState } from "react";
import AppHeader from "../components/common/AppHeader";

const NewsPage = () => {
  const [searchText, setSearchText] = useState();
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
  };

  const handleClick = () => {
    console.log(searchText);
  };

  return (
    <div>
      <AppHeader title={"뉴스검색"}></AppHeader>
      {/* <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      <NewsList newsList={searchResult}></NewsList> */}
    </div>
  );
};

export default NewsPage;
