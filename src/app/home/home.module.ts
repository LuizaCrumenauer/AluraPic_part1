import {NgModule} from "@angular/core";
import {SignInComponent} from "./siginin/signin.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {VMessageModule} from "../shared/vmessage/vmessage.module";
import {RouterModule} from "@angular/router";
import {SignupComponent} from "./siginup/signup.component";

@NgModule({
  declarations: [SignInComponent,
  SignupComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    VMessageModule,
    RouterModule,
    FormsModule,
  ]
})
export class HomeModule{}
