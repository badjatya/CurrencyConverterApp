import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
  },
  containerDisabled: {
    backgroundColor: Colors.offWhite,
  },
  button: {
    padding: 15,
    borderRightWidth: 1,
    borderRightColor: Colors.border,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.blue,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: Colors.textLight,
  },
});

const ConversionInput = ({ text, onButtonPress, ...props }) => {
  const containerStyles = [styles.container];

  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default ConversionInput;
