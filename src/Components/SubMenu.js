import React from "react";

import styled from "styled-components/macro";
import { Link } from "react-router-dom";

function SubMenu() {
  return (
    <Container>
      <Center>
        <RightContainer>
          <Links to="/bulders">
            <MenuImgContainer>
              <Img src="https://www.xentice.com/static/media/engineer.877f1aa6.png" />
            </MenuImgContainer>
            Builders
          </Links>
        </RightContainer>
        <RightContainer>
          <Links to="/architects">
            <MenuImgContainer>
              <Img src="data:image/png;base64,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" />
            </MenuImgContainer>
            Architects
          </Links>
        </RightContainer>
        <RightContainer>
          <Links to="/banking">
            <MenuImgContainer>
              <Img src="  https://www.xentice.com/static/media/finance.15ca8db9.png" />
            </MenuImgContainer>
            Banking
          </Links>
        </RightContainer>
        <RightContainer>
          <Links to="/it-support">
            <MenuImgContainer>
              <Img src=" https://www.xentice.com/static/media/admin.e6b7a902.png" />
            </MenuImgContainer>
            IT Support
          </Links>
        </RightContainer>
        <RightContainer>
          <Links to="/labourers">
            <MenuImgContainer>
              <Img src="  https://www.xentice.com/static/media/worker.ab3bc8e0.png" />
            </MenuImgContainer>
            Labourers
          </Links>
        </RightContainer>
        <RightContainer>
          <Links to="/mentors">
            <MenuImgContainer>
              <Img src=" https://www.xentice.com/static/media/mentor.46f9b157.png" />
            </MenuImgContainer>
            Mentors
          </Links>
        </RightContainer>
        <RightContainer>
          <Links to="/advocates ">
            <MenuImgContainer>
              <Img src=" https://www.xentice.com/static/media/lawyer.f762a229.png" />
            </MenuImgContainer>
            Advocates
          </Links>
        </RightContainer>
        <RightContainer>
          <Links to="/insurance">
            <MenuImgContainer>
              <Img src=" https://www.xentice.com/static/media/wall.f25d47c0.png" />
            </MenuImgContainer>
            Insurance
          </Links>
        </RightContainer>
        <RightContainer>
          <Links to="/lifestyle">
            <MenuImgContainer>
              <Img src="  https://www.xentice.com/static/media/woman.4c9f4456.png" />
            </MenuImgContainer>
            Lifestyle
          </Links>
          <SmallTxt>(Coming soon) </SmallTxt>
        </RightContainer>
        <RightContainer>
          <Links to="/xentice-mart">
            <MenuImgContainer>
              <Img src="data:image/png;base64,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" />
            </MenuImgContainer>
            Xentice Mart
          </Links>
          <SmallTxt> (Coming soon)</SmallTxt>
        </RightContainer>
        <RightContainer>
          <Links to="/eco-living">
            <MenuImgContainer>
              <Img src=" https://www.xentice.com/static/media/forest.102fd61a.png" />
            </MenuImgContainer>
            Eco Living
          </Links>
          <SmallTxt>(Coming soon) </SmallTxt>
        </RightContainer>
      </Center>
    </Container>
  );
}

export default SubMenu;

const MenuImgContainer = styled.div`
  width: 35px;
  height: 35px;
  margin: auto;
`;
const SmallTxt = styled.p`
  font-size: 10px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  text-align: center;
  align-items: center;

  :hover {
    transform: scale(1.1);
  }
  /* transition: all 0.3s; */
`;

const Links = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 13px;
  font-weight: 300;
`;

const Center = styled.div`
  width: 90%;
  justify-content: space-between;
  && {
    svg {
      color: white;
      font-size: 2rem;
    }
  }
  display: flex;

  gap: 20px;
`;
const Container = styled.div`
  background-color: white;
  color: black;

  display: flex;
  justify-content: center;

  width: 100%;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
