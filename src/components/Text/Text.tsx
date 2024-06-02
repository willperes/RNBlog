import React from 'react';

import {Theme} from '@/theme';
import {createText} from '@shopify/restyle';
import {TextStyle} from 'react-native';

const SRText = createText<Theme>();
type SRTextProps = React.ComponentProps<typeof SRText>;

export interface TextProps extends SRTextProps {
  preset?: TextPreset;
  weight?: FontWeight;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  weight = 'regular',
  style,
  ...srTextProps
}: TextProps) {
  return (
    <SRText
      color={'backgroundContrast'}
      style={[$fontSizes[preset], $fontWeights[weight], style]}
      {...srTextProps}>
      {children}
    </SRText>
  );
}

type TextPreset =
  | 'headingLarge'
  | 'headingSmall'
  | 'headingMedium'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const $fontSizes: Record<
  TextPreset,
  Pick<TextStyle, 'fontSize' | 'lineHeight'>
> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 19, lineHeight: 14},
};

const $fontWeights: Record<FontWeight, Pick<TextStyle, 'fontWeight'>> = {
  bold: {fontWeight: '700'},
  semiBold: {fontWeight: '600'},
  regular: {fontWeight: '500'},
};

type FontWeight = 'bold' | 'semiBold' | 'regular';
// type FontStyle = 'normal' | 'italic';
