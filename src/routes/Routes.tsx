import React from 'react';
import {HomeScreen} from '@/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name={'Home'} component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
