import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import InterestButton from "../Components/InterestButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class InterestsList extends React.Component {
  bottomSection() {
    if (this.props.interests.length == 0) {
      return (
        <TouchableOpacity
          style={{
            backgroundColor: "#ccc",
            width: "100%",
            textAlign: "center",
          }}
          onPress={() => {
            this.props.updateSearch("");
          }}
        >
          <Text style={{ textAlign: "center" }}>
            {"\n"}No interests could be found... Clear search{"\n"}
          </Text>
        </TouchableOpacity>
      );
    } else if (
      !this.props.currentlySearching &&
      this.props.interestsRemaining != 0
    ) {
      return (
        <TouchableOpacity
          style={{
            backgroundColor: "#ccc",
            width: "100%",
            textAlign: "center",
          }}
          onPress={this.props.loadMoreInterests}
        >
          <Text style={{ textAlign: "center" }}>
            {this.props.interestsRemaining} more interests have not been
            loaded...
          </Text>
          <Text style={{ textAlign: "center" }}>Load more</Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {this.props.interests.map((item) => (
            <InterestButton
              title={item}
              key={item}
              interests={this.props.selectedInterests}
              updateInterest={this.props.updateInterest}
            />
          ))}
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 50,
            marginTop: 20,
          }}
        >
          {this.bottomSection()}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default InterestsList;
