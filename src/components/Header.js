import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <Text>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        width: "100%",
        flexDirection: 'row',
        backgroundColor: "#fff",
        elevation: 8
    }
})

export default Header