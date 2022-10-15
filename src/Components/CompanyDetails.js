import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CircularProgress } from "@mui/material";
function CompanyDetails(props) {
  const { names, filteredDatas, icon, isRemove, isHide } = props;
  const [loading, setLoading] = useState(false);
  let completeData = [];
  const [CmpData, setCmpData] = useState([]);
  const mapping = async () => {
    if (names) {
      setLoading(true);
      completeData = await filteredDatas
        .map((i) => i.map((i) => i).filter((i) => i.name === names))
        .filter((k) => (k.length ? k : ""));
      if (completeData.length) {
        setLoading(false);
        setCmpData(completeData);
      }
    }
  };

  useEffect(() => {
    mapping();
  }, [filteredDatas.length]);

  const ref = useRef();
  const [fav, setFav] = useState(false);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <Container>
          <Header1>
            <RightContainer>
              <ImgContainer>
                <Img src={icon} />
              </ImgContainer>
              <span>{names} </span>
            </RightContainer>
            <Links to="/ddd">Explore More</Links>
          </Header1>

          <CardComponent ref={ref}>
            {CmpData.map((items, index) => {
              return (
                <>
                  {items.map((subItems, sIndex) => {
                    return (
                      <>
                        <Card1 sx={{ maxWidth: 245 }} key={subItems.title}>
                          <CardMedia1
                            component="img"
                            alt="green iguana"
                            height="140"
                            src={subItems[0]}
                          />

                          <CardContainer>
                            <ShopTxtContainer>
                              <ShopTxt>{subItems.title}</ShopTxt>

                              <IconButton>
                                {fav === subItems.title ? (
                                  <StyledFavIcon />
                                ) : (
                                  <FavoriteBorderIcon
                                    onClick={() => setFav(subItems.title)}
                                  />
                                )}
                              </IconButton>
                            </ShopTxtContainer>
                            <LocationContainer>
                              <IconContainer>
                                <LocationOnIcon />
                                <span
                                  style={{
                                    fontSize: "13px",
                                    fontWeight: "500   ",
                                  }}
                                >
                                  {subItems.city}
                                </span>
                              </IconContainer>
                              {isRemove ? (
                                ""
                              ) : isHide ? (
                                <Rate>
                                  {subItems.mem_plan.length === 2
                                    ? `  Rs${subItems.mem_plan[1].price}`
                                    : ""}
                                  {subItems.mem_plan.length === 2
                                    ? `Rs ${subItems.mem_plan[1].type}`
                                    : ""}
                                </Rate>
                              ) : (
                                <Rate>
                                  Rs
                                  {subItems.price
                                    ? subItems.price.rate
                                    : subItems.mem_plan
                                    ? subItems.mem_plan[0].price
                                    : ""}
                                  {subItems.price
                                    ? subItems.price.type
                                    : subItems.mem_plan
                                    ? subItems.mem_plan[0].type
                                    : ""}
                                </Rate>
                              )}
                            </LocationContainer>
                            <Explore>Explore Now</Explore>
                          </CardContainer>
                        </Card1>
                      </>
                    );
                  })}
                </>
              );
            })}
          </CardComponent>

          <IConButton>
            <ArrowBackIosIcon onClick={() => scroll(-400)} />
          </IConButton>
          <IConButton2>
            <ArrowForwardIosIcon onClick={() => scroll(400)} />
          </IConButton2>
        </Container>
      )}
    </>
  );
}
export default CompanyDetails;
const CardMedia1 = styled(CardMedia)`
  && {
    width: 245px;
  }
`;

const Card1 = styled(Card)`
  && {
    overflow: unset;
    margin: 1px;
  }
`;
const StyledFavIcon = styled(FavoriteIcon)`
  && {
    color: red;
  }
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Explore = styled.p`
  width: 100%;
  text-align: right;
  color: blue;
  font-weight: 500;
  font-size: 14px;
`;
const Rate = styled.p`
  color: red;
  font-size: 13px;
  margin-top: 5px;
`;
const LocationContainer = styled.div``;
const ShopTxt = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const ShopTxtContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardContainer = styled.div`
  width: 100%;

  padding: 10px;
`;
const CardComponent = styled.div`
  width: 90%;
  display: flex;
  scroll-behavior: smooth;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  gap: 20px;
  margin: 30px auto;
`;
const Links = styled(Link)`
  text-decoration: none;
  color: blue;
  font-size: 13px;
  font-weight: 500;
`;
const ImgContainer = styled.div`
  width: 35px;

  height: 35px; ;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const RightContainer = styled.div`
  display: flex;
  font-size: 15px;
  user-select: none;

  align-items: center;

  gap: 10px;
`;

const Container = styled.div`
  margin-top: 80px;
  position: relative;
`;
const Header1 = styled.div`
  width: 90%;
  display: flex;
  gap: 10px;
  margin: auto;
  align-items: center;
  justify-content: space-between;
`;

const IConButton = styled(IconButton)`
  && {
    position: absolute;
    left: 30px;
    top: 50%;
  }
`;

const IConButton2 = styled(IconButton)`
  && {
    position: absolute;
    right: 30px;
    top: 50%;
  }
`;
