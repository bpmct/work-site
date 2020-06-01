import React, { Component } from "react";
import { View, Text, Image, Dimensions, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const window = Dimensions.get("window");
import styled from "styled-components/native";

import { User } from "../Functions/account";

// const BackgroundImage = styled.View`
//   backgroundImage: url("../Images/Welcome.png");
//   backgroundPosition: no-repeat;
//   backgroundSize: cover;
//   height: 100%;
// `;

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

class PagesDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      db: {},
      username: "",
      password: "",
      response: "Tests response will go here :)",
    };
  }

  createDemoUser = (e) => {
    e.preventDefault();

    //create a random username (animal name + number)
    let animals = [
      "Aardvark",
      "Abyssinian",
      "Adelie Penguin",
      "Affenpinscher",
      "Afghan Hound",
      "African Bush Elephant",
      "African Civet",
      "African Clawed Frog",
      "African Forest Elephant",
      "African Palm Civet",
      "African Penguin",
      "African Tree Toad",
      "African Wild Dog",
      "Ainu Dog",
      "Airedale Terrier",
      "Akbash",
      "Akita",
      "Alaskan Malamute",
      "Albatross",
      "Aldabra Giant Tortoise",
      "Alligator",
      "Alpine Dachsbracke",
      "American Bulldog",
      "American Cocker Spaniel",
      "American Coonhound",
      "American Eskimo Dog",
      "American Foxhound",
      "American Pit Bull Terrier",
      "American Staffordshire Terrier",
      "American Water Spaniel",
      "Amur Leopard",
      "Anatolian Shepherd Dog",
      "Angelfish",
      "Ant",
      "Anteater",
      "Antelope",
      "Appenzeller Dog",
      "Arctic Fox",
      "Arctic Hare",
      "Arctic Wolf",
      "Armadillo",
      "Asian Elephant",
      "Asian Giant Hornet",
      "Asian Palm Civet",
      "Asiatic Black Bear",
      "Australian Cattle Dog",
      "Australian Kelpie Dog",
      "Australian Mist",
      "Australian Shepherd",
      "Australian Terrier",
      "Avocet",
      "Axolotl",
      "Aye Aye",
      "B",
      "Baboon",
      "Bactrian Camel",
      "Badger",
      "Balinese",
      "Banded Palm Civet",
      "Bandicoot",
      "Barb",
      "Barn Owl",
      "Barnacle",
      "Barracuda",
      "Basenji Dog",
      "Basking Shark",
      "Basset Hound",
      "Bat",
      "Bavarian Mountain Hound",
      "Beagle",
      "Bear",
      "Bearded Collie",
      "Bearded Dragon",
      "Beaver",
      "Bedlington Terrier",
      "Beetle",
      "Bengal Tiger",
      "Bernese Mountain Dog",
      "Bichon Frise",
      "Binturong",
      "Bird",
      "Birds Of Paradise",
      "Birman",
      "Bison",
    ];

    let randomAnimal = animals[Math.floor(Math.random() * animals.length - 1)];
    randomAnimal = randomAnimal.replace(" ", "");
    let randomNumber = Math.floor(Math.random() * 100);
    let username = randomAnimal + randomNumber;

    let email = username + "@dayrep.com";

    let password = "password" + randomNumber;

    User.register(username, email, password);
    this.setState({ response: "hello" });
  };

  render() {
    return (
      <View>
        <Button
          title="Create Demo User"
          color="blue"
          onPress={this.createDemoUser}
        />

        <View
          style={{ marginTop: 100, minHeight: 100, backgroundColor: "#ccc" }}
        >
          <Text selectable={true}>{this.state.response}</Text>
        </View>

        <Image
          style={{ width: window.width, height: window.height }}
          opacity={1}
          source={require("../Images/background.png")}
        />
      </View>
    );
  }
}

export default PagesDirectory;
