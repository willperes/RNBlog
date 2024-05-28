/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {HomeScreen} from '@/screens';
import {darkTheme, theme} from '@/theme';
import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : theme}>
        <HomeScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
