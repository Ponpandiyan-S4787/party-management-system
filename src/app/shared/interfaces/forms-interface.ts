import { FormControl, FormGroup } from '@angular/forms';

export interface FormsInterface {
  userName: string;
  password: string;
}
export const formsDatas = new FormGroup({
  userName: new FormControl(),
  password: new FormControl(),
});