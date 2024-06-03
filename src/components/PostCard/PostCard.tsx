import React from 'react';
import {Post} from '@/domain';
import {Box, BoxProps, PressableBox, PressableBoxProps} from '../Box/Box';
import {PostCardFooter} from './components/PostCardFooter';
import {Theme} from '@/theme';
import {PostCardContent} from './components/PostCardContent';
import {useNavigation} from '@react-navigation/native';

type Props = Pick<
  Post,
  'id' | 'title' | 'author' | 'coverImageURL' | 'createdAt'
>;

const CARD_PADDING: keyof Theme['spacing'] = 's14';

export function PostCard({id, title, author, coverImageURL, createdAt}: Props) {
  const navigation = useNavigation();

  function navigateToPostScreen() {
    navigation.navigate('PostScreen', {postID: id});
  }

  return (
    <PressableBox
      testID={`post-card-${id}`}
      {...$boxStyle}
      onPress={navigateToPostScreen}>
      <PostCardContent
        cardPadding={CARD_PADDING}
        coverImageURL={coverImageURL}
        title={title}
      />
      <Box {...$footerBoxStyle}>
        <PostCardFooter
          cardPadding={CARD_PADDING}
          author={author}
          createdAt={createdAt}
        />
      </Box>
    </PressableBox>
  );
}

const $boxStyle: PressableBoxProps = {
  backgroundColor: 'cardBackground',
  borderRadius: 's12',
};

const $footerBoxStyle: BoxProps = {
  borderTopWidth: 1,
  borderTopColor: 'cardBackgroundSecondary',
};
