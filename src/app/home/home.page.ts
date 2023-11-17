import {Component, inject, OnInit} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRippleEffect, IonSelectOption, IonSearchbar, IonText, IonCard, IonCardHeader, IonCardContent
} from '@ionic/angular/standalone';
import {NgForOf, NgIf, NgOptimizedImage, TitleCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ImageListGeneratorService} from "../services/image-list-generator.service";
import {Image} from "../interfaces/image";
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

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
    TitleCasePipe,
    IonText,
    NgIf,
    IonCard,
    IonCardHeader,
    IonCardContent,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf
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

  // Some image don't exist in the API, in that case load a default error image
  imageLoadOnError(image: Image): void {
    image.photo = `assets/image-error.svg`;
  }
}
