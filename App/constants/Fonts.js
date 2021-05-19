import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    "Roboto-regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
};

export default fetchFonts;
