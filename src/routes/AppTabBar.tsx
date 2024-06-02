import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {
  Box,
  BoxProps,
  Text,
  TextProps,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@/components';
import {$shadowProps} from '@/theme';

import {useAppSafeArea} from '../hooks/useAppSafeArea';

import {AppTabBottomTabParamList} from './AppTabNavigator';
import {mapScreenToProps} from './mapScreenToProps';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppTheme} from '@/hooks';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  return (
    <Box style={[{paddingBottom: bottom}, $shadowProps]} {...$boxWrapper}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            key={route.name}
            {...$itemWrapper}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Ionicons
              size={24}
              color={isFocused ? colors.primary : colors.backgroundContrast}
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
            />
            <Text
              color={isFocused ? 'primary' : 'backgroundContrast'}
              {...$label}>
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

const $label: TextProps = {
  preset: 'paragraphCaption',
  mt: 's4',
  weight: 'semiBold',
};

const $itemWrapper: TouchableOpacityBoxProps = {
  activeOpacity: 1,
  accessibilityRole: 'button',
  alignItems: 'center',
  style: {flex: 1},
};

const $boxWrapper: BoxProps = {
  pt: 's12',
  flexDirection: 'row',
  backgroundColor: 'background',
  borderTopWidth: 1,
  borderTopColor: 'backgroundBorder',
};
