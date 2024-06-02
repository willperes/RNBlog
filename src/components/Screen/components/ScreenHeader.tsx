import React from 'react';
import {Box} from '@/components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppTheme} from '@/hooks';
import {useNavigation} from '@react-navigation/native';

interface Props {
  canGoBack: boolean;
}

export function ScreenHeader({canGoBack}: Props) {
  const {colors} = useAppTheme();
  const navigation = useNavigation();

  return canGoBack ? (
    <Box paddingVertical={'screenPadding'}>
      <Ionicons
        name={'arrow-back'}
        size={24}
        color={colors.backgroundContrast}
        onPress={navigation.goBack}
      />
    </Box>
  ) : null;
}
