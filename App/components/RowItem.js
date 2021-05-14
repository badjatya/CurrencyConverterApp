import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const RowItem = ({ rightIcon, text }) => {
  return (
    <TouchableOpacity style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
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
});

export default RowItem;
