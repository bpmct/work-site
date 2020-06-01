import React from "react";

import { StyleSheet, Dimensions, ScrollView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Avatar, Button, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import ProfileBlock from "../Components/ProfileBlock";

import StickyParallaxHeader from "react-native-sticky-parallax-header";

import styled from "styled-components";

const ProfileSections = styled.ScrollView`
  margin-top: 20px;
  /* background-color: blue; */
`;

//use a demo user as an example;
import { db } from "../../db/users";

let user = {
  aboutText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in vulputate sapien, at aliquam nunc. Donec nec cursus nisi. ",
  avalibilities: {
    Sunday: "6am-9am, 12pm-3pm",
    Monday: "3am-9am, 12pm-3pm",
    Tuesday: "9am-9am, 12pm-3pm",
    Wednesday: "12pm-3pm, 5pm-8pm",
    Thursday: "none",
    Friday: "9am-7pm",
    Saturday: "6am-9am, 12pm-3pm",
  },
  activities: [
    "surfing",
    "dancing",
    "singing",
    "coding",
    "skating",
    "hiking",
    "app development",
    "biking",
    "underwater basketweaving",
  ],
  // this would basically be logic checking if this is the logged in user's profile
  theLoggedInUser: false,
};

function IndividualProfile(props) {
  return (
    <StickyParallaxHeader
      leftTopIcon={require("../Images/icons/back.png")}
      leftTopIconOnPress={() => {
        props.navigation.navigate("PagesDirectory");
      }}
      rightTopIcon={require("../Images/icons/mail.png")}
      image={require("../Images/ben_large.jpg")}
      bounces={true}
      title="Ben Potter"
      subtitle={"Location: Rochester, NY\nAge:19"}
      headerType="AvatarHeader"
      parallaxHeight={300}
      renderBody={(title) => pageContent()}
      backgroundColor="#F88C0E"
    />
  );
}

function pageContent() {
  //grab a demo user and pull some data from it
  let ourUser = db.Users[0];

  return (
    <ProfileSections>
      {/* about me: */}
      <ProfileBlock title="About me:" icon="user" content={user.aboutText} />
      <ProfileBlock
        title="When I'm free:"
        icon="calendar"
        schedule={user.avalibilities}
        li_user={user.theLoggedInUser}
      />
      <ProfileBlock
        title="Activities:"
        icon="child"
        activities={user.activities}
      />
    </ProfileSections>
  );
}

export default IndividualProfile;
