import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const BookButton = ({width, height, title, onClick, status}) => {
  return (
    <TouchableOpacity
      onPress={() => onClick()}
      style={{alignItems: 'center', marginVertical: 20}}>
      {status ? (
        <LinearGradient
          colors={['#7C96AB', '#3C486B']}
          style={{
            width: width,
            height: height,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>{title}</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={['#B0DAFF', '#BACDDB']}
          style={{
            width: width,
            height: height,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.5,
          }}>
          <Text style={{color: '#8e8e8e', fontSize: 16}}>{title}</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

export default BookButton;
