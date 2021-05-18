import React from "react";
import { View, StatusBar, FlatList, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useSafeArea } from "react-native-safe-area-context";

import Colors from "../constants/Colors";
import { RowItem, RowSeparator } from "../components/RowItem";
import currencies from "../data/currencies.json";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },
});

const CurrencyList = ({ navigation, route = {} }) => {
  const inset = useSafeArea();

  const params = route.params || {};
  const { activeCurrency } = params;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          const selected = activeCurrency === item;

          return (
            <RowItem
              text={item}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={Colors.white} />
                  </View>
                )
              }
              onPress={() => {
                params.onChange(item);
                navigation.pop();
              }}
            />
          );
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
