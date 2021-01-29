// React
import * as React from "react";
import { FC, Dispatch } from "react";

// Libs
import styled from "styled-components";
import { useHistory } from "react-router-dom";

// Assets
import { ReactComponent as MenuButton } from "../../assets/menu-button.svg";
import { ReactComponent as Name } from "../../assets/name.svg";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 24px;

  svg {
    path {
      fill: ${(props) => props.theme.colors.gray};
    }
  }

  > *:last-child {
    margin-left: auto;
    cursor: pointer;
    height: 24px;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.gray};
  padding: 4px 12px;
  cursor: pointer;
`;

type HeaderProps = {
  toggleOpen: Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const Header: FC<HeaderProps> = ({ toggleOpen, isOpen }) => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <Brand onClick={() => history.push("/")}>
        <Name />
      </Brand>
      <MenuButton onClick={() => toggleOpen(!isOpen)} />
    </HeaderContainer>
  );
};

export { Header };
