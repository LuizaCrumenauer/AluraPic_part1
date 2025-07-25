import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {lowerCaseValidator} from "../../shared/validators/lower-case.validator";
import {UserNotTakenValidatorService} from "./user-not-taken.validator.service";
import {NewUser} from "./new-user";
import {SignUpService} from "./signup.service";
import {Router} from "@angular/router";
import {PlataformDetectorService} from "../../core/plataform-detector/paltaform-detector.service";

@Component({
  templateUrl: './signup.component.html',
  providers: [ UserNotTakenValidatorService ]
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder,
              private userNotTakenValidatorService: UserNotTakenValidatorService,
              private signUpService: SignUpService,
              private router: Router
             ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          lowerCaseValidator,
          Validators.maxLength(30)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ],
    });
  }

  ngAfterViewInit(): void {
    // A lógica para dar foco no input
    this.emailInput.nativeElement.focus();
  }

  signUp() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService.signup(newUser)
      .subscribe(
        () => this.router.navigate(['']),
        err => console.log(err)
      );
  }

  get email() { return this.signupForm.get('email')}

  get fullName() { return this.signupForm.get('fullName'); }

  get userName() { return this.signupForm.get('userName'); }

  get password() { return this.signupForm.get('password'); }
}
