import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, TouchableHighlight } from 'react-native'
import React from 'react'

const HeaderComponent = ({ title, icon }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity underlayColor="#3C486B"
        style={styles.backBtn}>
        <Image source={icon} style={styles.backImg} />
      </TouchableOpacity>
      <Text style={[styles.title, { marginLeft: 10 }]}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: "100%",
    flexDirection: 'row',
    backgroundColor: "#3C486B",
    // backgroundColor: "#fff",
    elevation: 8,
    alignItems: 'center',
    paddingLeft: 10
  },
  backImg: {
    width: 38,
    height: 38,
  },
  backBtn: {
    width: 38,
    height: 35,
    borderRadius: 15,
    color: "#000"
  },
  title: {
    // marginLeft: 20,
    fontSize: 18,
    fontWeight: "600",
    color: "#000"
  }
})

export default HeaderComponent