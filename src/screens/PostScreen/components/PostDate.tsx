import {Box, Text, TextProps} from '@/components';
import {Post} from '@/domain';
import {dateUtils} from '@/utils';
import React from 'react';

export function PostDate({
  createdAt,
  updatedAt,
}: Pick<Post, 'createdAt' | 'updatedAt'>) {
  const {createdDateText, updatedDateText} = dateUtils.formatCreationAndUpdate(
    createdAt,
    updatedAt,
  );

  return (
    <Box mt={'s10'} mb={'s8'} flexDirection={'row'} alignItems={'center'}>
      <Text {...$textStyle}>{createdDateText}</Text>
      {updatedDateText && (
        <Text {...$textStyle}>
          {' - '}
          {updatedDateText}
        </Text>
      )}
    </Box>
  );
}

const $textStyle: TextProps = {
  preset: 'paragraphCaption',
  color: 'textSecondary',
};
