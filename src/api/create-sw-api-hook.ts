import { useMemo } from 'react';
import { ListItem, useStarWarsEntry, useStarWarsList } from '.';
import { SWApiResource } from '../enums';
import { sortListAlphabetically } from '../utils';

export const createSWListHook = (
  resource: SWApiResource
): ((sort?: boolean) => ListItem[]) => {
  return (sort: boolean = true): ListItem[] => {
    const list = useStarWarsList(resource);
    const results = list?.results ?? [];
    if (!sort) {
      return results;
    }

    const sorted = useMemo(() => sortListAlphabetically(results), [list]);

    return sorted;
  };
};

export const createSWEntryHook = <T>(
  resource: SWApiResource
): ((id: string) => T | null) => {
  return (id: string): T | null => {
    const entry = useStarWarsEntry<T>(resource, id);

    return entry?.result.properties ?? null;
  };
};
