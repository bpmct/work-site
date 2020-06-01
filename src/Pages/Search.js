import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";
const window = Dimensions.get("window");
import { KeyboardAvoidingView } from "react-native";
import styled from "styled-components";

import OnboardingHeader from "../Components/OnboardingHeader";

import HangoutBackground from "../Components/HangoutBackground";

//Our search
import SearchFilter from "../Components/SearchFilter";

//Our list of interests
import InterestsList from "../Components/InterestsList";

class Search extends React.Component {
  constructor(props) {
    super(props);
    //For now, I will use a simple array of categories
    this.interests = [
      "hiking",
      "tennis",
      "eating out",
      "video games",
      "squash",
      "camping",
      "bird watching",
      "singing",
      "programming",
      "dancing",
      "horse riding",
      "swimming",
      "underwater basketweaving",
      "watching tv",
      "doing nothing",
      "rock climbing",
      "water polo",
      "football",
      "flag football",
      "drinking coffee",
      "ballet dancing",
      "carpentry",
      "engineering",
      "science",
      "mathematics",
      "balancing",
      "surfing",
    ];

    // how many will load at first
    let initialLoadAmount = 15;
    // how many load each time (may be automatic soon)
    this.loadByAmount = 15;

    //Create a state with an array that holds the user's selected interests
    this.state = {
      currentlySearching: false,
      //load the first 15 interests originally, later we will sort this based
      //off of popularity
      interestsToShow: this.interests.slice(0, initialLoadAmount),
      searchResults: [],
      loadedAmount: initialLoadAmount,
      searchQuery: "",
      selectedInterests: [],
    };

    //Fetch list of interests to use, ideally from an API
    this.updateSearch = (searchQuery) => {
      this.setState({ searchQuery });

      if (searchQuery == "" || !searchQuery) {
        //update state :)
        this.setState({ currentlySearching: false });
      } else {
        //search for the user's query

        let searchResults = this.interests.filter((interest) => {
          if (interest.includes(searchQuery.toLowerCase())) return true;
          else return false;
        });

        //update state :)
        this.setState({ searchResults, currentlySearching: true });
      }
    };

    this.updateInterest = (theInterest) => {
      //Make a local copy of the userInterests in state
      const selectedInterests = this.state.selectedInterests;

      let interestsToShow = this.state.interestsToShow;

      //Add or remove, depending on if it is already in the list
      if (selectedInterests.includes(theInterest)) {
        for (var i = 0; i < selectedInterests.length; i++) {
          if (selectedInterests[i] === theInterest) {
            selectedInterests.splice(i, 1);
          }
        }
      } else {
        // check if this is in the loaded interests list...
        // if not, add it to the loaded interests list at the top
        if (!interestsToShow.includes(theInterest)) {
          interestsToShow.unshift(theInterest);
        }

        selectedInterests.push(theInterest);
      }

      //update the list of selectedinterests (and maybe the intersts to show)
      this.setState({ selectedInterests, interestsToShow });
    };

    /**
     * load more interests... this is a little complicated
     * because we do not want to load interests twice (search queries)
     * that have not been loaded yet */
    this.loadMoreInterests = () => {
      let interestsToShow = this.state.interestsToShow;
      //slice from the # we've loaded so far
      //and end at the amount we load by
      let start = this.state.loadedAmount - 1;
      let end = start + this.loadByAmount;
      let newInterests = this.interests.slice(start, end);

      //check to make sure none of our newInterests are already loaded (as they may be in selectedInterests)
      newInterests = newInterests.filter(function (e) {
        return this.indexOf(e) < 0;
      }, interestsToShow);

      interestsToShow = interestsToShow.concat(newInterests);

      //update the count of items loaded in state (doesn't matter if some weren't displayed)
      let loadedAmount = this.state.loadedAmount + this.loadByAmount;

      this.setState({ interestsToShow, loadedAmount });
    };
  }

  render() {
    return (
      <HangoutBackground image="onboarding">
        <OnboardingHeader
          navigation={this.props.navigation}
          title="What do you like doing?"
          backPage="PagesDirectory"
          nextPage="Schedule"
        />
        {/* Map through the interestsArray and put a button for each one */}
        <View
          style={{
            flexDirection: "column",
            flexWrap: "wrap",
            width: "100%",
            alignContent: "center",
          }}
        >
          <SearchFilter
            interests={this.interests}
            searchQuery={this.state.searchQuery}
            updateSearch={this.updateSearch}
          />
        </View>
        <InterestsList
          interests={
            // show either our defined list of interests or the search results
            this.state.currentlySearching
              ? this.state.searchResults
              : this.state.interestsToShow
          }
          interestsRemaining={
            this.interests.length - this.state.interestsToShow.length
          }
          loadMoreInterests={this.loadMoreInterests}
          currentlySearching={this.state.currentlySearching}
          selectedInterests={this.state.selectedInterests}
          updateInterest={this.updateInterest}
          updateSearch={this.updateSearch}
        />
      </HangoutBackground>
    );
  }
}

export default Search;
