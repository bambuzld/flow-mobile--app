import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default function Logo() {
  return (
    <View styles={styles.container}>
      <Image
        style={styles.logoImage}
        source={require('../../assets/img/output-onlinepngtools.png')}
      />
      <Text style={styles.logoText}>Flow</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  logoImage: {},
  logoText: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
  },
});
