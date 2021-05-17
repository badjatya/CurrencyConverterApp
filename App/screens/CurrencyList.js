import React from "react";
import { View, StatusBar } from "react-native";

import Colors from "../constants/Colors";

const CurrencyList = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
    </View>
  );
};

export default CurrencyList;
