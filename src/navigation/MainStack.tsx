import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import TaskDetailsScreen from "./screens/TaskDetailsScreen";
import CreateTaskScreen from "./screens/CreateTaskScreen";
import { navigationRef } from "@/services/RootNavigation";
import { Category } from "@/redux/slices/todoSlice";


export type StackParams = {
    Home: undefined;
    Details: {
        name: string;
        desc: string;
        id: number;
        category: Category
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
                <Stack.Group>
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Group>
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen name="Details" component={TaskDetailsScreen} />
                    <Stack.Screen name="Create" component={CreateTaskScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack