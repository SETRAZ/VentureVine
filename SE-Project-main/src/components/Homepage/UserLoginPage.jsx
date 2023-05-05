import React from 'react';
import Image202303012259237Image from 'src/assets/images/UserRegisterPagewoimage_image_2023_03_01_225923788_removebg_preview_1.png';
import Image5Image from 'src/assets/images/UserRegisterPagewoimage_image_5.png';
import Image202303012246016Image from 'src/assets/images/UserRegisterPagewoimage_image_2023_03_01_224601648_removebg_preview_2.png';
import VectorImage from 'src/assets/images/UserRegisterPagewoimage_Vector.png';
import Vector1Image from 'src/assets/images/UserRegisterPagewoimage_Vector_1.png';
import Vector2Image from 'src/assets/images/UserRegisterPagewoimage_Vector_2.png';
import Vector3Image from 'src/assets/images/UserRegisterPagewoimage_Vector_3.png';
import { styled } from '@mui/material/styles';
import BackgroundRemovebgPrImage from 'src/assets/images/UserRegisterPagewoimage_image_5.png';
import ButtonPrimary from './ButtonPrimary';
import { Button } from '@mui/material';

 const Background = {
   backgroundColor: `rgba(0, 118, 190, 1)`,
   width: `100%`,
   height: `100%`,
   position: `relative`,
   backgroundImage: `url(${BackgroundRemovebgPrImage})`,
   backgroundPosition: `center`,
   backgroundSize: `cover`,
   backgroundRepeat: `no-repeat`,
 };

const InputField = {
  borderRadius: "5px",
  borderStyle: "hidden",
  fontFamily: "Arial",
  color: "grey",
  width: "50%",
  height: "2.7em"
}
const LabelField = {
  color: "white",
  padding: "0em 0em 1em 0em",
  margin: "0px",
  fontFamily: "Arial"
}

 const Image202303012246016 = styled('img')({
   objectFit: `cover`,
 });

 const WelcomeToVentureVine = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `white`,
  fontStyle: `normal`,
  fontFamily: `Quicksand`,
  fontWeight: `lighter`,
  fontSize: `1.5em`
});

 const AlreadyHaveAnAccount = styled('div')({
   textAlign: `left`,
   whiteSpace: `pre-wrap`,
   fontSynthesis: `none`,
   color: `rgba(255, 255, 255, 1)`,
   fontStyle: `normal`,
   fontFamily: `Inter`,
   fontWeight: `400`,
   fontSize: `16px`,
   textDecoration: `none`,
   textTransform: `none`,
   margin: `0px`,
 });

 const Title2 = styled('div')({
   textAlign: `left`,
   whiteSpace: `pre-wrap`,
   fontSynthesis: `none`,
   color: `rgba(255, 255, 255, 1)`,
   fontStyle: `normal`,
   fontFamily: `Quicksand`,
   fontWeight: `700`,
   fontSize: `2.5em`,
   letterSpacing: `0px`,
   textDecoration: `none`,
   textTransform: `none`,
   textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`
 });

 const Login = {
   textAlign: `left`,
   fontSynthesis: `none`,
   color: `rgba(139, 217, 199, 1)`,
   fontStyle: `normal`,
   fontFamily: `Inter`,
   fontWeight: `700`,
   fontSize: `16px`,
   textTransform: `none`,
 };

 const ButtonPrimaryStyle ={
    margin: "0em 0em 0em 3em"
 }

 const BackgroundImage ={
   padding: "11em 0em 0em 0em",
 }

 function UserRegisterPageWOImage(props) {
   return (
     <div  style={Background}>
     <div className="container" style={{paddingBottom: '5%'}}>
     <div className="row">
      <div className="col container">
        <div className="row">
          <Image202303012246016
            src={Image202303012246016Image}
            loading="lazy"
            alt={'image_2023-03-01_224601648-removebg-preview 2'}
          />
        </div>
        <div className="row" style={{marginLeft: '7%'}}>
        <form>
          <div className="row p-5">
            <label for="exampleInputEmail1" class="form-label" style={LabelField}>Email</label>
            <input type="text" id="exampleInputEmail1" style={InputField} />
            </div>
            <div className="row p-5">
              <label for="exampleInputPassword1" class="form-label" style={LabelField}>Your Password</label>
              <input type="text" style={InputField} id="exampleInputPassword1" />
            </div>
            <div className="row p-4" style={ButtonPrimaryStyle}>
              <ButtonPrimary title={"Sign-In"} endPoint={'start-up-landing-page'}></ButtonPrimary>
            </div>
          </form>
        </div>
        </div>
        <div className="col" style={BackgroundImage}>
          <Title2>{`A one-stop platform for donors and investors`}</Title2>
          <WelcomeToVentureVine>
            {`\nVentureVine offers a diverse portfolio of investment opportunities, ranging from early-stage seed funding to late-stage growth capital. Our investment strategy is focused on identifying startups with strong leadership, proven market demand, and a clear path to profitability. By investing in VentureVine, you gain access to high-growth potential startups across a range of industries, including healthcare, fintech, artificial intelligence, and more.`}
          </WelcomeToVentureVine>
        </div>
    </div>
     </div>
     </div>
   );
 }

 export default UserRegisterPageWOImage;
