import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BigButton } from "../Components/HangoutButton";

const UserPromptStyles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  header: {
    fontSize: 48
  },
  textContainer: {
    textAlign: "center",
    width: "70%",
    marginBottom: 40
  },
  text: {
    fontSize: 18,
    textAlign: "center"
  }
});

function UserPrompt({ header, text, buttonText, buttonAction }) {
  return (
    <View style={UserPromptStyles.container}>
      <Text style={UserPromptStyles.header}>{header}</Text>
      <View style={UserPromptStyles.textContainer}>
        <Text style={UserPromptStyles.text}>{text}</Text>
      </View>
      <BigButton text={buttonText} onPress={buttonAction} />
    </View>
  );
}

export default UserPrompt;
