import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Options = () => {
  return (
    <View>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native Basics</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native by Examples</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {},
  text: {},
});

export default Options;
