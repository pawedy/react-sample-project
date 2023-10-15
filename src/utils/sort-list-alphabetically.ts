import { ListItem } from '../api';

export const sortListAlphabetically = (list: ListItem[]): ListItem[] =>
  [...list].sort((a, b) => a.name.localeCompare(b.name));
