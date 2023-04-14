import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CallAmbulance = () => {
  return (
    <View styles={styles.conatiner}>
      <Text>Callambulance</Text>
    </View>
  );
};

export default CallAmbulance;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
