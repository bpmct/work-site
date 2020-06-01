import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

function SelectButton({ text, onPress, selected }) {
  return (
    <View style={styles.selectButtonContainer}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            // default selectButton styles
            styles.selectButton,
            {
              //change background color depending on if it is selected or not
              backgroundColor: selected ? "#F4AE6F" : "#fff"
            }
          ]}
        >
          <Text style={styles.selectButtonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function BigButton({ text, onPress, icon }) {
  return (
    <View style={styles.bigButtonContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.bigButton}>
          <Text style={styles.bigButtonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  selectButtonContainer: {
    width: "auto",
    alignSelf: "flex-start"
  },
  selectButton: {
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  },
  selectButtonText: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    padding: 5,
    textAlign: "center"
  },
  bigButtonContainer: {
    width: "80%"
  },
  bigButton: {
    backgroundColor: "#ED7063",
    borderRadius: 30
  },
  bigButtonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 18,
    color: "white"
  }
});

export { SelectButton, BigButton };
