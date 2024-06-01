import React from 'react';
import {Box, Text} from '@/components';
import {Post} from '@/domain';

type Props = Pick<Post, 'author' | 'createdAt'>;

export function PostCardFooter({author, createdAt}: Props) {
  return (
    <Box flexDirection={'row'}>
      <Text preset={'paragraphSmall'}>{createdAt.toLocaleDateString()}</Text>
      <Text preset={'paragraphSmall'}>
        {' - '}
        {author.name}
      </Text>
    </Box>
  );
}
