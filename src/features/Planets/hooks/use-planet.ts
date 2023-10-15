import { PlanetProps, createSWEntryHook } from '../../../api';
import { SWApiResource } from '../../../enums';

export const usePlanet = createSWEntryHook<PlanetProps>(SWApiResource.PLANETS);
