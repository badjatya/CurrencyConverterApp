import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

const Options = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native Basics</Text>
      </TouchableOpacity>

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
    color: "#343434",
  },
  separator: {
    backgroundColor: "#E2E2E2",
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export default Options;
