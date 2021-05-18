import React, { useState, useContext } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { format } from "date-fns";
import { Entypo } from "@expo/vector-icons";
import { ConversionContext } from "../util/ConversionContext";

import Colors from "../constants/Colors";
import ConversionInput from "../components/ConversionInput";
import Button from "../components/Button";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    flex: 1,
    justifyContent: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 14,
  },
  navButton: {
    position: "absolute",
    top: 20,
    right: 25,
  },
});

const Home = ({ navigation }) => {
  const { baseCurrency, quoteCurrency, swapCurrency, date, rates } =
    useContext(ConversionContext);

  const [value, setValue] = useState("100");
  const conversionRate = rates[quoteCurrency];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.blue} />

      <SafeAreaView style={styles.navButton}>
        <TouchableOpacity onPress={() => navigation.push("Options")}>
          <Entypo name="cog" size={32} color={Colors.white} />
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/background.png")}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.textHeader}>Currency Converter</Text>

      <ConversionInput
        text={baseCurrency}
        onButtonPress={() =>
          navigation.push("CurrencyList", {
            title: "Base Currency",
            isBaseCurrency: true,
          })
        }
        value={value}
        onChangeText={(text) => setValue(text)}
        keyboardType="numeric"
      />
      <ConversionInput
        text={quoteCurrency}
        onButtonPress={() =>
          navigation.push("CurrencyList", {
            title: "Quote Currency",
            isBaseCurrency: false,
          })
        }
        value={value && `${(parseFloat(value) * conversionRate).toFixed(2)}`}
        onChangeText={(text) => console.log("TEXT: ", text)}
        editable={false}
        keyboardType="numeric"
      />

      <Text style={styles.text}>
        {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${
          date && format(new Date(date), "MMM do, yyyy")
        }.`}
      </Text>

      <Button text="Reverse Currencies" onPress={swapCurrency} />
    </View>
  );
};

export default Home;
