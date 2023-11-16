import {inject, Injectable} from '@angular/core';
import {TextGeneratorService} from "./text-generator.service";
import {Image} from "../interfaces/image";

@Injectable({
  providedIn: 'root'
})
export class ImageListGeneratorService {

  textGeneratorService: TextGeneratorService = inject(TextGeneratorService)
  imagesList: Image[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.imagesList.push({
        id: this.imagesList.length,
        photo: `https://picsum.photos/id/${i}/500/500`,
        text: this.textGeneratorService.generateRandomText(5)
      })
    }
  }

  getImageList(): {
    id: number,
    photo: string,
    text: string
  }[] {
    return this.imagesList;
  }

  searchImageList(filter: string): Image[] {
    let filteredImageList: Image[]
    filteredImageList = this.imagesList.filter((image: Image) => image.id.toString().includes(filter) || image.text.toLowerCase().includes(filter.toLowerCase()))
    return filteredImageList;
  }
}
