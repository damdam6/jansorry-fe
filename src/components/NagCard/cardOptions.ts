export const cardCategoryMap: Map<
  number,
  'empty' | 'blue' | 'emerald' | 'green' | 'purple' | 'red' | 'yellow'
> = new Map([
  [0, 'empty'],
  [1, 'blue'],
  [2, 'emerald'],
  [3, 'green'],
  [4, 'purple'],
  [5, 'red'],
  [6, 'yellow'],
]);

export const cardTypesMap: Map<number, 'empty' | 'front' | 'back'> = new Map([
  [0, 'empty'],
  [1, 'front'],
  [2, 'back'],
]);

export const cardSizeMap: Map<number, 'xSmall' | 'small' | 'medium' | 'large'> =
  new Map([
    [0, 'xSmall'],
    [1, 'small'],
    [2, 'medium'],
    [3, 'large'],
  ]);

export const textStyleMap: Map<number, 'comment' | 'nag' | 'category'> =
  new Map([
    [0, 'comment'],
    [1, 'nag'],
    [2, 'category'],
  ]);
