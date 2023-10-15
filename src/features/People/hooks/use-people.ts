import { createSWListHook } from '../../../api';
import { SWApiResource } from '../../../enums';

export const usePeople = createSWListHook(SWApiResource.PEOPLE);
