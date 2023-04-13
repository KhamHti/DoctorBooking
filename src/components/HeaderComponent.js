import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const HeaderComponent = ({title, icon, onClick}) => {
  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity
        onPress={onClick}
        underlayColor="#3C486B"
        style={styles.backBtn}>
        <Image source={icon} style={styles.backImg} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#3C486B',
    // backgroundColor: "#fff",
    elevation: 8,
    alignItems: 'center',
    paddingLeft: 10,
  },
  backImg: {
    width: 38,
    height: 38,
  },
  backBtn: {
    width: 38,
    height: 35,
    borderRadius: 15,
    color: '#000',
    marginLeft: 10,
  },
  title: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
});

export default HeaderComponent;
