import axios from 'axios';

import { ICharacterParams } from '../interfaces/api/ICharacter';
import { createParamsString } from '../utils/utils';

const CHARACTERS_API_BASE_URL = 'https://theofficeapi.dev/api';

class CharactersService {
  async fetchCharacters(queryParams: ICharacterParams = {}) {
    const params = createParamsString(queryParams as Record<string, unknown>);

    const response = await axios.get(`${CHARACTERS_API_BASE_URL}/characters${params}`);
    return response.data;
  }

  async fetchOneCharacter(id: string | undefined) {
    const response = await axios.get(`${CHARACTERS_API_BASE_URL}/character/${id}`);

    return response.data;
  }
}

export default CharactersService;
