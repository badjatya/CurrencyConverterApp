import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.blue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    flex: 1,
  },
});

export default Home;
