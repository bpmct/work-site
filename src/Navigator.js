import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

// React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Pages
import PagesDirectory from "./Pages/PagesDirectory";
import Login from "./Pages/Login";
import LocalLogin from "./Pages/LocalLogin";
import EnableLocationScreen from "./Pages/EnableLocationScreen";
import EnableNotificationScreen from "./Pages/EnableNotificationScreen";
import Search from "./Pages/Search";
import Schedule from "./Pages/Schedule";
import People from "./Pages/People";
import IndividualProfile from "./Pages/IndividualProfile";
import Feed from "./Pages/Feed";
import MessageFromUserToUser from "./Components/MessageFromUserToUser";
import Chats from "./Pages/Chats";
import Settings from "./Pages/Settings";
import Tests from "./Pages/Tests";

// db
import { db, findIDandPW } from "../db/users.js";

// styled
import styled from "styled-components/native";

const Stack = createStackNavigator();

export default class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="PagesDirectory" component={PagesDirectory} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="LocalLogin"
            component={LocalLogin}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="EnableLocationScreen"
            component={EnableLocationScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="EnableNotificationScreen"
            component={EnableNotificationScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Schedule" component={Schedule} />
          <Stack.Screen name="People" component={People} />
          <Stack.Screen
            name="IndividualProfile"
            component={IndividualProfile}
            options={{
              headerStyle: {
                backgroundColor: "orange",
              },
              headerShown: false,
              title: "Your Profile",
            }}
          />
          <Stack.Screen
            name="Feed"
            component={Feed}
            options={{
              headerStyle: {
                backgroundColor: "orange",
              },
            }}
          />
          <Stack.Screen
            name="MessageFromUserToUser"
            component={MessageFromUserToUser}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Chats" component={Chats} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Tests" component={Tests} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
