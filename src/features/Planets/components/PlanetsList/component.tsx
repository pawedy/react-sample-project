import { List } from '../../../../components/List';
import { Loader } from '../../../../components/Loader';
import { usePlanets } from '../../hooks/use-planets';

export function PlanetsList() {
  const planets = usePlanets();

  if (!planets.length) {
    return <Loader />;
  }

  return <List items={planets}></List>;
}
