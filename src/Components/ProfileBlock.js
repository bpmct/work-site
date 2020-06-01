import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

const Card = styled.View`
  width: 90%;
  align-self: center;
  background-color: #fff;
  border-width: 2px;
  border-left-color: #ccc;
  border-top-color: #ccc;
  border-bottom-color: #ccc;
  border-right-color: #ec8f85;
  border-right-width: 4px;
  border-radius: 15px;
  margin-bottom: 30px;
  padding-bottom: 10px;
`;

const CardHeaderText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  border-color: #ccc;
  border-bottom-width: 2px;
  padding: 10px;
  padding-left: 20px;
`;

const CardBodyText = styled.Text`
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 10px;
`;

const ScheduleTable = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  align-items: flex-start;
`;

const ScheduleItem = styled.View`
  width: 100%;
  padding: 10px
  /* background color varies */
  background: ${(props) => {
    if (props.colorMode) {
      return "#f9e3d6";
    } else {
      return "#eee";
    }
  }};
  min-height: 20px;
  display: flex;
  flex-direction: row;
`;

const Day = styled.Text`
  flex: 0 0 35%;
  font-size: 16px;
  font-weight: bold;
`;

const Times = styled.Text`
  flex: 1;
  font-size: 16px;
  text-align: right;
`;

const ActivitiesGrid = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
  padding-top: 10px;
`;

// helper function to capatalize first letter of a word
// https://stackoverflow.com/questions/32589197/how-to-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
function jsUcfirst(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
}

function ProfileBlock(props) {
  // figure out what the body of this card is
  let content = <Text>Error: No content for this block.</Text>;
  if (props.content) {
    content = <CardBodyText>{props.content}</CardBodyText>;
  } else if (props.schedule) {
    let actionButton = "";
    if (props.li_user) {
      actionButton = (
        <Button
          icon={<Icon name="pencil" size={15} color="#fff" />}
          containerStyle={{
            marginTop: 20,
            marginBottom: 10,
            alignSelf: "center",
          }}
          titleStyle={{ paddingLeft: 10 }}
          title="Update your schedule"
        />
      );
    } else {
      actionButton = (
        <Button
          icon={<Icon name="retweet" size={15} color="#fff" />}
          containerStyle={{
            marginTop: 20,
            marginBottom: 10,
            alignSelf: "center",
          }}
          titleStyle={{ paddingLeft: 10 }}
          title="Compare to your schedule"
        />
      );
    }

    content = (
      <ScheduleTable>
        {Object.entries(props.schedule).map(([key, value], index) => {
          return (
            // alternate BG colors by using index%2
            <ScheduleItem key={index} colorMode={index % 2}>
              <Day>{key}: </Day>
              <Times>{value}</Times>
            </ScheduleItem>
          );
        })}
        {actionButton}
      </ScheduleTable>
    );
  } else if (props.activities) {
    content = (
      <ActivitiesGrid>
        {/* loop through activities and show them as buttons */}
        {props.activities.map((value, index) => {
          return (
            <Button
              containerStyle={{
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 5,
                marginRight: 5,
              }}
              buttonStyle={{
                backgroundColor: "#F38C6A",
                borderRadius: 20,
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 18,
                paddingRight: 18,
              }}
              title={jsUcfirst(value)}
              key={index}
            />
          );
        })}
      </ActivitiesGrid>
    );
  }

  return (
    <Card>
      <CardHeaderText>
        <Icon name={props.icon} size={22} color="#000" /> {props.title}
      </CardHeaderText>
      {content}
    </Card>
  );
}

export default ProfileBlock;
