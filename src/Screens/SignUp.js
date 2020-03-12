import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';

export default function signUp({navigation}) {
  const goTO = () => {};
  return (
    <View style={styles.container}>
      <Logo />
      <Form type="SignUp" />
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Already have and account?</Text>
        <Text
          style={styles.signupButton}
          onPress={() => navigation.navigate('LogIn')}>
          LogIn
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#3d5afe',
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
