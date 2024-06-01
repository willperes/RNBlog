import React from 'react';

import {Theme} from '@/theme';
import {createText} from '@shopify/restyle';

const SRText = createText<Theme>();
type SRTextProps = React.ComponentProps<typeof SRText>;

export function Text({children, ...srTextProps}: SRTextProps) {
  return (
    <SRText color={'backgroundContrast'} {...srTextProps}>
      {children}
    </SRText>
  );
}
