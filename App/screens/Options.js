import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

import Colors from "../constants/Colors";

const Options = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native Basics</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native by Examples</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  row: {
    marginHorizontal: 20,
    marginVertical: 16,
  },
  text: {
    fontSize: 16,
    color: Colors.text,
  },
  separator: {
    backgroundColor: Colors.border,
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 20,
  },
});

export default Options;
