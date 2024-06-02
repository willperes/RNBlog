import React from 'react';
import {Box, ProfileAvatar, Text} from '@/components';
import {Post} from '@/domain';

export function PostAuthor({author}: Pick<Post, 'author'>) {
  return (
    <Box mt={'s10'} flexDirection={'row'} alignItems={'center'}>
      <ProfileAvatar imageURL={author.imageURL} />
      <Text ml={'s4'} preset={'paragraphSmall'}>
        {author.name}
      </Text>
    </Box>
  );
}
