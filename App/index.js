import React from "react";
import { ConversionContextProvider } from "./util/ConversionContext";
import Navigation from "./config/Navigation";

import { api } from "./util/api";

api("/latest?base=USD")
  .then((res) => console.log(res))
  .catch((err) => console.log("err", err));

const App = () => {
  return (
    <ConversionContextProvider>
      <Navigation />
    </ConversionContextProvider>
  );
};

export default App;
