import { useNavigate, useParams } from 'react-router-dom';
import { usePerson } from '../../hooks/use-person';
import { Details } from '../../../../components/Details';
import { DetailsProperty } from '../../../../components/DetailsProperty';
import { Loader } from '../../../../components/Loader';

export function PersonDetails() {
  const navigate = useNavigate();
  let { personId } = useParams();
  if (!personId) {
    return <span>Character not found</span>;
  }
  const person = usePerson(personId);

  if (!person) {
    return <Loader />;
  }

  const { name, birth_year, gender, homeworld } = person;
  return (
    <Details name={name}>
      <DetailsProperty name="Birth year" value={birth_year} />
      <DetailsProperty name="Gender" value={gender} />
      <DetailsProperty
        name="Homeworld"
        value={homeworld.name}
        onClick={() => navigate(`/planets/${homeworld.id}`)}
      />
    </Details>
  );
}
