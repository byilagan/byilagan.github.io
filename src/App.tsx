// React
import * as React from "react";
import { FC } from "react";

// Libs
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { HashRouter, Route } from "react-router-dom";

// Theme
import { theme } from "./theme";

// Components
import { SideMenu } from "./components/SideMenu";
import { Header } from "./components/Header";

// Views
import { Home } from "./views/Home";
import { Developer } from "./views/Developer";
import { Creator } from "./views/Creator";

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 92px auto;
`;

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SideMenu>
        {({ setOpen, isOpen }: any) => (
          <MainContainer>
            <HashRouter>
              <Header toggleOpen={setOpen} isOpen={isOpen} />
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/developer">
                <Developer />
              </Route>
              <Route exact path="/creator">
                <Creator />
              </Route>
            </HashRouter>
          </MainContainer>
        )}
      </SideMenu>
    </ThemeProvider>
  );
};

export default App;
