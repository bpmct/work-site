//A button that represtents an interest.
//Changes color if it is selected or not.
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Input, Button } from 'react-native-elements';

const CenteredView = styled.View`
  margin-top: 200px;
`

const styles = StyleSheet.create({
  inputCenter: {
    width: 300,
    alignSelf: 'center'
  },

  buttonStyle: {
    width: 100,
    backgroundColor: 'orange',
    alignSelf: 'center',
    marginTop: 30
  }
})

const DevBox = styled.View`
  border: 1px solid red;
  position: absolute;
  width: 100%;
  height: 25%;
  top: 0;
  left: 0;
`

const DevText = styled.Text`
  font-size: 12px;
  z-index: 10;
  color: red;
`

function LoginForm({handleUsername, handlePassword, id, password, handleLogin}) {
    return (
      <View>
        <CenteredView>
          <Input onChangeText={(username) => handleUsername(username)} containerStyle={styles.inputCenter} placeholder='username' value={id} />
          <Input onChangeText={(password) => handlePassword(password)} containerStyle={styles.inputCenter} placeholder='password' value={password} />
          <Button onPress={() => {handleLogin()}} buttonStyle={styles.buttonStyle} title="Login" />
        </CenteredView>
      </View>
    );
}

export default LoginForm;