import React from 'react';
import {Screen, Text} from '@/components';
import {AppScreenProps} from '@/routes';
import {usePostDetails} from '@/domain';
import {FlatList, View} from 'react-native';
import {PostHeader} from './components/PostHeader';

export function PostScreen({route}: AppScreenProps<'PostScreen'>) {
  const {postID} = route.params;

  const {data: post} = usePostDetails(postID);

  return (
    <Screen canGoBack>
      {!post ? (
        <Text>{`postID: ${postID}`}</Text>
      ) : (
        <FlatList
          data={[]}
          renderItem={() => <View />}
          ListHeaderComponent={<PostHeader {...post} />}
          contentContainerStyle={{
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Screen>
  );
}
