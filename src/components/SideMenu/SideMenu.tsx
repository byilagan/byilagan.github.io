// React
import * as React from "react";
import { FC, useState } from "react";

// Libs
import styled from "styled-components";

const SideMenuContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const Menu: any = styled.div`
  height: 100%;
  width: ${(props: any) => (props.isOpen ? "300px" : "0")};
  background-color: ${(props) => props.theme.colors.gray};
  transition: width 0.5s ease-in-out;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const SideMenu: FC = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const renderMenuOptions = () => {};

  return (
    <SideMenuContainer>
      <Content>
        {typeof children === "function"
          ? children({ isOpen, setOpen })
          : children}
      </Content>
      <Menu isOpen={isOpen}>{renderMenuOptions}</Menu>
    </SideMenuContainer>
  );
};

export { SideMenu };
