import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import BackgroundRemovebgPrImage from 'src/assets/images/Homepage_Background_removebg_preview_1.png';
import HomePageVentureVineImage from 'src/assets/images/Homepage_image_2023_03_01_225923788_removebg_preview_1.png';
import BackGroundImage from 'src/assets/images/UserRegisterPagewoimage_image_5.png'
import Image202303012259237Image from 'src/assets/images/Homepage_image_2023_03_01_225923788_removebg_preview_1.png';
import { styled } from '@mui/material/styles';
import ButtonPrimary from "./ButtonPrimary";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const myStyle = {
  backgroundColor: 'rgba(0, 118, 190, 1)',
  height: '100vh'
};

const Content = {
  position: `relative`
};

// const background={
//   backgroundImage: {url: 'src/assets/images/UserRegisterPagewoimage_image_5.png'},
//   height: '100vh'
// }
// Check on how to modify the background and ad background image

const ButtonPrimary1 = styled(ButtonPrimary)(({ theme }) => ({
}));

const Title = {
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(139, 217, 199, 1)`,
  fontStyle: `normal`,
  fontFamily: `Quicksand`,
  fontWeight: `700`,
  letterSpacing: `NaNpx`,
  textDecoration: `none`,
  textTransform: `none`,
  textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  fontSize: '3em'
};

const Title2 = {
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(139, 217, 199, 1)`,
  fontStyle: `normal`,
  fontFamily: `Quicksand`,
  fontWeight: `700`,
  letterSpacing: `NaNpx`,
  textDecoration: `none`,
  textTransform: `none`,
  textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  fontSize: '2em'
};
const BackgroundRemovebgPr = styled('img')({});

const HomePageVentureVine = styled('img')({});

const BackGround = styled('img')({});


function Homepage(props) {

  return (
    <div style={myStyle}>
    <div className="container">
    <div className="row">
      <div className="col">
        <div style={Content} className="container">
          <div className="row py-1">
            <HomePageVentureVine
              src={HomePageVentureVineImage}
              loading="lazy"
              alt={'HomePage-VentureVine-preview 1'}
            />
          </div>
          <div className="row p-1" style={Title}>{`Cultivating \nCreativity: `}</div>
          <div className="row p-1" style={Title2}>{`Helping Start-ups \nThrive `}</div>
          <div className="row p-4">
            <div className="col">
            <ButtonPrimary endPoint={'landing'} title={"Lets Venture"} />
            {/* <Button variant="contained" endPoint={'landing'} title={"Lets Venture"}>Let's Venture</Button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <BackgroundRemovebgPr
          src={BackgroundRemovebgPrImage}
          loading="lazy"
          alt={'Background-removebg-preview 1'}
        />
      </div>
      </div>
    </div>
    </div>
  );
}

export default Homepage;
