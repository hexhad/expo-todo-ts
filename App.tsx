import React from "react";
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native'
import MainStack from "@/navigation/MainStack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/redux/store";
import { NativeWindStyleSheet } from "nativewind";
import 'react-native-gesture-handler'

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainStack />
      </PersistGate>
    </Provider>
  );
}

export default App;