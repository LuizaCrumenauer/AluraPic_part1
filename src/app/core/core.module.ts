import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {RequestInterceptor} from "./auth/request.interceptor";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule,
  RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]

})
export class CoreModule{}
