import React from 'react';
import {Box, Text} from '@/components';
import {Post} from '@/domain';

type Props = Pick<Post, 'title'>;

export function PostCardContent({title}: Props) {
  return (
    <Box flexGrow={1} flexShrink={1}>
      <Text
        preset={'headingSmall'}
        weight={'bold'}
        numberOfLines={4}
        lineBreakMode="tail">
        {title}
      </Text>
    </Box>
  );
}
