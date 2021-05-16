import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  button: {},
  buttonIcon: {},
  buttonText: {},
});

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={require("../assets/images/reverse.png")}
        style={styles.buttonIcon}
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
