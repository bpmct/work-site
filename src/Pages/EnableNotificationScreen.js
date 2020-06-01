import React from "react";
import { View, Dimensions, ImageBackground, Text } from "react-native";
import Constants from "expo-constants";
const window = Dimensions.get("window");
import styled from "styled-components";
import UserPrompt from "../Components/UserPrompt";
import HangoutBackground from "../Components/HangoutBackground";

class EnableNotificationScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  enableNotificationsAction = (e) => {
    // This is the function that runs when the button is clicked

    // For now, we will just navigate to the next page
    this.props.navigation.navigate("Search");
  };

  render() {
    return (
      <View>
        <HangoutBackground>
          <UserPrompt
            header="Get notified!"
            text="Get notifications about messages and friend requests"
            buttonText="Enable Notifications"
            buttonAction={this.enableNotificationsAction}
          />
        </HangoutBackground>
      </View>
    );
  }
}

export default EnableNotificationScreen;
