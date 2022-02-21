import { IWord, IWordDictionaryElement } from '../../../interfaces';

export const parseDictionaryElement = (dictionaryElement: IWordDictionaryElement): IWord => {
  const {
    _id,
    group,
    page,
    word,
    image,
    audio,
    audioMeaning,
    audioExample,
    textMeaning,
    textExample,
    transcription,
    wordTranslate,
    textMeaningTranslate,
    textExampleTranslate,
  } = dictionaryElement;
  return {
    id: _id,
    group,
    page,
    word,
    image,
    audio,
    audioMeaning,
    audioExample,
    textMeaning,
    textExample,
    transcription,
    wordTranslate,
    textMeaningTranslate,
    textExampleTranslate,
  };
};
