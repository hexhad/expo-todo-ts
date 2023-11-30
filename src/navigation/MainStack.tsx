import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import TaskDetailsScreen from "./screens/TaskDetailsScreen";
import CreateTaskScreen from "./screens/CreateTaskScreen";
import { navigationRef } from "@/services/RootNavigation";


export type StackParams =  {
    Home: undefined;
    Details: {
        name: string;
        desc: string;
        uuid: number;
    };
    Create: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();

const MainStack: React.FC = () => {

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false
                }} >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={TaskDetailsScreen} />
                <Stack.Screen name="Create" component={CreateTaskScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack