/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import LogIn from './src/Screens/LogIn';
import SignUp from './src/Screens/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0031ca" barStyle="light-content" />
      {/* <LogIn /> */}
      <SignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3d5afe',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
