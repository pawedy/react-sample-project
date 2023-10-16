import { useVehicles } from '../..';
import { List } from '../../../../components/List';
import { Loader } from '../../../../components/Loader';

export function VehiclesList() {
  const vehicles = useVehicles();

  if (!vehicles.length) {
    return <Loader />;
  }

  return <List items={vehicles}></List>;
}
