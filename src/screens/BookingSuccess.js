import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const BookingSuccess = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../images/checked.png')}
        style={styles.imgChecked}
      />
      <Text style={styles.msg}>{'Your appointment successfully updated'}</Text>
      <TouchableOpacity
        style={styles.goBackToHome}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{color: '#fff', fontWeight: '700', fontSize: 16}}>
          Go Home
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imgChecked: {
    width: 200,
    height: 200,
  },
  msg: {
    color: '#000',
    fontSize: 18,
    marginTop: 20,
    fontWeight: '700',
  },
  goBackToHome: {
    width: 160,
    height: 50,
    margin: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3C486B',
  },
});

export default BookingSuccess;
