import {AppTabBottomTabParamList} from './Routes';

type AppTabScreen = keyof AppTabBottomTabParamList;
type Props = {
  label: string;
  icon: {
    focused: string;
    unfocused: string;
  };
};

export const mapScreenToProps: Record<AppTabScreen, Props> = {
  HomeScreen: {
    label: 'Home',
    icon: {
      focused: 'home',
      unfocused: 'home-outline',
    },
  },
  SettingsScreen: {
    label: 'Settings',
    icon: {
      focused: 'settings',
      unfocused: 'settings-outline',
    },
  },
};
