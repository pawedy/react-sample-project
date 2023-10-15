import { usePeople } from './hooks/use-people';
import { List } from '../../components/List';

export function People() {
  const people = usePeople();

  return <List items={people}></List>;
}
