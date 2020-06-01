import React, { Component } from "react";
import {
  Image,
  Dimensions,
  StyleSheet,
  PixelRatio,
  FlatList,
} from "react-native";
const window = Dimensions.get("window");
import styled from "styled-components/native";
import { SearchBar, Avatar } from "react-native-elements";

import Tweeter from "../Components/Tweeter";
import { FeedButtonRed, FeedButtonOrange } from "../Components/FeedButton";

import { db } from "../../db/users";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      tweet: "",
      feed: [],
    };
  }

  componentDidMount() {
    this.setState({ feed: db.Feed });
  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  updateTweet = (tweet) => {
    this.setState({ tweet });
  };

  concatActivities = (arrayOfActivities) => {
    let result = "";
    for (const element of arrayOfActivities) {
      if (result == "") {
        result += `${element}`;
      } else {
        result += ` - ${element}`;
      }
    }
    return result;
  };

  // Set up destination name of the route and params to merge into the destination route.
  navigateTo = (destination, param) => {
    this.props.navigation.navigate(destination, param);
  };

  card = (object) => {
    return (
      <CardContainer>
        <CardHeaderContainer>
          <CardHeaderAvatar>
            <Avatar
              containerStyle={styles.feedavatar}
              size={55}
              rounded
              source={{
                uri: object.avatar,
              }}
            />
          </CardHeaderAvatar>
          <CardHeaderName>
            <NameText style={styles.name}>{object.name}</NameText>
          </CardHeaderName>
        </CardHeaderContainer>
        <CardFooter>
          <ActivityText style={styles.activity}>
            {this.concatActivities(object.activity)}
          </ActivityText>
          <DescriptionText style={styles.description}>
            {object.description}
          </DescriptionText>
          <CardContainerButtonContainer>
            <FeedButtonRed text="    LIKE" />
            <FeedButtonOrange
              text="    MESSAGE"
              navigateTo={this.navigateTo}
              destination={"MessageFromUserToUser"}
              params={object}
            />
          </CardContainerButtonContainer>
        </CardFooter>
      </CardContainer>
    );
  };

  render() {
    const { search, feed } = this.state;
    // const listCards = feed.map((item) => this.card(item));
    return (
      <FlexView>
        <Image
          position="absolute"
          style={{ width: window.width, height: window.height }}
          opacity={1}
          source={require("../Images/background.png")}
        />
        <Flex1 contentContainerStyle={styles.center}>
          <SearchBar
            placeholder="Search"
            onChangeText={this.updateSearch}
            value={search}
            containerStyle={styles.containerStyle}
            lightTheme
            inputStyle={styles.whitebg}
            inputContainerStyle={styles.whitebg}
          />
        </Flex1>
        <Flex2>
          <Tweeter updateTweet={this.updateTweet} />
        </Flex2>
        <Flex3
          data={feed}
          renderItem={({ item }) => this.card(item)}
          keyExtractor={(item) => item.id}
        />
      </FlexView>
    );
  }
}

export default Feed;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "white",
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(12),
    borderWidth: 0.03,
    zIndex: 10,
    flex: 0.6,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  whitebg: {
    backgroundColor: "white",
  },
  center: {
    justifyContent: "center",
  },
  avatar: {
    borderWidth: 2,
    borderColor: "black",
  },
  feedavatar: {
    borderWidth: 2,
    borderColor: "black",
    marginTop: 10,
    alignSelf: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  activity: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
});

const DevBox = styled.View`
  border: 1px solid red;
  position: absolute;
  width: 100%;
  height: 25%;
  top: 0;
  left: 0;
`;

const DevText = styled.Text`
  font-size: 12px;
  z-index: 10;
  color: red;
`;

const FlexView = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  flex-direction: column;
  flex: 1;
`;

// Takes up 1 / 10.23 of the screen space
const Flex1 = styled.View`
  position: relative;
  flex: 1;
  width: 95%;
`;

// Takes up 1.23 / 10.23 of the screen space
const Flex2 = styled.View`
  position: relative;
  flex: 1.23;
  width: 95%;
`;

// Takes up 8 / 10.23 of the screen space
const Flex3 = styled.FlatList`
  position: relative;
  flex: 8;
  width: 100%;
`;

const CardContainer = styled.View`
  width: 95%;
  border: 0.3px solid grey;
  border-radius: 16px;
  background-color: white;
  margin-bottom: 6px;
  margin-top: 6px;
  align-self: center;
`;

// Takes up 3/11 of CardContainer space
const CardHeaderContainer = styled.View`
  flex-direction: row;
  flex: 3;
  width: 95%;
`;

// Takes up 8/11 of CardContainer space
const CardFooter = styled.View`
  flex: 8;
  padding: 14px 14px;
`;

// Takes up 2/9 of CardHeaderContainer space
const CardHeaderAvatar = styled.View`
  flex: 2;
`;
// Takes up 7/9 of CardHeaderContainer space
const CardHeaderName = styled.View`
  flex: 7;
`;

const CardContainerButtonContainer = styled.View`
  flex-direction: row;
  align-self: center;
  margin-top: 15px;
`;

const ActivityText = styled.Text`
  margin-top: -6px;
  color: #db722e;
  margin-bottom: 12px;
  padding: 6px 6px;
`;

const NameText = styled.Text`
  padding-top: 12px;
`;

const DescriptionText = styled.Text`
  padding: 6px 6px;
`;
