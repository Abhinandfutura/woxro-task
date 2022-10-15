import React, { useEffect, useReducer, useState } from "react";
import SubHeader from "../Components/SubHeader";
import axios from "axios";
import styled from "styled-components/macro";
import { FormControl, MenuItem, Select } from "@mui/material";
import Button from "@mui/material/Button";
import SubMenu from "../Components/SubMenu";
import CompanyDetails from "../Components/CompanyDetails";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case "FETCH_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
function Home() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  const [items1, setItems1] = useState([]);

  const [unique, setUnique] = useState([]);
  let datas = [];
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  let filteredData = [];

  let uniqueNames = [];
  const images = [
    "https://xenticebucket21.s3.ap-south-1.amazonaws.com/adv/T8KFRAQZrEa0ptImqcxSlURKmEMp2rzggcARfhoD.png",
    "https://xenticebucket21.s3.ap-south-1.amazonaws.com/adv/8OHYcD4EA5hpJqQgtQmNVfLrO0YXspuEDfseTmXX.png",
  ];
  const [currentimage, setCurrentImage] = useState(0);
  const [isCallSuper, setIsCalSuper] = useState(false);
  const formatedData = (id) => {
    const formatedItems = products.filter((i) => i.id === id);
    // console.log("-------", formatedItems);
    if (formatedItems) {
      const transactionType = JSON.parse(formatedItems[0]["transactionType"]);
      const propertyType = JSON.parse(formatedItems[0]["propertyType"]);
      const location = JSON.parse(formatedItems[0]["location"]);
      const images = JSON.parse(formatedItems[0]["images"]);

      const details = JSON.parse(formatedItems[0]["details"]);
      const priceRange = JSON.parse(formatedItems[0]["priceRange"]);
      if (
        formatedItems &&
        propertyType &&
        transactionType &&
        location &&
        details &&
        priceRange
      ) {
        let newParseData = {
          ...id,
          ...transactionType,
          ...propertyType,
          ...location,
          ...images,

          ...details,
          ...priceRange,
        };

        setIsCalSuper(true);
        datas.push(newParseData);
      }
    }
    return datas;
  };

  const filteredNamesArray = async (item) => {
    let filData = await datas.filter((i) => i.name === item);
    if (filData) {
      filteredData.push(filData);
    }

    setItems1(filteredData);
  };

  useEffect(() => {
    const fetch = async () => {
      dispatch({ type: "FETCH_REQUEST" });

      try {
        const result = await axios.get(
          "https://api.xentice.com/api/postadSelect"
        );
        // console.log("..........", result.data);
        setIsCalSuper(true);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
        setIsCalSuper(false);
      }
    };
    fetch();

    if (products.length > 0) {
      let item = [];
      for (let i = 0; i < products.length - 1; i++) {
        item = formatedData(products[i].id);
      }

      if (item.length > 0) {
        const names = item.map((i) => {
          return i.name;
        });
        uniqueNames = [...new Set(names)];
        setUnique(uniqueNames);

        if (uniqueNames) {
          setIsCalSuper(true);
          //filter with unique names
          for (let j = 0; j < uniqueNames.length; j++) {
            filteredNamesArray(uniqueNames[j]);
          }
        }
      }
    }

    if (images.length) {
      const intervalId = setInterval(() => {
        setCurrentImage(images[Math.floor(Math.random() * images.length)]);
      }, 3000);
      return () => clearInterval(intervalId);
    }

    setIsCalSuper(false);
  }, [isCallSuper]);

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
      {unique.map((i) =>
        i === "Industrial Land" ? (
          <CompanyDetails
            names="Industrial Land"
            setL
            filteredDatas={items1}
            icon="https://www.xentice.com/static/media/land_lease.7ccc6444.png"
          />
        ) : i === "Commercial Office" ? (
          <CompanyDetails
            names="Commercial Office"
            filteredDatas={items1}
            icon="https://www.xentice.com/static/media/commercial_office.b0884622.png"
          />
        ) : i === "Commercial Land" ? (
          <CompanyDetails
            names="Commercial Land"
            filteredDatas={items1}
            icon="https://www.xentice.com/static/media/commercial_land.def51047.png"
          />
        ) : i === "Commercial Building" ? (
          <CompanyDetails
            names="Commercial Building"
            filteredDatas={items1}
            icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAB3ZSURBVHic7d170G5XXR/w7wkHSELKTUhAK4kJN9sCgikFhkpqxVKotdw6tgpCRWovcqlTKaAMdXoB1FZmWqjTmc4IiIpVKaU6lKuEu46lICKCiYAIAZoQSA4Jl3P6xz6hacg572WvZ+299u/zmVmTP/K+z1lrX3/vfvZa3wQAAAAAAAAAAAAAAAAAAABYiyNLdwB27Owk90ty3yR/Ick3J7lrknNO/r8kOZbkmiSfTPLxJH+Q5H1J3pvki537CwAc0j2SPCfJW5Jcl+TEIdt1Sd6c5NlJ7t5zAADA/pyd5IeT/G4Of8Pfq/1OkqckOavTmACAUzgnyXOT/J/s7sZ/0/bZTE8YbtNhfADAjRxJ8kNJrki/G/9N26eSPDnepQGALu6R6fv9pW78N21vjncEAGBnjiR5apIvZPmb/k3bsSTPSnLGzkYPAAXdNclrs/yNfq/2+kxTDQGAmR6fvi/5zW2fy/SkAgA4hDsn+bUsf0M/bPsfmZ5cAAD79Mgkf5blb+Jz2xVJHt142wDA5tw2yc9n+Rt36/aqJHdsuJ0AYDO+K8nHsvzNelfto0n+erOtBQCDOyvJC5J8NcvfpHfdjmd6wmEVQQBK+ytJ/jDL35h7tz9O8lcbbD8AGMotkzw/yVey/M14qfaVTE8+bj1vUwIcnDXMWcJ9k7z85H97uT7TIj3vSPLuTOv4X3ny/90xyV2SPCjJQzK9i9DzpvzeJE9M8v6O/yYAdHOLJM/OdDPu9Vf2R5P8aA72Bv43JHla+r6QeF2mpYRvcYB+AsDq3SPTX9+9bqjHkjwv0wuGh3X2yc841rHfb49gIQA2YIkAn/ckuXfDMVyU5NKO/RcsBMDQegf4fDnTS3W33MFYjma6Kff8+kKwEADD6R3g84Ek395hXPdJ8r86jkuwEABDuHOSX0+/G+QNC+uc3WNwJ52Z6UlDzymMgoUAWK3eAT6XJ3lYl5HdvAcn+aOb6deummAhAFZliQCflyU5p8fg9nBWkhdnehLRa+yChQBYXO8An08m+Z4uIzuY707y8fTbDoKFAFjEEgE+r8q0SM9a3S59n4QIFgKgq94BPlcl+YEuI2vjcUk+k37bR7AQADu1RIDPbyX5xg5ja+3cJK9Ov+0kWAiAnfhLSX4v/W5oV2cb898fnyl0qNd2e3+S+3cZGQCbdotMK+Bdl343sbdlW+vhn5/kjem3/b6U6UmNYCEADuXCJL+dfjeuL2a7a+DfkIlwTfptz3cmuWePwQGwDVsI8FkrwUIArNKWAnzWSrAQAKuy1QCftRIsBMCiKgT4rJVgIQAWUS3AZ60ECwHQRe9la09kPQE+ayVYCICdEuCzboKFAGhKgM84BAsB0IQAnzEJFgLgUAT4jE+wEAAHIsBnWwQLAXBaAny26/wIFgLgZlyY5K3pd4PYcoDPWgkWAuBrBPjUI1gIoDgBPnUJFgIoSoAPiWAhgDLOTf8AnxfH1LA1EywEsHECfDgdwUIAGyPAh/0SLASwEQ9P34CYP03yiC4jW87fONm27BFJPpF+x41gIYBGBPi0d+NtekMIzpafcggWAhjMg5J8KP0u3BUCfE61TS/P9t9zECwEsHICfNrbzzatMNNBsBDASgnwae+gc+R/P9tf60CwEMBKCPBpb84qeRVWOzw/goUAFiXAp70L02ad/Hdn23kHgoUAFrDExdcNTcF0cwQLAXRy10zLqPa64FZ4pH237PaR9tsy3Si3SrAQwI4J8Gmv10ttXpps3wQLAZsnwKe9c5P8Rvpt0xva1qdNChYCaESAT3uPTd+FbW7arkry/Tsf5bIECwEckgCf9pbYpqdrW186+ewIFgI4kO9K8rH0u2h+Msn3dBnZcnqHIh1k2/+tHY57Db47fbe9YCFgOAJ82lsi3vagTbDQ7rapYCFg9QT4tNd7m85tl2X7718IFgI4SYBPe0ts01btq6kxA0OwEFCaAJ/2es9F31UTLNS+CRYCFifAp70lVqPbdauwCuP5Sd6UfttUsBCwmHtmCjXpdcE7luTp2fba6ffOlFXQc5se6/jvvSvJvZptrfU5I8kz0nebvj3bLoiBFRHg096S27RVauB+m2Ch9k2wELBzd0vyhvS7sFV4dLzrAJ/9bNMlvnYQLNS+CRYCdqL3i04CfPpv094vHnqZs30TLAQ0I8Cnvd4BPgfZpktMPfzNbHs6p2AhYDgCfNrrvYDMYbdp78WHroxgodZNsBBwYAJ82htxmy6x/PDWl3QWLASs1sMjwKe13gE+rbfpEv0XLNS2CRYCTkmAT3tb+gt6qRAcT4Xab1PBQsDXCPBp78HZ5jbt/Q6DYKH2TbAQIMBnByps096zGAQLtW+ChaAwAT7tVZtH33sdg99P8oAuI1uOYCFgZ25YoUyATzuVV9Jbw0qGW3N+BAsBjV2Y5K3pd2GpsO67tfTlQ+zCEtv0nZlCvoANcYFuzzb9eoqh9gQLAYcmwKe98+Ox96lU/jpkVwQLAQe2trCZLVjixbcRt2m1FyJ7ECwE7EmAT3trDvBZK8FC7QkWAk7pURHg09ooAT5rJVioPcFCwNeMGDazdpa/bWeppaa3HIIjWAgQ4LMDvcNaKgTgJIKFdkGwEBQkwKe9LQX4rJUnK+0JFoJCBPi01/t71auy/e+qT+exESzUmmAh2LAKYTO92abLESzUnmAh2CABPu2Zr74OgoXaEywEG7DU6moCfNpv0y2vWDeXYKH2zo9gIRiWAJ/2eq+vXmGbtiJjoT3BQjAYF8L2bNNx9A4WqhCCc1Gmp1C2KayYAJ/2zo/Hy6PxNU17goVgxQT4tCfAZ2z3iZdfWxMsBCsibKY9U8y2Q7BQe4KFYAUem+TT6XcSXh4LorRuFRaZWYPeC2B9OtP5uWWChWABAnzas8zs9gkWak+wEHQkwKc9AT61CBZqT7AQ7JAAn/YE+NTliU97goVgBwT4tNf7+8srUzvAZ616v0dzWZLv6DKy5QgWggaEzbR36/R/g3nrb4WPzqyP9gQLwQwCfNoT4MPpCBZqT7AQHIBVzNqzTdkvwULtnR/BQrCnuyd5V/qdKMeSPD3TWvdbde9M6+r32qbXJnlatr1Nt+5Ipn14bfodN+9Kcq8eg1vIGUmekema02ubvj3Jt/QYHMz1dzK9fNfr5Nh62IwAH+bqnahZIQSnd7DQ1Zm+hoBVOiPJz6XfCfGlJD+R6bH4Vp2fvo8cr0/y3Gx7m1Z1NNO+7fn10RszfRWxVUeT/GSma1GP7Xk8yU9n24UVA7pVkl9OvwuLAJ/2rcKLXHgpdxd6v5T7i9n2uxYM5MxMU+56HPhfSfKibHuKzF2SvCb9LiamHdWzxBTSVyc5r8fgFnJmpr/Oey1w9to4Z1nYGUl+NX0O+Muz/bAZAT70JFiovZ4Lc/1KfB3Agl6c3R/kx5O8NNteevQOmR7r9boQH0/yklh6lOkYeEn6LiP98iS37zG4hZyT5D+lzzb9d53GBP+fH8zuD24BPrvZplsPdOHglgjn2vpx2Ovc3vpy56zMRZle7tnlQb31sJmlAnzEj3IqgoXa67FNv5Dknr0GRG1nZLcL0nwm03fhW/bQTMEfvS60Fb57pZ3ewUIfTvKQLiNbzuOz2/d73hnvA9DBP8zuDuKtB/icGQE+jOHcJL+efsepYKH57Sn9hkJFd8hu/jIwV9g2ZZ2sR9HerrbpFdn2y5Us7AVpf9C+KdOKd1vVe7WwE9n+Cmz01TtYqMKKlBckeXPab7t/1XEMFHLbtF3j/4upEeDznvS7cF6b5Eez7W3KMo5kOrZ6Bgu9MzWChb6Ydtvsymz7pUoW8mNpd5B+OMn9+na/qyUSw7Z+sWQd7pXpWFPUtvNtST6SdtvsGX27TwWtVgz7vUwvw2zVBRHgw7YtESz0hmz7a63zkrw3bbbVH3buOxt3cdocmB/JttcD98IUlQgWautOafeH1v07950N+5nMPyC/mOS+vTveya6n99y0VZgyxRhumeT5MbW1lb+YNl8dvrB3x9muD2T+AfnM7r3uY9cLfNy0VVg0hfE8JNOx2es8+HSSx3QZWX//PPO3z/u795pN+obMX672g9lefvUdkrwy/S54x5P8xwjwYb1uk+kYFSw0z60yP1HweLa9lDqdfG/mn6RP7t7r3RLgA6cmWGi+p2T+dvnb3XvN5vzLzDsIP58p+GYLesZ83tC2+BcO23f7TMdur/Nka0/Izs4U8jNnmzy/d6fZnldk3kH4yv5d3oklAny2+h0ndTwmgoUO65cz/48HmOVdmXcQjj5tR4APzCNY6HB+JPO2w9v7d5mt+dPMOwj/cv8uN/OATHPte124PpfkST0GBgt4UqZjvNf59L5Mq+yN6oGZN/6P9u8yWzN3YZsR30RdIsBn6yudQTId429Iv/Pq+iTPyZgrZZ6beWP/bP8uszXXZd5BONqJd1GSS9PvAnUsybMy5QdABUcyfTV4TfqdZ+/OeFkZt868MV/bv8tszdzvvkcpAJYK8Llnj8HBCt0zgoVO55aZN94v9+8yWzM3AviO/bt8YBdkN9ncp2ojP5aElo5mOhcEC329uV8BXNm/y2zNRzPvILy4f5cPRIAPLE+w0Nd7UOaN8bL+XWZr5p6UT+nf5X25S5L/nn4XnK9kmk44+tQk2JVbp/+U21dnvQmlT828sf1u/y6zNXMXo1jjQkACfGC9BAtNfiXzxvVL/bvM1jw/8w7CqzMta7kGt0vy8+l3YTl+8t87p8fgYEPOyvQ04Kvpd76+Kut5Z+k2mb8U8PO695rNeVzmn1g/1L3XX+8RST6RfheTj2cKRQEO7+HpG7z18UxhX0ub+/j/RKZrN8xyXuaH33w4y8UBLxHg87II8IFWbp/pnOp1/i4dLHSrzM8dOZ5pFgHM9v7MP6me1b3XyYMzP1db07Sa7bIk35H+nn3I/t64vbd7r9msn838A/JY+q3LfWaSn07f7w81Tdte6z175/5psxjZizr1lwIuTpuT6Y+T3HXHfe0d4KNp2vZbj2Chb0pyeaP+3n/HfaWYVjfVDyT55h30b4kAH03T6rRdruB5fpIPNurn+3bQP4r7Z2l3Iv1Zkoc17Nu9k7ynYf80TdNO1VpnePy1JJ9s2L9nNOwbJEn+XKZ4yVYH6VeTvDTzngbcOslz0zfAR9M07dok/yLTG/uH9eczXQNbvqv0mVh3hB35ibQ/ka5L8pIk9z1AP+6Y5OlJ/mQH/dE0TdtvuyzJP0lyh+zffTJd8+ZGrd9ce84B+kFxB43FvF2maXW7ml/6iSS/lWkN609mWqLzWKZ1+8/LlNr3HSfbnMoboKUvJXlLkksz/WFyRaZr2G0yXS/vmull6r+Z6S//Xbgi01cTn9/R57Mxh8nFfkKmRTkAWI8nJHnF0p1gHIcpAJLkjUm+s2VHADi0tya5JNPXALAvhy0AviXTY/q1BGcAVHVVpq8XLlu6I4zljEP+3uVJvi/T26sALON4kh+Imz+HcIsZv3tZpgUxHtaoLwAczE8l+c9Ld4IxzSkAkuS3k9w9B5vCB8B8r0jyzPjen0OaWwCcSPLfMr0TcL/53QFgH16V5InxNSwzzC0AkqkIeE2Se2Ra4AKA3fmlTN/7u/mzGkeSPCvrj+C9NMlFO9oGwJjuluQNWf76dLp2PFM08WFf3oade2SSK7P8yXLTdixTgeLkAW7OkSRPTXJNlr9e3bRdneTRuxs6tHNRktdn+ZPmhvb6tE3vArbrnlnf9evCnY4YduD7Mq3vv+TJo2oGDuPRWfba9YlM11AY1m2T/GSmoIolTiKAw1rimnVFkudlunbCJpyZ5IeTfCAKAGAMPa9VH8h0jTyzy8hgIRcmeXqSt2V6s1UBAKxRj5v+85N8e6fxwNccNgyopXOTfNvJdr9MxcHtb9TmVsNrGCMwprl/RFyX5HOZ3uL/XKYl1N97sv3vTI/7YREj3BznnoAjjBFYJ9cfNsuceAAoSAEAAAUpAACgIAUAABSkAACAghQAAFCQAgAACjq6dAfYPKsxzmMeObATngAAQEEKAAAoSAEAAAUpAACgIAUAABSkAACAghQAAFCQAgAAClIAAEBBCgAAKEgBAAAFKQAAoCAFAAAUpAAAgIIUAABQ0NGlOwB7OLJ0B2Y6sXQHWJT9P47PJ3lokvcv3ZFePAEAgOS2SV6T5LylO9KLAgAAJhckeW2S2yzcjy4UAADw/1yc5BdS4P64+QECwAE9Nsm/WboTuzbCC1ZzX6IZYYxbVn3/VR//6LzEV9s/TvLSpTuxKyNcXFxAx1Z9/1Uf/+gUALV9Ocmjkrx+6Y7swggXFxfQsVXff9XHPzoFAJudHugdAAA4tc1OD1QAAMDpXZBpeuDZC/ejKQUAAOzt4iQvy4bum5sZCADs2KamB47wgpGXqMZWff9VH//ovATIzdnE9MARLi4uoGOrvv+qj390CgBuziamB45wcXEBHVv1/Vd9/KNTAHAqw08P9A4AABzcZqcHrsmJmY1lVd9/1cc/OvtvWy5Jcn3m79cbt9/JxqYHrokTcGzV91/18Y/O/tuef5C2BcCJJP81nqjvhBNwbNX3X/Xxj87+26YXpn0R8IKuIyjCCTi26vuv+vhHZ/9t05Ekr0z7IuBHeg6iAifg2Krvv+rjH539t11nJXlH2hYAX0ry8J6D2Don4Niq77/q4x+d/bdtd0rykbQtAq5Ocp+eg9gyJ+DYqu+/6uMfnf23fd+a5Kq0LQIuj+mBTTgBx1Z9/1Uf/+jsvxouiemBq+QEHFv1/Vd9/KOz/+owPXCFnIBjq77/qo9/dPZfLbuYHvhvu45gY5yAY6u+/6qPf3T2Xy2mB66ME3Bs1fdf9fGPzv6rx/TAFXECjq36/qs+/tHZfzWZHrgSTsCxVd9/1cc/OvuvLtMDV8AJOLbq+6/6+Edn/9V2SUwPXJQTcGzV91/18Y/O/sP0wAU5AcdWff9VH//o7D8S0wMX4wQcW/X9V338o7P/SEwPXIwTcGzV91/18Y/O/uMGpgcuwAk4tur7r/r4R2f/cWOmB3bmBBxb9f1Xffyjs/+4KdMDO3ICjq36/qs+/tHZf9ycS2J6YBdOwLFV33/Vxz86+49TMT2wAyfg2Krvv+rjH539x+mYHrhjTsCxVd9/1cc/OvuP0zE9cMecgGOrvv+qj3909h97OSvJO9O2ADA98CQn4Niq77/q4x+d/cd+mB64I07AsVXff9XHPzr7j/0yPXAHnIBjq77/qo9/dPYfB3FJTA9sygk4tur7r/r4R2f/cVC7mB74qyk6PdAJOLbq+6/6+Edn/3EYpgc24gQcW/X9V338o7P/OIwhpgceaflhO+IkAkY1wjWW3TgryZuSPKjhZ345yaOSvL7Fh41wcCoAgFGNcI1ld+6U5F1JLmr4mZ9P8tAk75/7QSMcnAoAYFQjXGPZrW9N8o4kt2/4mX+S6cnCFXM+pORbhQDQyQeTPDrT6n6tXJDktZk5PVABAAC79ZYk/6jxZ16c5Bcy4z6uAACA3fsvSV7U+DMfl+RfH/aXR/h+yjsAwKhGuMbSz5Ekv5jk7zX+3CcmeflhOrN2CgBgVCNcY+nrrExfCTyw4Wdec/LzPniQXxrh4FQAAKMa4RpLf7uYHvieJA9J8tX9/oJ3AACgr88m+d5Mkb+tPDDJPz3IL4xQnXoCAIxqhGssy7kkyeuS3KrR512V6anCVfv5YU8AAGAZb8kB/2rfwx2SPG2/PzxCdeoJADCqEa6xLO+FSX680Wd9Jsndkly31w96AgAAy3p2kl9r9Fl3TvKY/fygAgAAlnU8yRMyzQxo4e/u54dGeDzlKwBgVCNcY1mP8zIVARfM/JwvZnoScO3cDi3txMy2NP1flv4vS//hYO6b6QY+99j7zr3+IV8BAMB6vC/Jcxp8zkP2+gEFAACsy39I8rGZn3GfvX5AAQAA6/LlJC+b+Rl7LjOsAACA9fmfM3//m/b6AQUAAKzPH838/XP2+gEFAACsz77W8z+Ns/b6AQUAAKzPuTN/f881ABQAALA+e77Et4cv7PUDCgAAWJ9Hzfz9T+31AwoAAFiXs5L8/Zmf8aG9fkABAADr8szsYxrfHj641w8oAABgPR6S5HkNPufSvX5ghKSquYEaS49R/5el/8vSf9i/hyb5jSR3mvk5x5LcMcn1p/shTwAAYFlnJ3lukjdm/s0/SV6XPW7+SXK0wT8EAOzfLZLcJck9kjwyyfcn+caGn//y/fzQCI+nRn8Ep//L0v9lVe8/9PapJOcn+dJeP+grAADYjp/NPm7+yfLV9X5U/wtC/+fR/2VV7z/09OlMKwhes58f9gQAALbhWdnnzT9Zvrrej+p/Qej/PPq/rOr9h14uTfKwHOCYXfrk2o/qFxD9n0f/l1W9/9DD55I8IMnlB/klXwEAwLiOJ/nBHPDmnygAAGBkP5bkNYf5RQUAAIzpp5L83GF/2UqAADCWE0l+PMnPzPkQBQAAjOOqJE/KIR/735gCAADGcGmSJyT5aIsP8w4AAKzbp5M8OdM8/yY3/8QTAABYq88keUmSf5/k6tYfrgAAgPU4luR1SV6W5Dezz2Cfw1AAAEB/V2dat/9TST6U5A8yfcf/7iTX9+jA0sts7oelOIFRjXCN5dRGX8r6tLwECAAFKQAAoCAFAAAUpAAAgIIUAABQkAIAAApSAABAQQoAAChIAQAABSkAAKAgBQAAFKQAAICCFAAAUJACAAAKUgAAQEFHl+5AB6vOYwZWbW4ePKyWJwAAUJACAAAKUgAAQEEKAAAoSAEAAAUpAACgIAUAABSkAACAghQAAFCQAgAAClIAAEBBCgAAKEgBAAAFKQAAoCAFAAAUdHTpDgxgbh74kSa9ODx55syx9PFbnfN3HsfvaXgCAAAFKQAAoCAFAAAUpAAAgIIUAABQkAIAAApSAABAQQoAAChIAQAABSkAAKAgBQAAFKQAAICCFAAAUJACAAAKUgAAQEFHl+7AAKrnSY8+/rl56tXHz9gcv5ySJwAAUJACAAAKUgAAQEEKAAAoSAEAAAUpAACgIAUAABSkAACAghQAAFCQAgAAClIAAEBBCgAAKEgBAAAFKQAAoCAFAAAUdHTpDgygep48ABvkCQAAFKQAAICCFAAAUJACAAAKUgAAQEEKAAAoSAEAAAUpAACgIAUAABSkAACAghQAAFCQAgAAClIAAEBBCgAAKEgBAAAFHV26AwM4snQHFnZi6Q4srPr4GZvjl1PyBAAAClIAAEBBCgAAKEgBAAAFKQAAoCAFAAAUpAAAgIIUAABQkAIAAApSAABAQQoAAChIAQAABSkAAKAgBQAAFKQAAICCji7dgQHMzdM+0qQX4/77wOE5f9kZTwAAoCAFAAAUpAAAgIIUAABQkAIAAApSAABAQQoAAChIAQAABSkAAKAgBQAAFKQAAICCFAAAUJACAAAKUgAAQEEKAAAo6OjSHRhA9TzuE0t3YGHV9/9c1Y8fWC1PAACgIAUAABSkAACAghQAAFCQAgAAClIAAEBBCgAAKEgBAAAFKQAAoCAFAAAUpAAAgIIUAABQkAIAAApSAABAQQoAAChoP1nn8ryZYz/H2C7NPX6X7v/oRt/+rn+M7LTnjycAAFCQAgAAClIAAEBBCgAAKEgBAAAFKQAAoCAFAAAUpAAAgIIUAABQkAIAAApSAABAQQoAAChIAQAABSkAAKAgBQAAFHS0w7+xdJ4388hDh8Nz/WOOnV5/PQEAgIIUAABQkAIAAApSAABAQQoAAChIAQAABSkAAKAgBQAAFKQAAICCFAAAUJACAAAKUgAAQEEKAAAoSAEAAAUpAACgoKNLd2Af5uYhz83jrv7vA8tZ+vz37y/77++UJwAAUJACAAAKUgAAQEEKAAAoSAEAAAUpAACgIAUAABSkAACAghQAAFCQAgAAClIAAEBBCgAAKEgBAAAFKQAAoCAFAAAUdHTpDuzD0nnK1f99YDlLn//+/Q3zBAAAClIAAEBBCgAAKEgBAAAFKQAAoCAFAAAUpAAAgIIUAABQkAIAAApSAABAQQoAAChIAQAABSkAAKAgBQAAFKQAAICC9pN1fGLnvQAAWjvtPd4TAAAoSAEAAAUpAACgIAUAABSkAACAghQAAFCQAgAAClIAAEBBCgAAKEgBAAAFKQAAoCAFAAAUpAAAgIIUAABQkAIAAAAAAAAAAAAAAAAAAAAAAAAW9H8Bv2NrU/chZekAAAAASUVORK5CYII="
          />
        ) : i === "Meeting Room" ? (
          <CompanyDetails
            names="Meeting Room"
            filteredDatas={items1}
            icon="https://www.xentice.com/static/media/meeting-room.0b5c79ff.png"
            isRemove={true}
          />
        ) : i === "Co-working Space" ? (
          <CompanyDetails
            names="Co-working Space"
            filteredDatas={items1}
            icon="https://www.xentice.com/static/media/coworking.ae2d86ad.png"
            isHide={true}
          />
        ) : i === "Commercial Shop" ? (
          <CompanyDetails
            names="Commercial Shop"
            filteredDatas={items1}
            icon="https://www.xentice.com/static/media/commercial_space.cabcda3f.png"
          />
        ) : i === "Industrial Building" ? (
          <CompanyDetails
            names="Industrial Building"
            filteredDatas={items1}
            icon="https://www.xentice.com/static/media/building_lease.54959134.png"
          />
        ) : i === "Private Office" ? (
          <CompanyDetails
            names="Private Office"
            filteredDatas={items1}
            icon="data:image/png;base64,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AABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoaEeSteoQAMBy2QEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANvD/Wo0oZYSSyEoAAAAASUVORK5CYII="
            isRemove={true}
          />
        ) : (
          ""
        )
      )}
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
  .MuiFormControl-root {
    width: 100%;
    min-width: 156px !important;
    margin: unset !important;
  }

  .MuiAutocomplete-root .MuiOutlinedInput-root .MuiAutocomplete-endAdornment {
    top: -1px !important;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: #d4d4d4 !important;
    border-width: 1px !important ;
    outline: unset !important;
  }

  div div div {
    padding: 9px;
  }
  .MuiAutocomplete-root
    .MuiOutlinedInput-root.MuiInputBase-sizeSmall
    .MuiAutocomplete-input {
    padding: 0px 4px 0px 6px;
  }

  em {
    font-style: normal !important;
    font-family: unset !important;
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
