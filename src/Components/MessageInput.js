import React from "react";
import { View, TextInput } from "react-native";
import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function MessageInput() {
  const [value, onChangeText] = React.useState("Useless Placeholder");
  return (
    <MessageBox onChangeText={(text) => onChangeText(text)} value={value} />
  );
}

export default MessageInput;

const MessageBox = styled.TextInput`
  height: 40px;
  border-color: gray;
  border-width: 1px;
`;
