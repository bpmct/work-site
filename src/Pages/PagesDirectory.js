import React, { Component } from "react";
import { View, Image, Dimensions, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const window = Dimensions.get("window");
import styled from "styled-components/native";

// const BackgroundImage = styled.View`
//   backgroundImage: url("../Images/Welcome.png");
//   backgroundPosition: no-repeat;
//   backgroundSize: cover;
//   height: 100%;
// `;

const DevBox = styled.View`
  border: 1px solid red;
  position: absolute;
  width: 100%;
  height: 25%;
  top: 0;
  left: 0;
`;

const DevText = styled.Text`
  font-size: 12px;
  z-index: 10;
  color: red;
`;

class PagesDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      db: {},
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <View>
        <Button
          title="Go to Login Page"
          color="orange"
          onPress={() => this.props.navigation.navigate("Login")}
        />
        <Button
          title="Go to Local Login Page"
          color="orange"
          onPress={() => {
            this.props.navigation.navigate("LocalLogin");
          }}
        />
        <Button
          title="Go to Enable Locations Page"
          color="orange"
          onPress={() => this.props.navigation.navigate("EnableLocationScreen")}
        />
        <Button
          title="Go to Enable Notification Page"
          color="orange"
          onPress={() =>
            this.props.navigation.navigate("EnableNotificationScreen")
          }
        />
        <Button
          title="Go to Search Page"
          color="orange"
          onPress={() => this.props.navigation.navigate("Search")}
        />
        <Button
          title="Go to Schedule Page"
          color="orange"
          onPress={() => this.props.navigation.navigate("Schedule")}
        />
        <Button
          title="Go to People Page"
          color="orange"
          onPress={() => this.props.navigation.navigate("People")}
        />
        <Button
          title="Go to Individual Profile"
          color="orange"
          onPress={() => this.props.navigation.navigate("IndividualProfile")}
        />
        <Button
          title="Go to Feed"
          color="orange"
          onPress={() => this.props.navigation.navigate("Feed")}
        />
        <Button
          title="Go to Messages Page"
          color="orange"
          onPress={() => this.props.navigation.navigate('MessageFromUserToUser')}
        />
        <Button
          title="Go to Chat Page"
          color="orange"
          onPress={() => this.props.navigation.navigate("Chats")}
        />
        <Button
          title="Go to Settings Page"
          color="orange"
          onPress={() => this.props.navigation.navigate("Settings")}
        />
        <Button
          title="Go to Tests Page"
          color="orange"
          onPress={() => this.props.navigation.navigate("Tests")}
        />
        <Image
          style={{ width: window.width, height: window.height }}
          opacity={1}
          source={require("../Images/background.png")}
        />
      </View>
    );
  }
}

export default PagesDirectory;
