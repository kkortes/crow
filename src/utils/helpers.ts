// @ts-ignore
export const filterSplit = (array: any[], condition) =>
  array.reduce(
    ([hits, misses], item) =>
      condition(item) ? [[...hits, item], misses] : [hits, [...misses, item]],
    [[], []]
  );
