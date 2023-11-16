import {Component, inject, OnInit} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonSelect,
  IonRippleEffect, IonSelectOption
} from '@ionic/angular/standalone';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {TextGeneratorService} from "../services/text-generator.service";
import {FormsModule} from "@angular/forms";

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
    IonInput,
    IonButton,
    IonSelect,
    IonRippleEffect,
    IonSelectOption,
    FormsModule
  ],
})
export class HomePage implements OnInit {

  textGeneratorService: TextGeneratorService = inject(TextGeneratorService)

  imagesList: {
    id: number,
    photo: string,
    text: string
  }[] = [];
  searchText: string = '';
  searchBy: string = 'id';

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.imagesList.push({
        id: this.imagesList.length,
        photo: `https://picsum.photos/id/${i}/500/500`,
        text: this.textGeneratorService.generateRandomText(5)
      })
    }
  }

  searchImage(): void {
    console.log(this.searchText, this.searchBy)
  }
}
