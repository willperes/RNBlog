/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Routes} from '@/routes';
import {darkTheme, theme} from '@/theme';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <ApolloProvider client={apolloClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : theme}>
          <Routes />
        </ThemeProvider>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}

export default App;
