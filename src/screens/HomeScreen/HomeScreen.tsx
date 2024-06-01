import {PostCard, Screen} from '@/components';
import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PostSummary, usePostList} from '@/domain';
import {useAppSafeArea, useAppTheme} from '@/hooks';

export function HomeScreen() {
  const {top, bottom} = useAppSafeArea();
  const {data} = usePostList();
  const {spacing} = useAppTheme();

  function renderItem({item}: ListRenderItemInfo<PostSummary>) {
    return <PostCard {...item} />;
  }

  return (
    <Screen style={{paddingTop: 0, paddingBottom: 0}}>
      <FlatList
        data={data}
        keyExtractor={({id}) => id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: top,
          paddingBottom: bottom,
          gap: spacing.s16,
        }}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
