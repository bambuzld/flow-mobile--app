import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Form = props => {
  return (
    <View styles={styles.container}>
      <TextInput
        style={styles.formInput}
        placeholder="Email"
        placeholderTextColor="white"
      />

      <TextInput
        style={styles.formInput}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="white"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{props.type}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  logoImage: {},
  logoText: {},
  formInput: {
    width: 300,
    height: 40,
    backgroundColor: '#8187ff',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: 'white',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
  },
  button: {
    backgroundColor: '#0031ca',
    borderRadius: 25,
    width: 300,
    paddingVertical: 12,
    marginVertical: 10,
  },
});

export default Form;
