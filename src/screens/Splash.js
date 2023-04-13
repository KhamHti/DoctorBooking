import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Doctor App</Text>
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
  title: {
    color: '#fff',
    marginTop: 20,
    fontWeight: '800',
    fontSize: 30,
  },
});

export default Splash;
