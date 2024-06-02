import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppTabNavigator, AppTabBottomTabParamList} from './AppTabNavigator';
import {PostScreen} from '@/screens';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  PostScreen: {postID: number};
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'AppTabNavigator'} component={AppTabNavigator} />
      <Stack.Screen name={'PostScreen'} component={PostScreen} />
    </Stack.Navigator>
  );
}
