import { useParams } from 'react-router-dom';
import { Details } from '../../../../components/Details';
import { DetailsProperty } from '../../../../components/DetailsProperty';
import { Loader } from '../../../../components/Loader';
import { useVehicle } from '../..';

export function VehicleDetails() {
  let { vehicleId } = useParams();
  if (!vehicleId) {
    return <span>Vehicle not found</span>;
  }
  const vehicle = useVehicle(vehicleId);

  if (!vehicle) {
    return <Loader />;
  }

  const { name, crew, passengers, vehicle_class } = vehicle;
  return (
    <Details name={name}>
      <DetailsProperty name="Class" value={vehicle_class} />
      <DetailsProperty name="Crew" value={crew} />
      <DetailsProperty name="Passengers" value={passengers} />
    </Details>
  );
}
