import { PlanetApiProps, createSWEntryHook } from '../../../api';
import { SWApiResource } from '../../../enums';

export const usePlanet = createSWEntryHook<PlanetApiProps>(
  SWApiResource.PLANETS
);
