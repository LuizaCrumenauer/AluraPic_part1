import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

import {PhotoComponent} from "./photo/photo.component";
import {PhotoListComponent} from "./photo-list/photo-list.component";
import {PhotoFormComponent} from "./photo-form/photo-form.component";
import {AppRoutingModule} from "../app.routing.module";
import { PhotosComponent } from './photo-list/photos/photos.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ]
})
export class PhotosModule {

}
