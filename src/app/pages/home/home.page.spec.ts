import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomePage} from './home.page';
import {Image} from "../../shared/interfaces/image";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {ScrollingModule} from "@angular/cdk/scrolling";

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ScrollingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search imageList', () => {
    component.searchText = '1';
    component.searchImage();
    expect(component.imagesList.length).toBe(1);
  })

  it('should clear search of image', () => {
    component.searchText = '1';
    component.searchImage();
    expect(component.imagesList.length).toBe(1);
    component.clearSearch()
    expect(component.imagesList.length).toBe(4000);
  })

  it('should populate photo to the default image', () => {
    let image: Image = {
      id: 1,
      photo: '',
      text: 'Lorem'
    }
    component.imageLoadOnError(image)
    expect(image.photo).toBe('assets/image-error.svg');
  })
});
