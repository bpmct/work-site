import React from "react";
import { View, Image, Dimensions } from "react-native";
const window = Dimensions.get("window");
import styled from "styled-components";

// const BackgroundImage = styled.View`
//   backgroundImage: url("../Images/Welcome.png");
//   backgroundPosition: no-repeat;
//   backgroundSize: cover;
//   height: 100%;
// `;

function InitialPage() {
  return (
    <View>
      <Image
        style={{ width: window.width, height: window.height }}
        opacity={1}
        source={require("../Images/Welcome.png")}
      />
    </View>
  );
}

export default InitialPage;
