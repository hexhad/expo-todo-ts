import React from "react";
import MainStack from "@/navigation/MainStack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/redux/store";
import { NativeWindStyleSheet } from "nativewind";
import { GestureHandlerRootView } from "react-native-gesture-handler";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <MainStack />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

export default App;