import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  ScrollView,
  Linking,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import { RowItem, RowSeparator } from "../components/RowItem";

const openLink = (url) => {
  Linking.openURL(url).catch(() =>
    Alert.alert("Sorry, something went wrong.", "Please try again later")
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});

const Options = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
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
          onPress={() => openLink("https://www.google.com")}
        />
        <RowSeparator />
        <RowItem
          text="React Native by Examples"
          rightIcon={<Entypo name="export" size={20} color={Colors.blue} />}
          onPress={() => openLink("https://www.facebook.com")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Options;
