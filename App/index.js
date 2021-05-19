import React from "react";

import { ConversionContextProvider } from "./util/ConversionContext";
import Navigation from "./config/Navigation";

const App = () => {
  return (
    <ConversionContextProvider>
      <Navigation />
    </ConversionContextProvider>
  );
};

export default App;
