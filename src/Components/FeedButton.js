import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

function FeedButtonRed({ text }) {
  return (
    <Button
      icon={<Ionicons name="md-thumbs-up" color="white" size={18} />}
      title={text}
      buttonStyle={styles.red}
    />
  );
}

function FeedButtonOrange({ text, navigateTo, destination, params }) {
  return (
    <Button
      icon={<Ionicons name="md-chatbubbles" color="white" size={18} />}
      title={text}
      buttonStyle={styles.orange}
      onPress={() =>
        navigateTo(destination, {
          name: params.name,
        })
      }
    />
  );
}

export { FeedButtonRed, FeedButtonOrange };

const styles = StyleSheet.create({
  red: {
    backgroundColor: "#DE5D49",
    width: "80%",
    height: 36,
    alignSelf: "center",
    borderRadius: 22,
  },
  orange: {
    backgroundColor: "#FF9E63",
    width: "80%",
    height: 36,
    alignSelf: "center",
    borderRadius: 22,
  },
});
