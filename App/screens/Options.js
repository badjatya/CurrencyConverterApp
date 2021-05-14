import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import { RowItem, RowSeparator } from "../components/RowItem";

const Options = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <RowItem
          text="React Native"
          rightIcon={
            <Entypo name="chevron-right" size={20} color={Colors.blue} />
          }
          onPress={() => alert("TODO!!")}
        />
        <RowSeparator />
        <RowItem
          text="React Native Basics"
          rightIcon={<Entypo name="export" size={20} color={Colors.blue} />}
          onPress={() => alert("!!")}
        />
        <RowSeparator />
        <RowItem
          text="React Native by Examples"
          rightIcon={<Entypo name="export" size={20} color={Colors.blue} />}
          onPress={() => alert("!!")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});

export default Options;
