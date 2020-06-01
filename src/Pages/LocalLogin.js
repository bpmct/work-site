import React, { Component } from "react";
import { View, Dimensions, ImageBackground, Text } from "react-native";
import Constants from "expo-constants";
const window = Dimensions.get("window");
import styled from "styled-components/native";
import LoginForm from "../Components/LoginForm";

import { db, findIDandPW } from "../../db/users";
import HangoutBackground from "../Components/HangoutBackground";

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

class LocalLogin extends Component {
  state = {
    id: "",
    password: "",
    isLoggedIn: false,
    db: {},
  };

  componentDidMount() {
    this.setState({ db: db });
  }

  handleUsername = (username) => {
    this.setState({ id: username });
  };

  handlePassword = (password) => {
    this.setState({ password: password });
  };

  handleLogin = () => {
    // Redirects to feed page once login is confirmed. Note this step doesn't require
    // a session.
    let { id, password, db } = this.state;

    // console.log("hello");

    let userExists = findIDandPW(db, id, password);

    // after setState, navigates to feed.
    this.setState({isLoggedIn: userExists}, () => {
      if (userExists) {
        this.props.navigation.navigate('Feed')
      }
    });
  };

  render() {
    return (
      <View>
        <HangoutBackground>
          <DevBox>
            <DevText>vincent/vincent12</DevText>
            <DevText>Username: {this.state.id}</DevText>
            <DevText>Password: {this.state.password}</DevText>
            <DevText>isLoggedIn: {this.state.isLoggedIn.toString()}</DevText>
          </DevBox>
          <LoginForm
            navigation={this.props.navigation}
            handleUsername={this.handleUsername}
            handlePassword={this.handlePassword}
            id={this.state.id}
            password={this.state.password}
            handleLogin={this.handleLogin}
            isLoggedIn={this.state.isLoggedIn}
          />
        </HangoutBackground>
      </View>
    );
  }
}

export default LocalLogin;
