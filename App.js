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
import Home from './src/Screens/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0031ca" barStyle="light-content" />
      {/* <LogIn /> */}
      {/* <SignUp /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
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
