import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './navigation';
import Firebase, {FirebaseProvider} from './config';

export default function App() {
  return (
    <FirebaseProvider value={Firebase}>
      <AppContainer signIn={false}/>
    </FirebaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
