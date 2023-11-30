import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

const Dummy = () => <View><Text>Hello</Text></View>

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Bottom1" component={Dummy} />
    </Tab.Navigator>
  );
}

export default BottomTabs;