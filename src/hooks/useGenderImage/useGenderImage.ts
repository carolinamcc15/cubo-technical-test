import womanImage from '../../assets/woman.jpg';
import manImage from '../../assets/man.jpg';
import { GENDERS } from '../../enums/enums';

const useGenderImage = (gender: GENDERS | null) => {
  const characterImage = gender === GENDERS.MALE ? manImage : womanImage;

  return [characterImage];
};

export default useGenderImage;
