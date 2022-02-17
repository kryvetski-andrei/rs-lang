import { variantItemClassName } from '../config';

export const disableQuestionVariants = () => {
  document.body.querySelectorAll(`.${variantItemClassName}`)?.forEach((variant) => {
    (variant as HTMLButtonElement).disabled = true;
  });
};
