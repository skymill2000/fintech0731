import React, { useState } from "react";
import AppHeader from "../components/common/AppHeader";
import SearchInput from "../components/news/SearchInput";
import axios from "axios";
import NewsList from "../components/news/NewsList";

const NewsPage = () => {
  const [searchText, setSearchText] = useState();
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
  };

  const handleClick = () => {
    console.log(searchText);
    let apiKey = "";
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchText}&from=2023-07-02&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then(({ data }) => {
        console.log(data.articles);
        setSearchResult(data.articles);
      });
  };

  return (
    <div>
      <AppHeader title={"뉴스검색"}></AppHeader>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      <NewsList newsList={searchResult}></NewsList>
    </div>
  );
};

export default NewsPage;
