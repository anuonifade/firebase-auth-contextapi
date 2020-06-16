import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import {Button} from 'react-native-elements';

import {withFirebaseHOC} from '../config/Firebase';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function SignUp({navigation}) {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const goToLogin = () => {
    navigation.navigate('Login')
  }

  const onRegister = () => {
    //Logic to register goes here
  }
  return (
    <SafeAreaView style={styles.container}>
      <FormInput
        name="fullName"
        value={fullName}
        placeholder="Enter Full Name"
        autoCapitalize="none"
        onChangeText={(text) => setFullName(text)}
        iconName="ios-person"
        iconColor="#2C384A"
      />
      <FormInput
        name="email"
        value={email}
        placeholder="Enter email"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        iconName="ios-mail"
        iconColor="#2C384A"
      />
      <FormInput
        name="password"
        value={password}
        placeholder="Enter password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        iconName="ios-lock"
        iconColor="#2C384A"
      />
      <FormInput
        name="confirmPassword"
        value={confirmPassword}
        placeholder="Confirm password"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
        iconName="ios-lock"
        iconColor="#2C384A"
      />
      <View style={styles.buttonContainer}>
        <FormButton
          buttonType="outline"
          onPress={onRegister}
          title="REGISTER"
          buttonColor="#039BE5"
        />
      </View>
      <Button
        title="Don't have an account? Sign Up"
        onPress={goToLogin}
        titleStyle={{
          color: "#F57C00",
        }}
        type="clear"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 25,
  },
});
