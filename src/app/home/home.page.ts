import {Component, inject, OnInit} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRippleEffect, IonSelectOption, IonSearchbar
} from '@ionic/angular/standalone';
import {NgForOf, NgOptimizedImage, TitleCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ImageListGeneratorService} from "../services/image-list-generator.service";
import {Image} from "../interfaces/image";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    NgForOf,
    NgOptimizedImage,
    IonRippleEffect,
    IonSelectOption,
    FormsModule,
    IonSearchbar,
    TitleCasePipe
  ],
})
export class HomePage implements OnInit {


  imageListGeneratorService: ImageListGeneratorService = inject(ImageListGeneratorService);

  imagesList: Image[] = [];
  searchText: string = '';

  ngOnInit(): void {
    this.imagesList = this.imageListGeneratorService.getImageList();
  }

  searchImage(): void {
    if (this.searchText === '') {
      this.clearSearch()
    } else {
      this.imagesList = this.imageListGeneratorService.searchImageList(this.searchText);
    }
  }

  clearSearch(): void {
    this.imagesList = this.imageListGeneratorService.getImageList();
  }
}
