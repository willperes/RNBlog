import React from 'react';
import {Post} from '@/domain';
import {Box, BoxProps} from '../Box/Box';
import {PostCardCoverImage} from './components/PostCardCoverImage';
import {PostCardContent} from './components/PostCardContent';

type Props = Pick<Post, 'title' | 'author' | 'coverImageURL' | 'createdAt'>;

export function PostCard({title, author, coverImageURL, createdAt}: Props) {
  return (
    <Box {...$boxStyle}>
      <PostCardContent author={author} createdAt={createdAt} title={title} />
      <PostCardCoverImage coverImageURL={coverImageURL} />
    </Box>
  );
}

const $boxStyle: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  mt: 's10',
  backgroundColor: 'cardBackground',
  borderRadius: 's12',
  padding: 's12',
  gap: 's12',
};
