import {NgModule} from "@angular/core";
import {SignInComponent} from "./siginin/signin.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {VMessageModule} from "../shared/vmessage/vmessage.module";
import {RouterModule} from "@angular/router";
import {SignupComponent} from "./siginup/signup.component";
import {HomeComponent} from "./siginup/home.component";
import {HomeRoutingModule} from "./home.routing.module";
import {UserNotTakenValidatorService} from "./siginup/user-not-taken.validator.service";
import {SignUpService} from "./siginup/signup.service";

@NgModule({
  declarations: [SignInComponent,
  SignupComponent,
  HomeComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    VMessageModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule
  ],
  providers: [ SignUpService ]
})
export class HomeModule{}
