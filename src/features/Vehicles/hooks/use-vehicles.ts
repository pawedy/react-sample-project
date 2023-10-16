import { createSWListHook } from '../../../api';
import { SWApiResource } from '../../../enums';

export const useVehicles = createSWListHook(SWApiResource.VEHICLES);
