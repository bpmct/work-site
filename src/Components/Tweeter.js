//A button that represtents an interest.
//Changes color if it is selected or not.
import React, {Component} from "react";
import {StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons"; // In order to use this, the function has to be a class :(
import { Avatar } from 'react-native-elements';
import styled from 'styled-components/native';

const TweeterBarContainer = styled.View`
  border: 0.1px solid grey;
  border-radius: 43px;
  background-color: white;
  height: 91%;
  margin-top: 1%;
  flex-direction: row;
  position: relative;
  justify-content: center;
  alignItems: center;
`;

const AvatarIcon = styled.View`
  flex: 2;
  alignSelf: stretch;
  justify-content: center;
  margin-left: 10px;
  margin-bottom: 5%;
`

const TweetBar = styled.View`
  flex: 13;
  background-color: #EE7C6A;
  border-radius: 32px;
  height: 55%;
  margin-right: 12px;
  margin-left: 12px;
  flex-direction: row;
`

const TweetInput = styled.TextInput`
  flex: 9;
  color: white;
`

const TweetIcon = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 5px;
`
class Tweeter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatar: '',
      username: '',
    }
  }

  componentDidMount() {
    // Eventually find the avatar based on session. 
    this.setState({avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'});
  }

  render() {
    return (
      <TweeterBarContainer>
        <AvatarIcon>
          <Avatar 
            containerStyle={styles.avatar}
            size={47}
            rounded
            source={{
              uri: this.state.avatar,
            }}
          />
        </AvatarIcon>
        <TweetBar>
          <TweetIcon>
            <Ionicons name="ios-compass" size={26} color="white" />
          </TweetIcon>
          <TweetInput onChangeText={(tweet) => this.props.updateTweet(tweet)} placeholder="What do you want to do today?" placeholderTextColor="white" />
        </TweetBar>
      </TweeterBarContainer>
    );
  }
}

export default Tweeter;

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 2,
    borderColor: "black"
  }
})