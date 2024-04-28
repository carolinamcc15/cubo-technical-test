import { GENDERS } from '../../enums/enums';

export interface ICharacter {
  id: number;
  name: string;
  gender: null | GENDERS.MALE | GENDERS.FEMALE;
  marital: null | string;
  job: string[];
  workplace: string[];
  firstAppearance: string;
  lastAppearance: string;
  actor: string;
}

export interface ICharacterParams {
  name?: string | undefined;
  gender?: undefined | GENDERS.MALE | GENDERS.FEMALE;
  page?: number;
  limit?: number;
}
