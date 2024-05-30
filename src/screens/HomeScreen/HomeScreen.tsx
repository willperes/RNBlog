import {Box, Screen} from '@/components';
import React from 'react';
import {Text} from '@/components';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PostSummary, usePostList} from '@/domain';

export function HomeScreen() {
  const {data} = usePostList();

  function renderItem({item}: ListRenderItemInfo<PostSummary>) {
    return (
      <Box mt={'s10'}>
        <Text>{item.title}</Text>
        <Text>{item.author.name}</Text>
      </Box>
    );
  }

  return (
    <Screen>
      <FlatList
        data={data}
        keyExtractor={({id}) => id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{flexGrow: 1}}
      />
    </Screen>
  );
}
