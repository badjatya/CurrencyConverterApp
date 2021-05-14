import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const Options = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native</Text>
        <Entypo name="chevron-right" size={20} color={Colors.blue} />
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native Basics</Text>
        <Entypo name="export" size={20} color={Colors.blue} />
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native by Examples</Text>
        <Entypo name="export" size={20} color={Colors.blue} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },

  separator: {
    backgroundColor: Colors.border,
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 20,
  },
});

export default Options;
