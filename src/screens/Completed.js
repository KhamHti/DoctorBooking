import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Completed = () => {
  return (
    <View style={styles.conatiner}>
      <Text>Completed</Text>
    </View>
  );
};

export default Completed;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
