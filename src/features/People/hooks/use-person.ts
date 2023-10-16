import {
  ListItem,
  PersonApiProps,
  createSWEntryHook,
} from '../../../api';
import { SWApiResource } from '../../../enums';
import { mapUrlToId } from '../../../utils';
import { usePlanets } from '../../Planets/hooks/use-planets';

export interface Person extends Omit<PersonApiProps, 'homeworld'> {
  homeworld: {
    id: string;
    name: string;
  };
}

const usePersonEntry = createSWEntryHook<PersonApiProps>(SWApiResource.PEOPLE);

const mapPerson = (person: PersonApiProps, planets: ListItem[]): Person => {
  const homeworldId = mapUrlToId(person?.homeworld);
  const planet = planets.find(({ uid }) => uid === homeworldId);
  return {
    ...person,
    homeworld: { id: homeworldId, name: planet?.name ?? '' },
  };
};

export const usePerson = (id: string): Person | null => {
  const person = usePersonEntry(id);
  const planets = usePlanets();

  if (!person || !planets) {
    return null;
  }

  const mappedPerson = mapPerson(person, planets);

  return mappedPerson;
};
