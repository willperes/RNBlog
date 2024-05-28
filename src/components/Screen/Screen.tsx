import React from 'react';
import {ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  scrollable?: boolean;
}

export function Screen({
  children,
  scrollable = false,
}: React.PropsWithChildren<Props>) {
  const {top, bottom} = useSafeAreaInsets();

  const Container = scrollable ? ScrollView : View;

  return (
    <View style={{flex: 1, paddingTop: top, paddingBottom: bottom}}>
      <Container>{children}</Container>
    </View>
  );
}
