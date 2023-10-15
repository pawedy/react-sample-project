import { createSWListHook } from '../../../api';
import { SWApiResource } from '../../../enums';

export const usePlanets = createSWListHook(SWApiResource.PLANETS);
