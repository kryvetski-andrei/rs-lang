import { unitСheckbox } from '../config';

export const getDificultSelectionContainer = `
  <p class="game-description">Выбирете сложность</p>
  <div class="difficulty-selection-container">
    <input class="${unitСheckbox}" type="radio" id="1" name="unit"><label class="unit-item" for="1">A1</label>
    <input class="${unitСheckbox}" type="radio" id="2" name="unit"><label class="unit-item" for="2">A2</label>
    <input class="${unitСheckbox}" type="radio" id="3" name="unit"><label class="unit-item" for="3">B1</label>
    <input class="${unitСheckbox}" type="radio" id="4" name="unit"><label class="unit-item" for="4">B2</label>
    <input class="${unitСheckbox}" type="radio" id="5" name="unit"><label class="unit-item" for="5">C1</label>
    <input class="${unitСheckbox}" type="radio" id="6" name="unit"><label class="unit-item" for="6">C2</label>
  </div>
`;
