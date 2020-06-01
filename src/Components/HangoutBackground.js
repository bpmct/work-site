import React from "react";
import { ImageBackground, Dimensions } from "react-native";

const HangoutBackground = (props) => {
  let useImage, actualWidth, actualHeight;

  if (props.image == "largeHeader") {
    actualWidth = 1080;
    actualHeight = 2582;
    useImage = require("../Images/background_large_header.png");
  } else if (props.image == "onboarding") {
    actualWidth = 1080;
    actualHeight = 1978;
    useImage = require("../Images/background_onboarding.png");
  } else {
    actualWidth = 1080;
    actualHeight = 1936;
    useImage = require("../Images/background.png");
  }
  const win = Dimensions.get("window");
  const ratio = win.width / actualWidth;

  return (
    <ImageBackground
      source={useImage}
      style={{
        width: win.width,
        height: actualHeight * ratio,
        position: "absolute",
      }}
    >
      {props.children}
    </ImageBackground>
  );
};
export default HangoutBackground;
