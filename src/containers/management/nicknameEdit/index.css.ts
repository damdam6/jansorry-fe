import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';
import { flex } from '@/styles/common.css';

export const nicknameEditWrapper = style([
  flex({ justify: 'spaceAround', align: 'center', direction: 'column' }),
  {
    position: 'relative',
    top: 0,
    boxSizing: 'border-box',
    height: '100%',
    paddingTop: '10%',
    paddingBottom: '10%',
  },
]);

export const nicknameEditTitle = style([
  flex({ justify: 'center', align: 'center', direction: 'column' }),
  {
    paddingTop: vars.space['2x'],
    paddingBottom: vars.space['2x'],
    fontSize: vars.fontSize['3x'],
    fontWeight: vars.fontWeight.accent,
  },
]);

export const nicknameEditContent = style({
  padding: vars.space['1x'],
  fontSize: vars.fontSize['2x'],
});

export const nicknameErrorContent = style({
  padding: vars.space['1x'],
  fontSize: vars.fontSize['2x'],
  color: vars.colors.strongRed,
  height: vars.space['3x'],
});

export const nicknameInputWrapper = style([
  flex({ justify: 'center', align: 'center' }),
  {
    paddingTop: vars.space['3x'],
    paddingBottom: vars.space['3x'],
    width: 'auto',
  },
]);

export const nicknameInputStyle = style({
  padding: vars.space['2x'],
  border: 'none',
  ':focus': {
    outline: 'none',
  },
  borderRadius: vars.borderRadius['2x'],
  backgroundColor: vars.colors.whitesmoke,
  fontSize: vars.fontSize['2x'],
  width: '80%',
  height: vars.space['3x'],
});
