import {Photo} from "../../photo/photo";
import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  @Input() filter: string = '';
  rows: Photo[][] = [];

  /** Filtra antes de agrupar */
  get filteredPhotos(): Photo[] {
    if (!this.filter) return this.photos;
    const texto = this.filter.toLowerCase();
    return this.photos.filter(p =>
        (p.description || '').toLowerCase().includes(texto)
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos || changes.filter) {
      this.rows = this.groupColumns(this.filteredPhotos);
    }
  }

  private groupColumns(photos: Photo[]): Photo[][] {
    const newRows: Photo[][] = [];
    for (let i = 0; i < photos.length; i += 3) {
      newRows.push(photos.slice(i, i + 3));
    }
    return newRows;
  }
}
