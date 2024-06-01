import React from 'react';

import {Post} from '@/domain';
import {useAppTheme} from '@/hooks';
import {Dimensions, Image} from 'react-native';

type Props = Pick<Post, 'coverImageURL'>;

const COVER_IMAGE_SIZE = Dimensions.get('screen').width * 0.28;

export function PostCardCoverImage({coverImageURL}: Props) {
  const {borderRadii} = useAppTheme();

  return (
    <Image
      src={coverImageURL}
      style={{
        height: COVER_IMAGE_SIZE,
        width: COVER_IMAGE_SIZE,
        borderRadius: borderRadii.s8,
      }}
    />
  );
}
