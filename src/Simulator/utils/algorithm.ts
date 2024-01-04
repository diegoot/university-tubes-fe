/**
 * It substract a given number of hours to the useful life of each
 * tube in a unit and counts how many broken tubes the unit has.
 * @param tubesUnit
 * @param substractHours
 * @returns tuple with the broken tubes in this iteration and the broken
 * tubes in total (considering previous iterations)
 */
const updateUsefulLifeForUnit = (
  tubesUnit: number[],
  substractHours: number
): [number, number] => {
  let totalBrokenTubes = 0;
  let brokenTubes = 0;
  tubesUnit.forEach(function (value, index, arr) {
    const wasHigherToZero = arr[index] > 0;
    arr[index] -= substractHours;
    if (arr[index] <= 0) {
      totalBrokenTubes++;
      if (wasHigherToZero) brokenTubes++;
    }
  });
  return [totalBrokenTubes, brokenTubes];
};

/**
 * This is the main algorithm.
 * Pre-condition: tubes units are sorted by hour in increasing order.
 * @param originalTubesUnits
 * @param currentTubesUnits
 * @param remainingHours
 * @returns a tuple with the amount of tubes that were broken in the
 * given time and how many times we had to replace a whole tubes unit.
 */
const algorithm = (
  originalTubesUnits: number[][],
  currentTubesUnits: number[][],
  remainingHours: number
): [number, number] => {
  const minimumTubesByUnit: number[][] = [];
  const newCurrentTubesUnits: number[][] = [];
  let totalBrokenTubes = 0;
  let totalChanges = 0; // How many times we change all 4 tubes
  let recursiveResults = [0, 0];

  // First we two tubes closer to brake for each unit.
  currentTubesUnits.forEach((currentTubesUnit) => {
    minimumTubesByUnit.push(currentTubesUnit.slice(0, 2));
  });

  // Next we calculte how much time need to pass until we
  // have to replace all four tubes in a unit.
  const hoursUntilNextChange = Math.min(
    ...minimumTubesByUnit.map((minimumTubes) => minimumTubes[1])
  );

  // But maybe we do not have to reach the point were two tubes are
  // broken in the same unit, maybe we have less remaining hours of use.
  const consumedHours =
    remainingHours < hoursUntilNextChange
      ? remainingHours
      : hoursUntilNextChange;

  // Now is time to update the remaining life of each tube for each unit.
  currentTubesUnits.forEach((currentTubesUnit, index) => {
    const [unitTotalBrokenTubes, brokenTubes] = updateUsefulLifeForUnit(
      currentTubesUnit,
      consumedHours
    );
    totalBrokenTubes += brokenTubes;
    if (unitTotalBrokenTubes >= 2) {
      newCurrentTubesUnits.push([...originalTubesUnits[index]]);
      totalChanges++;
    } else {
      newCurrentTubesUnits.push(currentTubesUnits[index]);
    }
  });

  // If we need to consume more hours than the ones remaining for a
  // new full unit replacement, then we invoke ourselves.
  if (hoursUntilNextChange < remainingHours) {
    recursiveResults = algorithm(
      originalTubesUnits,
      newCurrentTubesUnits,
      remainingHours - hoursUntilNextChange
    );
  }

  // We return the calculations we did on the way plus the ones from
  // the recursive call.
  return [
    totalBrokenTubes + recursiveResults[0],
    totalChanges + recursiveResults[1],
  ];
};

export default (
  tubesUnits: number[][],
  remainingHours: number
): [number, number] => {
  const originalTubesUnits: number[][] = tubesUnits.map(function (arr) {
    return arr.slice();
  });
  const sortedTubesUnits: number[][] = [];
  const sortFn = (a: number, b: number): number => {
    return a - b;
  };

  originalTubesUnits.forEach((tubesUnit) => {
    tubesUnit.sort(sortFn);
    sortedTubesUnits.push([...tubesUnit]);
  });

  return algorithm(originalTubesUnits, sortedTubesUnits, remainingHours);
};
