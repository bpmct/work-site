import React, { Component } from "react";
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
const window = Dimensions.get("window");
import styled from "styled-components/native";
import { Header } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MessageInput from "./MessageInput";

import { Ionicons } from "@expo/vector-icons";

class MessageFromUserToUser extends Component {
  constructor(props) {
    super(props);
  }

  navigateTo = (destination, param) => {
    this.props.navigation.navigate(destination, param);
  };

  render() {
    const { name } = this.props.route.params;
    return (
      <View>
        <Header
          containerStyle={styles.header}
          backgroundColor="orange"
          placement="left"
          leftComponent={CustomLeftComponent(this.navigateTo, "Feed")}
          centerComponent={{
            text: name,
            style: { color: "#fff" },
          }}
          rightComponent={{ icon: "menu", color: "#fff" }}
        />
        <KeyboardAvoidingView behavior="height">
          <KeyboardAwareScrollView>
            <View style={styles.container}>
              <MessageInputContainer>
                <MessageInput />
              </MessageInputContainer>
            </View>
          </KeyboardAwareScrollView>
        </KeyboardAvoidingView>
        <Image
          style={styles.background}
          opacity={1}
          source={require("../Images/background.png")}
        />
      </View>
    );
  }
}

export default MessageFromUserToUser;

function CustomLeftComponent(navigateTo, destination) {
  return (
    <CustomLeftComponentFlexBox>
      <TouchableOpacity onPress={() => navigateTo(destination)}>
        <Ionicons name="md-arrow-round-back" size={24} color="white" />
      </TouchableOpacity>
    </CustomLeftComponentFlexBox>
  );
}

const styles = StyleSheet.create({
  avatar: {
    marginLeft: 12,
  },
  background: {
    zIndex: -5,
    position: "absolute",
    width: window.width,
    height: window.height,
  },
  container: {
    width: window.width,
    height: window.height - 80,
  },
  footer: {
    flex: 0.2,
  },
  body: {
    flex: 0.8,
  },
  header: {
    height: 80,
  },
});

const CustomLeftComponentFlexBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MessageInputContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
