import React from 'react';

import {Box, BoxProps} from '@/components';
import {PostCardTitle} from './PostCardTitle';
import {PostCardCoverImage} from './PostCardCoverImage';
import {Theme} from '@/theme';
import {Post} from '@/domain';

type Props = {
  cardPadding: keyof Theme['spacing'];
} & Pick<Post, 'title' | 'coverImageURL'>;

export function PostCardContent({cardPadding, title, coverImageURL}: Props) {
  return (
    <Box p={cardPadding} gap={cardPadding} {...$boxStyle}>
      <PostCardTitle title={title} />
      <PostCardCoverImage coverImageURL={coverImageURL} />
    </Box>
  );
}

const $boxStyle: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};
