import React from 'react';
import {ScrollView, View} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {useAppSafeArea} from '@/hooks';
import {ScreenHeader} from './components/ScreenHeader';

interface Props extends BoxProps {
  scrollable?: boolean;
  canGoBack?: boolean;
}

export function Screen({
  children,
  scrollable = false,
  canGoBack = false,
  style,
  ...boxProps
}: React.PropsWithChildren<Props>) {
  const {top, bottom} = useAppSafeArea();

  const Container = scrollable ? ScrollView : View;

  return (
    <Box
      flex={1}
      paddingHorizontal={'screenPadding'}
      backgroundColor={'background'}
      style={[{paddingTop: top, paddingBottom: bottom}, style]}
      {...boxProps}>
      <ScreenHeader canGoBack={canGoBack} />
      <Container style={{flex: 1}}>{children}</Container>
    </Box>
  );
}
