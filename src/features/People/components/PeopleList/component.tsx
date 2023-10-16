import { usePeople } from '../../hooks/use-people';
import { List } from '../../../../components/List';
import { Loader } from '../../../../components/Loader';

export function PeopleList() {
  const people = usePeople();

  if (!people.length) {
    return <Loader />;
  }

  return <List items={people}></List>;
}
