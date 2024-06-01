import {createTheme} from '@shopify/restyle';

const theme = createTheme({
  colors: {
    background: '#f0f0f0',
    backgroundContrast: '#000000',
    cardBackground: '#ffffff',
    cardBackgroundSecondary: '#e1e1e1',
  },
  spacing: {
    screenPadding: 20,
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;

const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: '#000000',
    backgroundContrast: '#ffffff',
    cardBackground: '#161616',
    cardBackgroundSecondary: '#282828',
  },
};

export {theme, darkTheme};
