import React from "react";
import { View, Dimensions, ImageBackground, Text } from "react-native";
import Constants from "expo-constants";
const window = Dimensions.get("window");
import styled from "styled-components";
import UserPrompt from "../Components/UserPrompt";
import HangoutBackground from "../Components/HangoutBackground";

class EnableLocationScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  enableLocationAction = (e) => {
    // This is the function that runs when the button is clicked

    // For now, we will just navigate to the next page
    this.props.navigation.navigate("EnableNotificationScreen");
  };

  render() {
    return (
      <View>
        <HangoutBackground>
          <UserPrompt
            header="Let's find friends!"
            text="Location needs to be enabled in order to use Hangout"
            buttonText="Enable Location"
            buttonAction={this.enableLocationAction}
          />
        </HangoutBackground>
      </View>
    );
  }
}

export default EnableLocationScreen;
