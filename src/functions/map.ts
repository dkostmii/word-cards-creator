import clamp from "./clamp";

function map(value: number, valueMin: number, valueMax: number, min: number, max: number, clampValue: boolean = false): number {
  if (valueMin > valueMax) {
    throw new Error('Expected valueMin to be less or equal to valueMax');
  }

  if (min > max) {
    throw new Error('Expected min to be less or equal to max');
  }

  if (!clampValue) {
    if (value < valueMin || value > valueMax) {
      throw new Error(`Expected value to be in range [${valueMin}, ${valueMax}]. Got: ${value}`);
    }
  } else {
    value = clamp(value, valueMin, valueMax);
  }

  const valueRange = valueMax - valueMin;

  const normValue = (value - valueMin) / valueRange;

  const newRange = max - min;

  const newValue = normValue * newRange + min;

  return newValue;
}

export default map;