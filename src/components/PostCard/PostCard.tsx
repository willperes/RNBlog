import React from 'react';
import {Post} from '@/domain';
import {Box, BoxProps} from '../Box/Box';
import {PostCardCoverImage} from './components/PostCardCoverImage';
import {PostCardContent} from './components/PostCardContent';
import {PostCardFooter} from './components/PostCardFooter';
import {Theme} from '@/theme';

type Props = Pick<Post, 'title' | 'author' | 'coverImageURL' | 'createdAt'>;

const CARD_PADDING: keyof Theme['spacing'] = 's14';

export function PostCard({title, author, coverImageURL, createdAt}: Props) {
  return (
    <Box {...$boxStyle}>
      <Box {...$contentBoxStyle}>
        <PostCardContent title={title} />
        <PostCardCoverImage coverImageURL={coverImageURL} />
      </Box>
      <Box {...$footerBoxStyle}>
        <PostCardFooter author={author} createdAt={createdAt} />
      </Box>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  backgroundColor: 'cardBackground',
  borderRadius: 's12',
};

const $contentBoxStyle: BoxProps = {
  p: CARD_PADDING,
  gap: CARD_PADDING,
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const $footerBoxStyle: BoxProps = {
  paddingHorizontal: CARD_PADDING,
  paddingVertical: 's8',
  borderTopWidth: 1,
  borderTopColor: 'cardBackgroundSecondary',
};
