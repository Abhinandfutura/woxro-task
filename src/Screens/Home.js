import React, { useEffect, useState } from "react";
import SubHeader from "../Components/SubHeader";
import axios from "axios";
import styled from "styled-components/macro";
import { FormControl, MenuItem, Select } from "@mui/material";
import Button from "@mui/material/Button";
import SubMenu from "../Components/SubMenu";
import CompanyDetails from "../Components/CompanyDetails";
function Home() {
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        "https://api.xentice.com/api/postadSelect"
      );
      console.log("=============", JSON.parse({ data }));
    };
    fetch();
  }, []);
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const images = [
    "https://xenticebucket21.s3.ap-south-1.amazonaws.com/adv/T8KFRAQZrEa0ptImqcxSlURKmEMp2rzggcARfhoD.png",
    "https://xenticebucket21.s3.ap-south-1.amazonaws.com/adv/8OHYcD4EA5hpJqQgtQmNVfLrO0YXspuEDfseTmXX.png",
  ];
  const [currentimage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <SubHeader />
      <ImgContainer>
        <Img1 src="https://www.xentice.com/static/media/office.27bb9079.jpg" />
        <SearchContainer>
          <ChooseTxt>Choose from 25,00+ Spaces for your Business</ChooseTxt>

          <p style={{ fontSize: "13px" }}>
            Get inspired and find your perfect place
          </p>

          <Field1>
            <EditContainer>
              <SelectBox1>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    defaultValue="Status"
                    MenuProps={{
                      disableScrollLock: true,
                    }}
                  >
                    <MenuItems
                      value=""
                      disabled
                      selected
                      style={{ fontsize: "13px" }}
                    >
                      Looking For
                    </MenuItems>
                    <MenuItems value={1}> Commercial Shop</MenuItems>
                    <MenuItems value={2}>Commercial Office</MenuItems>
                    <MenuItems value={3}>Commercial Land</MenuItems>
                    <MenuItems value={4}> Commercial Building</MenuItems>
                    <MenuItems value={5}> Industrial Building</MenuItems>
                    <MenuItems value={6}> Co-working Space</MenuItems>
                    <MenuItems value={7}> Private Office</MenuItems>
                    <MenuItems value={8}> Meeting Room</MenuItems>
                  </Select>
                </FormControl>
              </SelectBox1>
            </EditContainer>
          </Field1>
          <Field1>
            <EditContainer>
              <SelectBox1>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    defaultValue="Status"
                    MenuProps={{
                      disableScrollLock: true,
                    }}
                  >
                    <MenuItems
                      value=""
                      disabled
                      selected
                      style={{ fontsize: "13px" }}
                    >
                      Select City
                    </MenuItems>
                    <MenuItems value={1}> Delhi</MenuItems>
                    <MenuItems value={2}>Noida</MenuItems>
                    <MenuItems value={3}>Hyderabad</MenuItems>
                    <MenuItems value={4}> Mumbai</MenuItems>
                    <MenuItems value={5}> Banglore</MenuItems>
                    <MenuItems value={6}> Cochin</MenuItems>
                    <MenuItems value={7}> Chennai</MenuItems>
                  </Select>
                </FormControl>
              </SelectBox1>
            </EditContainer>
          </Field1>
          <StyledButton variant="contained">Search</StyledButton>
        </SearchContainer>
      </ImgContainer>

      <SubMenu />

      <ChangeImage>
        <ImgContainer2>
          <Img src={currentimage} />
        </ImgContainer2>
        <ImgContainer2>
          <Img src="https://xenticebucket21.s3.ap-south-1.amazonaws.com/adv/M2dhebuxJ100xVTDB0sKwbvlQYyG9POXRyEYz9rk.png" />
        </ImgContainer2>
      </ChangeImage>

      <CompanyDetails />
    </Container>
  );
}

export default Home;

const ChangeImage = styled.div`
  width: 90%;
  column-gap: 5px;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
const StyledButton = styled(Button)`
  && {
    background-color: #012b72;
    font-family: "poppins", sans-serif;
    text-transform: capitalize;
    padding: 9px;
    :hover {
      background-color: #012b72;
    }
  }
`;

const SelectBox1 = styled.div`
  width: 100%;
  .css-1869usk-MuiFormControl-root {
    width: 100%;
    min-width: 156px !important;
    margin: unset !important;
  }

  .css-1auycx3-MuiAutocomplete-root
    .MuiOutlinedInput-root
    .MuiAutocomplete-endAdornment {
    top: -1px !important;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: #d4d4d4 !important;
    border-width: 1px !important ;
    outline: unset !important;
  }

  div div div {
    padding: 3px;
  }
  .css-1auycx3-MuiAutocomplete-root
    .MuiOutlinedInput-root.MuiInputBase-sizeSmall
    .MuiAutocomplete-input {
    padding: 0px 4px 0px 6px;
  }

  em {
    font-style: normal !important;
    font-family: unset !important;
  }
  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 10px !important;
  }
`;

const Field1 = styled.div``;
const EditContainer = styled.div`
  display: flex;

  align-items: center;

  height: 41px;
`;

const SearchContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 60px;
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  width: 386px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Container = styled.div`
  margin-top: 80px; ;
`;
const ImgContainer = styled.div`
  width: auto;
  height: 70vw;
  position: relative;
  max-height: 650px;
`;
const ImgContainer2 = styled.div``;
const Img1 = styled.img`
  width: 100%;
  height: 100%;
`;
const Img = styled(Img1)`
  border-radius: 4px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const MenuItems = styled(MenuItem)`
  font-size: 13px !important;
`;

const ChooseTxt = styled.h4`
  font-size: 28px;
  font-weight: 700;
  color: #000;
  margin-bottom: 10px; ;
`;
