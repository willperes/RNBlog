import {Theme} from '@/theme';
import {createBox} from '@shopify/restyle';
import {ComponentProps} from 'react';

export const Box = createBox<Theme>();
export type BoxProps = ComponentProps<typeof Box>;
