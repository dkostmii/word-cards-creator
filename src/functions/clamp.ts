function clamp(value: number, min: number, max: number) {
  if (min > max) {
    throw new Error('Expected min to be less or equal to max');
  }

  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  }

  return value;
}

export default clamp;
