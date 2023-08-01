import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
  -webkit-box-shadow: 4px 5px 15px 5px #000000;
  box-shadow: 4px 5px 15px 5px #000000;
  margin: 20px;
  padding: 30px;
  -webkit-border-radius: 7px;
  border-radius: 7px;
`;

const StyledComponent = () => {
  return <Title>StyledComponent</Title>;
};

export default StyledComponent;
