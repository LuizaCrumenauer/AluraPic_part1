import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PhotoService} from "../photo/photo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  photoForm!: FormGroup;
  fileUpload: File | undefined;
  preview: string = '';

  constructor(private formBuilder: FormBuilder,
              private photoService: PhotoService,
              private router: Router) { }

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComment: [true]
    })
  }

  upload() {
    if (this.fileUpload) {
      const description = this.photoForm.get('description')?.value;
      const allowComment = this.photoForm.get('allowComment')?.value;
      this.photoService.upload(description, allowComment, this.fileUpload)
      .subscribe(() => this.router.navigate(['']));
    }else {
      console.log('Nenhum arquivo selecionado para upload.');
    }
  }

  captureFile(event: any): void {
    // Acessa o arquivo selecionado pelo usuário
    const file = event.target.files[0];

    // Verifica se um arquivo foi realmente selecionado
    if (file) {
      this.fileUpload = file;
      const reader = new FileReader();
      // O evento 'onload' é disparado quando a leitura do arquivo termina
      reader.onload = (e: any) => this.preview = e.target.result;
      // Inicia a leitura do arquivo para convertê-lo para Base64 (DataURL)
      reader.readAsDataURL(file);
    }
  }

  get file() { return this.photoForm.get('file'); }
  get description() { return this.photoForm.get('description'); }
  get allowComment() { return this.photoForm.get('allowComment'); }

}


