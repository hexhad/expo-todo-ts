import React from "react";
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native'
import MainStack from "@/navigation/MainStack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/redux/store";

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