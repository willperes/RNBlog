import {Theme} from '@/theme';
import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingProps,
  SpacingShorthandProps,
  backgroundColor,
  border,
  createBox,
  createRestyleComponent,
  layout,
  spacing,
  spacingShorthand,
} from '@shopify/restyle';
import {ComponentProps} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export const Box = createBox<Theme>();
export type BoxProps = ComponentProps<typeof Box>;

type RestyleTypes = BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme>;

export type TouchableOpacityBoxProps = TouchableOpacityProps & RestyleTypes;
export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
