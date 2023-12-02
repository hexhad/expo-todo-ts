import React from "react";
import { Text, View } from "react-native";

type Props = {};

const DummyComponent: React.FC<Props> = () => {
  return (
    <View className={"flex-1 items-center justify-center bg-white"}>
      <Text className={"text-white border-dashed border-4 border-teal-600 bg-teal-400 p-8 inline-block"}>Open up App.js to start working on your app!</Text>
    </View>
  );
}

export default DummyComponent;