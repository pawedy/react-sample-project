import { useCallback, useMemo } from 'react';
import { VehicleApiProps, createSWEntryHook } from '../../../api';
import { SWApiResource } from '../../../enums';
import { mapUrlToId } from '../../../utils';
import { usePerson } from '../../People/hooks/use-person';

export interface Vehicle extends Omit<VehicleApiProps, 'pilots'> {
  pilots: Array<{
    id: string;
    name: string;
  }>;
}

const useVehicleEntry = createSWEntryHook<VehicleApiProps>(
  SWApiResource.VEHICLES
);

const mapVehicle = (vehicle: VehicleApiProps): Vehicle => {
  return {
    ...vehicle,
    pilots: vehicle.pilots.map((pilot) => {
      const pilotId = mapUrlToId(pilot);
      const pilotName = usePerson(pilotId)?.name ?? '';
      return { id: pilotId, name: pilotName };
    }),
  };
};

export const useVehicle = (id: string): Vehicle | null => {
  const vehicle = useVehicleEntry(id);

  if (!vehicle) {
    return null;
  }

  const mappedVehicle = mapVehicle(vehicle);

  return mappedVehicle;
};
