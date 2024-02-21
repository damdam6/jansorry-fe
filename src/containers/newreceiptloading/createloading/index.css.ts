import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { defaultWrapper, flex } from '@/styles/common.css';

export const loadingWrapper = style([
  flex({ justify: 'center', align: 'center', direction: 'column' }),
  defaultWrapper({ height: 'max' }),
  {
    textAlign: 'center',
  },
]);

export const title = style({
  '@media': {
    'screen and (max-width: 450px)': {
      fontSize: vars.fontSize['2x'],
    },
  },
  fontSize: vars.fontSize['3x'],
  fontWeight: vars.fontWeight.accent,
  color: vars.colors.brown,
});

export const numberStyle = style({
  '@media': {
    'screen and (max-width: 450px)': {
      fontSize: vars.fontSize['3x'],
    },
  },
  fontSize: vars.fontSize['4x'],
  fontWeight: vars.fontWeight.accent,
  color: vars.colors.brown,
  marginTop: vars.space['2x'],
  marginBottom: vars.space['2x'],
});

export const receipt = style({
  width: 350,
  height: 'auto',
});
