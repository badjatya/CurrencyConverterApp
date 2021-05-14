import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

import Colors from "../constants/Colors";

export const RowItem = ({ rightIcon, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export const RowSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 20,
    marginVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
