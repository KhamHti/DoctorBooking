import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Splash")}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    padding: 50,
    marginHorizontal: 50,
    backgroundColor: "#3C486B",
  },
});

export default Home;
