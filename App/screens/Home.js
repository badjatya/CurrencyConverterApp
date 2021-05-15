import React from "react";
import { View, StatusBar, StyleSheet, Image, Dimensions } from "react-native";

import Colors from "../constants/Colors";
import ConversionInput from "../components/ConversionInput";

const screen = Dimensions.get("window");

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.blue} />

      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/background.png")}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <ConversionInput text="USD" onPress={() => alert("TODO!")} value="123" />
      <ConversionInput text="GBP" onPress={() => alert("TODO!")} value="123" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    flex: 1,
    justifyContent: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
});

export default Home;
