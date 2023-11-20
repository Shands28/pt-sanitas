import {Component, ElementRef, HostListener, inject, OnInit, ViewChild} from '@angular/core';
import {ImageListGeneratorService} from "../../shared/services/image-list-generator.service";
import {Image} from "../../shared/interfaces/image";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
