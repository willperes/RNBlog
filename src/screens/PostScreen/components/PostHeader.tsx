import {Box, Text} from '@/components';
import React, {useMemo} from 'react';
import {PostAuthor} from './PostAuthor';
import {Post} from '@/domain';
import {Dimensions, Image} from 'react-native';
import {useAppTheme} from '@/hooks';

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

      <Box mt={'s10'} mb={'s8'}>
        <Text preset={'paragraphSmall'}>{creationDateText}</Text>
        {updateDateText && (
          <Text preset={'paragraphCaption'}>{updateDateText}</Text>
        )}
      </Box>

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
