import React, {useState, Component} from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Button } from 'react-native-elements';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  }

  const onLogin = async() => {
    // Logic to login goes here
  }

  return (
    <SafeAreaView style={styles.container}>
      <FormInput
        name='email'
        value={email}
        placeholder='Enter email'
        autoCapitalize='none'
        onChangeText={(text) => setEmail(text)}
        iconName='ios-mail'
        iconColor='#2C384A'
      />
      <FormInput
        name='password'
        value={password}
        placeholder='Enter password'
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        iconName='ios-lock'
        iconColor='#2C384A'
      />
      <View style={styles.buttonContainer}>
        <FormButton
          buttonType='outline'
          onPress={onLogin}
          title='LOGIN'
          buttonColor='#039BE5'
        />
      </View>
      <Button
        title="Don't have an account? Sign Up"
        onPress={goToSignUp}
        titleStyle={{
          color: '#F57C00'
        }}
        type='clear'
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