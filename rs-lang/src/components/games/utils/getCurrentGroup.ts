import { unitСheckbox } from '../config'

export const getCurrentGroupOfWords = (): number => {
    let groupIndex = 0;
    document.body.querySelectorAll(`.${unitСheckbox}`)?.forEach((elem, index) => {
      if((elem as HTMLInputElement).checked){
        groupIndex = index;
      }
    })
    return groupIndex;
}