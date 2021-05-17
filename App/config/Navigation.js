import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";

import Home from "../screens/Home";
import Options from "../screens/Options";
import CurrencyList from "../screens/CurrencyList";
import Colors from "../constants/Colors";

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{ headerTitleAlign: "center" }}
      //   headerMode="none"
    >
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="Options" component={Options} />
    </MainStack.Navigator>
  );
};

const ModalStack = createStackNavigator();

const ModalStackScreen = () => {
  return (
    <ModalStack.Navigator
      mode="modal"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <ModalStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />

      <ModalStack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={({ route, navigation }) => ({
          title: route.params.title,
          headerLeft: null,
          headerRight: () => (
            <TouchableOpacity
              style={{ padding: 20 }}
              onPress={() => navigation.pop()}
            >
              <Entypo name="cross" size={30} color={Colors.blue} />
            </TouchableOpacity>
          ),
        })}
      />
    </ModalStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <ModalStackScreen />
    </NavigationContainer>
  );
};
