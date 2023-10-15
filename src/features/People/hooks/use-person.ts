import { PersonProps, createSWEntryHook } from '../../../api';
import { SWApiResource } from '../../../enums';

export const usePerson = createSWEntryHook<PersonProps>(SWApiResource.PEOPLE);
