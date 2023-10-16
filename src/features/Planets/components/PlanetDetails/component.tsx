import { useParams } from 'react-router-dom';
import { Details } from '../../../../components/Details';
import { DetailsProperty } from '../../../../components/DetailsProperty';
import { usePlanet } from '../../hooks/use-planet';
import { Loader } from '../../../../components/Loader';

export function PlanetDetails() {
  const { planetId } = useParams();
  const planet = usePlanet(planetId ?? '');

  if (!planet) {
    return <Loader />;
  }

  const { name, climate, population } = planet;
  return (
    <Details name={name}>
      <DetailsProperty name="Population" value={population} />
      <DetailsProperty name="Climate" value={climate} />
    </Details>
  );
}
