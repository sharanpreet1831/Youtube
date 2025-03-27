import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screen/HomeScreen';
import Search from '../screen/Search';

const Stack = createStackNavigator();

const Stacknavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}  >
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacknavigation;