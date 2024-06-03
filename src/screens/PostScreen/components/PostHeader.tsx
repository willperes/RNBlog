import {Box, Text} from '@/components';
import React from 'react';
import {PostAuthor} from './PostAuthor';
import {Post} from '@/domain';
import {Dimensions, Image} from 'react-native';
import {useAppTheme} from '@/hooks';
import {PostDate} from './PostDate';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const IMAGE_HEIGHT = SCREEN_WIDTH * 0.6;

type Props = Pick<
  Post,
  'author' | 'coverImageURL' | 'title' | 'createdAt' | 'updatedAt'
>;

export function PostHeader({
  author,
  coverImageURL,
  title,
  createdAt,
  updatedAt,
}: Props) {
  const {spacing} = useAppTheme();

  return (
    <Box>
      <Text preset={'headingLarge'}>{title}</Text>

      <PostAuthor author={author} />

      <PostDate createdAt={createdAt} updatedAt={updatedAt} />

      <Box mt={'s10'}>
        <Image
          src={coverImageURL}
          style={{
            height: IMAGE_HEIGHT,
            marginHorizontal: spacing.screenPadding * -1,
          }}
          resizeMode={'cover'}
        />
      </Box>
    </Box>
  );
}
