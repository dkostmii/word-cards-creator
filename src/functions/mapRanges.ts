function validateRange(range: [number, number]) {
  if (range[0] >= range[1]) {
    let msg = `Got range[0] > range[1]: ${range[0]} > ${range[1]}`;

    if (range[0] === range[1]) {
      msg = `Got range[0] === range[1]: ${range[0]} === ${range[1]}`;
    }

    throw new Error('Expected range[0] to be strictly less than range[1].' + msg);
  }
}

function validateRanges(ranges: [number, number][]) {
  ranges.forEach((range, rangeId) => {
    validateRange(range);

    const overlapping = ranges.filter((another, anotherId) => {
      return (
        anotherId !== rangeId &&
        (
          (another[1] >= range[0] && another[1] <= range[1]) ||
          (another[0] <= range[1] && another[0] >= range[0])
        )
      );
    });

    if (overlapping.length > 0) {
      throw new Error(`Expected non-overlapping ranges. Got ${overlapping} which overlap with ${range}.`);
    }
  });
}

function validateMapping(ranges: [number, number][], mapping: number[]) {
  if (ranges.length !== mapping.length) {
    throw new Error('Expected ranges.length === mapping.length.');
  }
}

function mapRanges(value: number, ranges: [number, number][], mapping: number[]): number {
  validateRanges(ranges);
  validateMapping(ranges, mapping);

  const rangeId = ranges.findIndex(range => value >= range[0] && value <= range[1]);

  if (rangeId === -1) {
    throw new Error(`No corresponding range for value ${value}.`);
  }

  return mapping[rangeId];
}

export default mapRanges;
