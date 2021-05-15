import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

const ConversionInput = ({ text }) => {
  return (
    <View>
      <TouchableOpacity>
        <Text>{text}</Text>
      </TouchableOpacity>
      <TextInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ConversionInput;
