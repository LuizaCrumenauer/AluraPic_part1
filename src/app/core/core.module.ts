import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule,
  RouterModule]

})
export class CoreModule{}
