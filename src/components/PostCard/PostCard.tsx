import React from 'react';
import {Post} from '@/domain';
import {Box, BoxProps} from '../Box/Box';
import {PostCardFooter} from './components/PostCardFooter';
import {Theme} from '@/theme';
import {PostCardContent} from './components/PostCardContent';

type Props = Pick<Post, 'title' | 'author' | 'coverImageURL' | 'createdAt'>;

const CARD_PADDING: keyof Theme['spacing'] = 's14';

export function PostCard({title, author, coverImageURL, createdAt}: Props) {
  return (
    <Box {...$boxStyle}>
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
    </Box>
  );
}

const $boxStyle: BoxProps = {
  backgroundColor: 'cardBackground',
  borderRadius: 's12',
};

const $footerBoxStyle: BoxProps = {
  borderTopWidth: 1,
  borderTopColor: 'cardBackgroundSecondary',
};
