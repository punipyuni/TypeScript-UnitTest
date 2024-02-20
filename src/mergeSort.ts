function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
  const merged: number[] = [];

  let i = 0;
  let j = 0;
  let k = collection3.length - 1;

  while (i < collection1.length || j < collection2.length || k >= 0) {
      const val1 = i < collection1.length ? collection1[i] : Number.POSITIVE_INFINITY;
      const val2 = j < collection2.length ? collection2[j] : Number.POSITIVE_INFINITY;
      const val3 = k >= 0 ? collection3[k] : Number.POSITIVE_INFINITY;

      const min = Math.min(val1, val2, val3);

      if (val1 === min) {
          merged.push(collection1[i++]);
      } else if (val2 === min) {
          merged.push(collection2[j++]);
      } else {
          merged.push(collection3[k--]);
      }
  }

  return merged;
}

export default merge;


