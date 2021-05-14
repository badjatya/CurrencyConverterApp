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
import RowItem from "../components/RowItem";

const Options = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RowItem
        text="React Native"
        rightIcon={
          <Entypo name="chevron-right" size={20} color={Colors.blue} />
        }
      />

      <View style={styles.separator} />

      <RowItem
        text="React Native Basics"
        rightIcon={<Entypo name="export" size={20} color={Colors.blue} />}
      />

      <View style={styles.separator} />

      <RowItem
        text="React Native by Examples"
        rightIcon={<Entypo name="export" size={20} color={Colors.blue} />}
      />
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
