import React from 'react';
import {Box, Text} from '@/components';
import {Post} from '@/domain';

type Props = Pick<Post, 'title' | 'author' | 'createdAt'>;

export function PostCardContent({author, createdAt, title}: Props) {
  return (
    <Box flexGrow={1}>
      <Text>{title}</Text>
      <Text>{author.name}</Text>
      <Text>{createdAt.toLocaleDateString()}</Text>
    </Box>
  );
}
