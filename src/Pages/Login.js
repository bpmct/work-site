import React from "react";
import { View, Dimensions, ImageBackground, Text } from "react-native";
import Constants from "expo-constants";
const window = Dimensions.get("window");
import styled from "styled-components/native";
import UserPrompt from "../Components/UserPrompt";
import HangoutBackground from "../Components/HangoutBackground";

class EnableLocationScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  loginAction = (e) => {
    // This is the function that runs when the button is clicked

    // For now, we will just navigate to the next page
    this.props.navigation.navigate("LocalLogin");
  };

  render() {
    return (
      <View>
        <HangoutBackground>
          <UserPrompt
            header="Let's find friends!"
            text="Login"
            buttonText="Login"
            buttonAction={this.loginAction}
          />
        </HangoutBackground>
      </View>
    );
  }
}

export default EnableLocationScreen;
