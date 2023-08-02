import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  margin: 20px 0;
`;

const NewsCard = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  animation: ${fadeInAnimation} 0.5s ease-in-out;
`;

const NewsImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const NewsTitle = styled.b`
  font-size: 18px;
  margin-bottom: 10px;
`;

const NewsDescription = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const NewsLink = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 4px;
`;

const NewsList = ({ newsList }) => {
  return (
    <NewsContainer>
      {newsList.map(({ title, description, url, urlToImage }) => {
        return (
          <NewsCard key={url}>
            <NewsImage src={urlToImage} alt={title} />
            <NewsTitle>{title}</NewsTitle>
            <NewsDescription>{description}</NewsDescription>
            <NewsLink href={url}>기사로 이동하기</NewsLink>
          </NewsCard>
        );
      })}
    </NewsContainer>
  );
};

export default NewsList;
