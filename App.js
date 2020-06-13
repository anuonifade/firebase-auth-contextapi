import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './navigation';
import Firebase, {FirebaseProvider} from './config/Firebase';

export default function App() {
  return (
    <FirebaseProvider value={Firebase}>
      <AppContainer />
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
