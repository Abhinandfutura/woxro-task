import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Footer() {
  return (
    <Container>
      <Footer1>
        <About>
          <AboutTxt> About </AboutTxt>
          <Ul>
            <Li>How Xentice works </Li>
            <Li> Founders Letter </Li>
            <Li> Newsroom </Li>
            <Li> Investors </Li>
            <Li> Xentice Gold </Li>
            <Li> Xentice Platinum </Li>
            <Li> Startup Support </Li>
            <Li> Careers </Li>
          </Ul>
        </About>
        <About>
          <AboutTxt> EXPLORE </AboutTxt>
          <Ul>
            <Li>Diversity & Discrimination </Li>
            <Li> Accessibility</Li>
            <Li> Xentice Associates</Li>
            <Li>Xentice Team </Li>
            <Li> Xentice Mall </Li>
            <Li>Xstudio </Li>
            <Li> Xmoney </Li>
            <Li> Entice Spaces </Li>
          </Ul>
        </About>
        <About>
          <AboutTxt> SERVICES </AboutTxt>
          <Ul>
            <Li>Buttons & Badges </Li>
            <Li> Mobile Apps</Li>
            <Li> For Companies</Li>
            <Li>Mobile Apps </Li>
            <Li> Review Professionals </Li>
            <Li>Suggested Professionals </Li>
            <Li> Resource Centre </Li>
            <Li> Community Centre </Li>
          </Ul>
        </About>

        <About>
          <AboutTxt> SUPPORT </AboutTxt>
          <Ul>
            <Li>Our COVID-19 Response </Li>
            <Li> Help Centre</Li>
            <Li> Cancellation options</Li>
            <Li>Neighbourhood Support </Li>
            <Li> Corporate contact </Li>
            <Li>Trust & Safety </Li>
            <Li> FAQ </Li>
            <Li> Payment gateway </Li>
          </Ul>
        </About>
      </Footer1>
      <Footer2>
        <AboutTxt> DISCLAIMER </AboutTxt>
        <NoteContainer>
          <p style={{ width: "50%", textAlign: "justify" }}>
            Please do not share your xentice password, Credit/Debit card pin,
            other confidential information with anyone even if he/she claims to
            be from xentice. We advise our customers to completely ignore such
            communications & report to us at support@xentice.com.
          </p>
          <ImgMainContainer>
            <ImgContainer>
              <Img src=" https://www.xentice.com/static/media/badge-download-on-the-app-store.e8046ecc.png" />
            </ImgContainer>
            <ImgContainer>
              <Img src="https://www.xentice.com/static/media/google-play-badge.609afac0.png" />
            </ImgContainer>
          </ImgMainContainer>
        </NoteContainer>
      </Footer2>
      <Line>
        <Span></Span>
      </Line>
      <Footer3>
        <NoteContainer>
          <Note>© Xentice Group of Companies 2022 . All Rights Reserved</Note>
          <LinksContainer>
            <Links to="/about">About US </Links>
            <Links to="/contact">Contact Us</Links>
            <Links to="/privacy-policy">Privacy Policy </Links>
          </LinksContainer>
        </NoteContainer>
      </Footer3>
    </Container>
  );
}

export default Footer;
const Links = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  color: white;
`;
const LinksContainer = styled.div`
  display: flex;
  width: 27%;
  justify-content: space-between;
`;
const Note = styled.span``;
const Footer3 = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  height: 50px;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  align-self: center;
  padding: 20px 50px;
`;
const Span = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(255, 255, 255);
  align-self: center;
`;
const ImgMainContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const NoteContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const ImgContainer = styled.div`
  width: 150px;
  height: 50px;
`;
const Ul = styled.ul``;
const Li = styled.li`
  list-style: none;

  font-size: 16px;
  width: 250px;
  margin: 10px 0 0;
`;
const About = styled.div``;
const AboutTxt = styled.p`
  margin-bottom: 20px;
  font-size: 18px;

  font-weight: 700;
`;
const Footer2 = styled.div`
  padding: 0px 50px;
  margin-top: 10px;
`;

const Footer1 = styled.div`
  padding-top: 40px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 400px;
`;
const Container = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  justify-content: space-between;

  color: #fff;
  border-top: 0.5px solid #012b72;
  background-color: #012b72;
`;
