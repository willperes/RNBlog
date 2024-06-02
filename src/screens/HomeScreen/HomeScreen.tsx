import {PostCard, Screen, Text} from '@/components';
import React, {useRef} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PostSummary, usePostList} from '@/domain';
import {useAppSafeArea, useAppTheme} from '@/hooks';
import {useScrollToTop} from '@react-navigation/native';

export function HomeScreen() {
  const {top} = useAppSafeArea();
  const {data} = usePostList();
  const {spacing} = useAppTheme();
  const flatListRef = useRef<FlatList<PostSummary>>(null);
  useScrollToTop(flatListRef);

  function renderItem({item}: ListRenderItemInfo<PostSummary>) {
    return <PostCard {...item} />;
  }

  return (
    <Screen style={{paddingTop: 0, paddingBottom: 0}}>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={({id}) => id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <Text preset={'headingLarge'} weight={'bold'} mt={'s4'}>
            Posts
          </Text>
        }
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: top,
          paddingBottom: spacing.screenPadding,
          gap: spacing.s16,
        }}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
