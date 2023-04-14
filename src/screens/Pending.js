import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Pending = () => {
  return (
    <View style={styles.conatiner}>
      <Text>Pending</Text>
    </View>
  );
};

export default Pending;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
