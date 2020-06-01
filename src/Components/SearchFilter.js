import React from "react";
import { TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import { Input, Icon } from "react-native-elements";
import styled from "styled-components";

const SearchFilterStyles = StyleSheet.create({
  input: {
    borderWidth: 0,
    paddingLeft: -20,
    textAlign: "center",
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  container: {
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 10,
    borderBottomWidth: 0,
    padding: 5,
  },
});

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);

    this.searchInput = React.createRef();
  }

  searchTyped = (event) => {
    event.persist();

    let query = event.nativeEvent.text;

    //Let our upper-level component know the results
    this.props.updateSearch(query);
  };

  clearQuery = () => {
    this.setState({ query: "" });
    this.props.updateSearch("");
  };

  searchLeftIcon = () => {
    if (!this.props.searchQuery || this.props.searchQuery == "") {
      return (
        <TouchableOpacity
          onPress={() => {
            this.searchInput.current.focus();
          }}
        >
          <Icon name="search" type="font-awesome" />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => {
            this.props.updateSearch("");
          }}
        >
          <Icon name="times" type="font-awesome" />
        </TouchableOpacity>
      );
    }
  };

  render() {
    return (
      <>
        <Input
          inputStyle={SearchFilterStyles.input}
          inputContainerStyle={SearchFilterStyles.inputContainer}
          containerStyle={SearchFilterStyles.container}
          onChange={this.searchTyped}
          value={this.props.searchQuery}
          onBlur={this.clearQuery}
          ref={this.searchInput}
          placeholder="Search for activities"
          leftIcon={this.searchLeftIcon()}
        />
      </>
    );
  }
}

export default SearchFilter;
