import React from 'react';
import {Image} from 'react-native';
import {Box, BoxProps} from '../Box/Box';

interface Props {
  imageURL: string;
  size?: number;
  boxProps?: Partial<BoxProps>;
}

export function ProfileAvatar({imageURL, size = 40, ...boxProps}: Props) {
  return (
    <Box {...boxProps}>
      <Image
        src={imageURL}
        style={{height: size, width: size, borderRadius: 1000}}
      />
    </Box>
  );
}
