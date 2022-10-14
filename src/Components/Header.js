import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CampaignIcon from "@mui/icons-material/Campaign";
function Header() {
  return (
    <Container>
      <Left>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <LogoTxt>Xentice</LogoTxt>
      </Left>
      <Right>
        <RightContainer>
          <IconButton>
            <CampaignIcon />
          </IconButton>
          <Links to="/post-ad">Post Ad </Links>
        </RightContainer>
        <RightContainer>
          <IconButton>
            <LocationOnIcon />
          </IconButton>
          <Links to="/post-ad">Near me </Links>
        </RightContainer>
        <RightContainer>
          <IconButton>
            <LoginIcon />
          </IconButton>
          <Links to="/login">Login/Sign Up </Links>
        </RightContainer>
      </Right>
    </Container>
  );
}

export default Header;

const Right = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
`;

const RightContainer = styled.div``;

const Links = styled(Link)`
  text-decoration: none;
  color: blue;
  font-size: 14px;
  font-weight: 300;
`;

const LogoTxt = styled.h2`
  font-size: 28px;
  font-weight: 500;
`;
const Left = styled.div`
  && {
    svg {
      color: grey;
    }
  }
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Container = styled.div`
  height: 80px;

  background-color: white;
  color: blue;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  width: 100%;
  position: fixed;
  top: 0;
`;
