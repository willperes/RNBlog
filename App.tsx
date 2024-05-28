/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {HomeScreen} from '@/screens';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}

export default App;
