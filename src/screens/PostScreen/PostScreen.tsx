import React from 'react';
import {Screen, Text} from '@/components';
import {AppScreenProps} from '@/routes';
import {PostElement, usePostDetails} from '@/domain';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PostHeader} from './components/PostHeader';
import {PostBodyElement} from './components/PostBodyElement';
import {useAppTheme} from '@/hooks';

export function PostScreen({route}: AppScreenProps<'PostScreen'>) {
  const {postID} = route.params;

  const {data: post} = usePostDetails(postID);
  const {spacing} = useAppTheme();

  function renderItem({item}: ListRenderItemInfo<PostElement>) {
    return <PostBodyElement {...item} />;
  }

  return (
    <Screen canGoBack noHorizontalPading>
      {!post ? (
        <Text>{`postID: ${postID}`}</Text>
      ) : (
        <FlatList
          data={post.elements}
          renderItem={renderItem}
          ListHeaderComponent={<PostHeader {...post} />}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: spacing.screenPadding,
            gap: spacing.s12,
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Screen>
  );
}
