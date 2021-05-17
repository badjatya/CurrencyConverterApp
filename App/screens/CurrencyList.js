import React from "react";
import { View, StatusBar, FlatList, StyleSheet } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

import Colors from "../constants/Colors";
import { RowItem, RowSeparator } from "../components/RowItem";
import currencies from "../data/currencies.json";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});

const CurrencyList = ({ navigation }) => {
  const inset = useSafeArea();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          return <RowItem text={item} onPress={() => navigation.pop()} />;
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: inset.bottom }} />
        )}
      />
    </View>
  );
};

export default CurrencyList;
