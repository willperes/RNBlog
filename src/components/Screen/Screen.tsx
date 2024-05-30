import React from 'react';
import {ScrollView, View} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {useAppSafeArea} from '@/hooks';

interface Props extends BoxProps {
  scrollable?: boolean;
}

export function Screen({
  children,
  scrollable = false,
  ...boxProps
}: React.PropsWithChildren<Props>) {
  const {top, bottom} = useAppSafeArea();

  const Container = scrollable ? ScrollView : View;

  return (
    <Box
      flex={1}
      paddingHorizontal={'screenPadding'}
      style={{paddingTop: top, paddingBottom: bottom}}
      {...boxProps}>
      <Container style={{flex: 1}}>{children}</Container>
    </Box>
  );
}
