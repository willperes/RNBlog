import React from 'react';

import {Text} from '@/components';
import {PostElement} from '@/domain';
import {Dimensions, Image} from 'react-native';
import {useAppTheme} from '@/hooks';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const IMAGE_HEIGHT = SCREEN_WIDTH * 0.55;

function Content({type, content}: PostElement) {
  const {borderRadii} = useAppTheme();

  switch (type) {
    case PostElement.Type.Title:
      return <Text preset={'headingMedium'}>{content}</Text>;

    case PostElement.Type.Subtitle:
      return (
        <Text preset={'paragraphLarge'} weight={'bold'}>
          {content}
        </Text>
      );

    case PostElement.Type.Paragraph:
      return <Text preset={'paragraphMedium'}>{content}</Text>;

    case PostElement.Type.Image:
      return (
        <Image
          src={content}
          style={{height: IMAGE_HEIGHT, borderRadius: borderRadii.s8}}
          resizeMode={'cover'}
        />
      );

    default:
      return null;
  }
}

export function PostBodyElement(postElement: PostElement) {
  return <Content {...postElement} />;
}
