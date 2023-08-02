import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const AppHeader = ({ title }) => {
  return <HeaderContainer>{title}</HeaderContainer>;
};

export default AppHeader;
