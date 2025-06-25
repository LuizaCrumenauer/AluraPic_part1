import {NgModule} from "@angular/core";
import {SignInComponent} from "./siginin/signin.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {VMessageModule} from "../shared/vmessage/vmessage.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [SignInComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    VMessageModule,
    RouterModule
  ]
})
export class HomeModule{}
