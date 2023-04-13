import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text>Doctor App</Text>
      <Image source={require('../images/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3C486B',
  },
  logo: {
    width: 100,
    height: 100,
    tintColor: '#fff',
  },
});

export default Splash;
