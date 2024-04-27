import axios from 'axios';

import { ICharacterParams } from '../interfaces/api/ICharacter';
import { createParamsString } from '../utils/utils';

const CHARACTERS_API_BASE_URL = 'https://theofficeapi.dev/api';

class CharactersService {
  async fetchCharacters(queryParams: ICharacterParams = {}) {
    const params = createParamsString(queryParams);

    const response = await axios.get(`${CHARACTERS_API_BASE_URL}/characters${params}`);
    console.log(response);
    return response.data.results;
  }

  async fetchOneCharacter(id: number) {
    const response = await axios.get(`${CHARACTERS_API_BASE_URL}/character/${id}`);
    console.log(response);

    return response.data;
  }
}

export default CharactersService;
