import dataPersonal from './data/personal'

// Instead of using .json file we can load data from API
export async function getPersonal () {
  return await dataPersonal
}
