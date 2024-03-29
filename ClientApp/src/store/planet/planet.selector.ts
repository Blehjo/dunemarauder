import { createSelector } from 'reselect';

import { RootState } from '../store';

import { PlanetState } from './planet.reducer';

export const selectPlanetReducer = (state: RootState): PlanetState => state.planet;

export const selectPlanetId = createSelector(
  [selectPlanetReducer],
  (planet) => planet.planetId
);

export const selectSinglePlanet = createSelector(
  [selectPlanetReducer],
  (planet) => planet.singlePlanet
);

export const selectUserPlanets = createSelector(
  [selectPlanetReducer],
  (planet) => planet.userPlanets
);

export const selectAllPlanets = createSelector(
  [selectPlanetReducer],
  (planet) => planet.planets
);