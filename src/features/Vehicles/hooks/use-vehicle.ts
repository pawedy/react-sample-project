import { VehicleProps, createSWEntryHook } from '../../../api';
import { SWApiResource } from '../../../enums';

export const useVehicle = createSWEntryHook<VehicleProps>(SWApiResource.PEOPLE);
