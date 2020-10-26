import dataPositions from './data/positions'

// Instead of using .json file we can load data from API
export async function getPositions () {
  return await dataPositions
}
