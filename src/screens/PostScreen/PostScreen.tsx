import React from 'react';
import {Screen, Text} from '@/components';
import {AppScreenProps} from 'src/routes/navigationTypes';

export function PostScreen({route}: AppScreenProps<'PostScreen'>) {
  const {postID} = route.params;

  return (
    <Screen>
      <Text>{`postID: ${postID}`}</Text>
    </Screen>
  );
}
