import {Injectable} from "@angular/core";
import {SignUpService} from "./signup.service";
import {AbstractControl} from "@angular/forms";
import {debounceTime, first, map, switchMap} from "rxjs/operators";

@Injectable()
export class UserNotTakenValidatorService {

  constructor(private signUpService: SignUpService) { }

  checkUserNameTaken() {
    return (control: AbstractControl) => {
      // Use apenas um .pipe() com todos os operadores dentro, separados por vírgula
      return control.valueChanges
        .pipe(
          debounceTime(300),
          switchMap(userName =>
            this.signUpService.checkUserNameTaken(userName)
          ),
          map(isTaken => isTaken ? { userNameTaken: true } : null),
          first() // Garante que o observable complete após a primeira emissão
        );
    }
  }
}
