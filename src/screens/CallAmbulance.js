import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BookButton from '../components/BookButton';

const CallAmbulance = ({navigation}) => {
  return (
    <SafeAreaView styles={styles.conatiner}>
      <HeaderComponent
        title={'Calling Ambulance'}
        icon={require('../images/back.png')}
        onClick={() => {
          navigation.navigate('Home');
        }}
      />
      <View style={styles.imgView}>
        <Image source={require('../images/ambulance.png')} style={styles.img} />
      </View>
      <BookButton
        width={200}
        height={50}
        title={'Back To Home'}
        status={true}
        onClick={() => navigation.navigate('Home')}
      />
      <TouchableOpacity style={styles.callBtn}>
        <Text style={styles.textCall}>Call Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CallAmbulance;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fff',
  },
  img: {
    width: 400,
    height: 400,
  },
  imgView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  callBtn: {
    width: 300,
    height: 50,
    marginVertical: 20,
    backgroundColor: '#3C486B',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textCall: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
});
