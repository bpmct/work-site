import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from "react";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";

const HeaderStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 30
  },
  headerText: {
    flexGrow: 1,
    textAlign: "center",
    fontSize: 23,
    fontWeight: "700",

    color: "#fff"
  },
  backButton: { marginLeft: 17, color: "red" },
  nextButton: { marginRight: 17 }
});

function OnboardingHeader({ title, backPage, nextPage, navigation }) {
  return (
    <View style={HeaderStyles.container}>
      {/* Back button */}
      <TouchableOpacity
        onPress={() => navigation.navigate(backPage)}
        style={HeaderStyles.backButton}
      >
        <Text>
          <Ionicons name="ios-arrow-back" size={32} color="white" />
        </Text>
      </TouchableOpacity>
      {/* Title text */}
      <Text style={HeaderStyles.headerText}>{title}</Text>
      {/* Forward button */}
      <TouchableOpacity
        style={HeaderStyles.nextButton}
        onPress={() => navigation.navigate(nextPage)}
      >
        <Text>
          <Ionicons name="md-checkmark-circle" size={32} color="white" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default OnboardingHeader;
