import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"
import { UserService } from "src/app/services/user-service.service";
import { User } from "../types/users.type";

export class AsyncEmailValidator {
  static userEmailValidator(user: UserService){
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return user.getByEmail(control.value).pipe(map(
          (user: User) => user ? { invalidAsync: false } : {invalidAsync: true}
        )
      )
    }
  }
}
