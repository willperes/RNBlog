import {Box, Text} from '@/components';
import React, {useMemo} from 'react';
import {PostAuthor} from './PostAuthor';
import {Post} from '@/domain';

type Props = Pick<Post, 'author' | 'title' | 'createdAt' | 'updatedAt'>;

export function PostHeader({author, title, createdAt, updatedAt}: Props) {
  const [creationDateText, updateDateText] = useMemo(() => {
    const createdAtFormatted = createdAt.toLocaleDateString();
    if (createdAt.getTime() === updatedAt.getTime()) {
      return [createdAtFormatted, null];
    }

    return [createdAtFormatted, `Updated at ${updatedAt.toLocaleDateString()}`];
  }, [createdAt, updatedAt]);

  return (
    <Box>
      <Text preset={'headingLarge'}>{title}</Text>

      <PostAuthor author={author} />

      <Text preset={'paragraphSmall'} mt={'s10'}>
        {creationDateText}
      </Text>
      {updateDateText && (
        <Text preset={'paragraphCaption'}>{updateDateText}</Text>
      )}
    </Box>
  );
}
