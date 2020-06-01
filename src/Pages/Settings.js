import React from "react";
import { View, Image, Dimensions, Button } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const window = Dimensions.get("window");
import styled from "styled-components";

// const BackgroundImage = styled.View`
//   backgroundImage: url("../Images/Welcome.png");
//   backgroundPosition: no-repeat;
//   backgroundSize: cover;
//   height: 100%;
// `;

function Settings() {
  return (
    <View>
      <Image
        style={{ width: window.width, height: window.height }}
        opacity={1}
        source={require("../Images/background.png")}
      />
    </View>
  );
}

export default Settings;
