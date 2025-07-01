import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../core/auth/auth.service";
import {Router} from "@angular/router";
import {PlataformDetectorService} from "../../core/plataform-detector/paltaform-detector.service"; // Verifique se este caminho está correto

@Component({
  templateUrl: './signin.component.html',
})
export class SignInComponent implements OnInit {

  loginForm!: FormGroup; // Usando o '!' para o Strict Mode
 @ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // 2. Este mtodo só roda DEPOIS que o HTML estiver pronto
  ngAfterViewInit(): void {
    // A lógica para dar foco no input vem para cá
    this.userNameInput.nativeElement.focus();
  }


  login() {
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () =>
          this.router.navigate(['user/' , userName]),
        err => {
          console.log(err);
          this.loginForm.reset();
          this.userNameInput.nativeElement.focus();
          alert('Usuário ou senha inválidos');
        }
      );

  }

  get userName() { return this.loginForm.get('userName'); }

  get password() { return this.loginForm.get('password'); }
}
