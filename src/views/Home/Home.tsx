// React
import * as React from "react";
import { FC } from "react";

// Libs
import styled from "styled-components";

// Assets
import Hero from "../../assets/cover.png";

const HomeView = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    height: 600px;
  }
`;

const Home: FC = () => {
  return (
    <HomeView>
      <img src={Hero} alt="" />
    </HomeView>
  );
};

export { Home };
