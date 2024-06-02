import React from 'react';
import {HomeScreen} from '@/screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {AppTabBar} from './AppTabBar';
import {View} from 'react-native';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
};
const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => <AppTabBar {...props} />}>
        <Tab.Screen name={'HomeScreen'} component={HomeScreen} />
        <Tab.Screen name={'SettingsScreen'} component={View} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
