import {Component, ElementRef, HostListener, inject, OnInit, ViewChild} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
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
    FormsModule,
    IonSearchbar,
    TitleCasePipe,
    IonText,
    NgIf,
    IonCard,
    IonCardHeader,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    IonCardSubtitle,
    IonCardTitle
  ],
})
export class HomePage implements OnInit {

  imageListGeneratorService: ImageListGeneratorService = inject(ImageListGeneratorService);
  @ViewChild('imageBox') imageBox: ElementRef<HTMLElement> = {} as ElementRef;

  imagesList: Image[] = [];
  searchText: string = '';
  dynamicItemSize: number = 563;

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

  // Some images don't exist in picsum, in that case load a default error image
  imageLoadOnError(image: Image): void {
    image.photo = `assets/image-error.svg`;
  }

  // Changes the ItemSize of CdkVirtualScroll for a smother scroll no mater the window size
  @HostListener('window:resize')
  onResize() {
    this.dynamicItemSize = this.imageBox.nativeElement.clientHeight;
  }
}
