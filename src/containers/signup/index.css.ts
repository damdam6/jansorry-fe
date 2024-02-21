import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { defaultWrapper, flex } from '@/styles/common.css';
import { vars } from '@/styles/vars.css';

export const signupBg = style({
  position: 'absolute',
  width: '100%',
  height: 'auto',
  bottom: '0%',
});

export const birthGenderWrapper = style([
  flex({ align: 'center', justify: 'spaceBetween', direction: 'column' }),
  {
    position: 'relative',
    top: 0,
    boxSizing: 'border-box',
    height: '100%',
    paddingTop: '20%',
    paddingBottom: '20%',
  },
]);

export const selectWrapper = recipe({
  base: {
    overflowY: 'auto',
    height: '186px',
    boxSizing: 'border-box',

    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
  variants: {
    content: {
      yearPicker: {},
      genderButtons: [
        flex({ justify: 'spaceAround', direction: 'column' }),
        {
          overflowY: 'visible',
        },
      ],
    },
  },
});

export const yearPickerBox = recipe({
  base: [
    flex({
      justify: 'center',
      align: 'center',
    }),
    {
      width: '120px',
      height: '64px',
      paddingRight: '10px',
      paddingLeft: '10px',
      borderRadius: '16px',
      cursor: 'pointer',
      fontSize: '32px',
    },
  ],
  variants: {
    show: {
      hidden: {
        visibility: 'hidden',
      },
    },
  },
});

export const yearPickerBoxVariants = styleVariants({
  selected: {
    backgroundColor: vars.colors.babyBlue,
  },
  unselected: {
    backgroundColor: 'transparent',
  },
});
export const prevNextButton = style([
  flex({
    direction: 'row',
    justify: 'spaceBetween',
  }),
  defaultWrapper({
    width: 'max',
  }),
  {
    paddingRight: '10%',
    paddingLeft: '10%',
    boxSizing: 'border-box',
  },
]);
export const signupText = recipe({
  base: {
    visibility: 'visible',
    textAlign: 'center',
  },
  variants: {
    text: {
      title: {
        fontSize: vars.fontSize['3x'],
        fontWeight: vars.fontWeight.accent,
      },
      birthNumber: {
        fontSize: vars.fontSize['2x'],
      },
      underAgeNotice: {
        fontSize: vars.fontSize['2x'],
        color: vars.colors.strongRed,
        paddingTop: vars.space['0.5x'],
      },
    },
    visible: {
      hidden: {
        visibility: 'hidden',
      },
      show: {},
    },
  },
});
