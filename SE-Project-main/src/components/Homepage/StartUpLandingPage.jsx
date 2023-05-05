/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';
import Homepage from './Homepage';
import Navbar from './Navbar';


const StartUpLandingPage1 = styled('div')({
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `100vh`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const PitchDescription = {
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Quicksand`,
  fontWeight: `400`,
  fontSize: `1.5em`,
  padding: "3em"
};

const Name = {
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Montserrat`,
  fontWeight: `400`,
  fontSize: `1.5em`,
  padding: "3em"
};

const LabelField = {
  display: "block",
  fontFamily: "Arial",
  padding: "0em 0em 0.5em 0em"
}

function StartUpLandingPage(props) {
  return (
    <StartUpLandingPage1 className={props.className}>
      <Navbar />
      <div className="container">
      <div className="row">
      <div className="col">
      <div style={Name}>
        <label for="NameField" class="form-label" style={LabelField}>Name:</label>
        <input type="text" id="NameField"/>
      </div>
      <div style={Name}>
        <label for="NameField" class="form-label" style={LabelField}>Details:</label>
        <input type="text" id="NameField"/>
      </div>
      </div>
      <div className="col">
      <div style={PitchDescription}>
        <label for="NameField" class="form-label" style={LabelField}>Pitch/Description:</label>
        <textarea type="text" id="NameField" rows="8" cols="50" />
      </div>
      </div>
      </div>
      </div>
    </StartUpLandingPage1>
  );
}

export default StartUpLandingPage;