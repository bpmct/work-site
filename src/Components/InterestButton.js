//A button that represtents an interest.
//Changes color if it is selected or not.
import React from "react";
import { View } from "react-native";
import { SelectButton } from "../Components/HangoutButton";

function InterestButton(props) {
  return (
    <View style={{ padding: 10 }}>
      <SelectButton
        text={props.title}
        selected={props.interests.includes(props.title) ? true : false}
        onPress={() => props.updateInterest(props.title)}
      />
    </View>
  );
}

export default InterestButton;
