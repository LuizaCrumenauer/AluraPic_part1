import {NgModule} from "@angular/core";
import {PhotoListComponent} from "./photo-list.component";
import {LoadButtonComponent} from "./load-button/load-button.component";
import {FilterByDescriptionPipe} from "./filter-by-description.pipe";
import {CommonModule} from "@angular/common";
import {PhotoModule} from "../photo/photo.module";
import {PhotosComponent} from "./photos/photos.component";
import {CardModule} from "../../shared/components/card/card.module";
import {SearchComponent} from "./search/search.component";
import {DarkenOnHouverModule} from "../../shared/directives/darken-on-houver/darken-on-houver.module";

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHouverModule
  ]
})
export class PhotoListModule {

}
