import React from 'react';
import {Box, BoxProps, Text} from '@/components';
import {Post} from '@/domain';
import {Theme} from '@/theme';

type Props = {
  cardPadding: keyof Theme['spacing'];
} & Pick<Post, 'author' | 'createdAt'>;

export function PostCardFooter({cardPadding, author, createdAt}: Props) {
  return (
    <Box paddingHorizontal={cardPadding} {...$boxStyle}>
      <Text preset={'paragraphSmall'}>{createdAt.toLocaleDateString()}</Text>
      <Text preset={'paragraphSmall'}>
        {' - '}
        {author.name}
      </Text>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  flexDirection: 'row',
  paddingVertical: 's8',
};
