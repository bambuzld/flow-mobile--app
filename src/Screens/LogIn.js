import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';

export default function logIn({navigation}) {
  return (
    <View style={styles.container}>
      <Logo />
      <Form type="LogIn" />
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Don't have an account yet?</Text>
        <Text
          style={styles.signupButton}
          onPress={() => navigation.navigate('SignUp')}>
          SignUp
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3d5afe',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  loginText: {},
  signupTextCont: {
    marginVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255,255, 255, 0.7)',
  },
  signupButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 10,
  },
});
