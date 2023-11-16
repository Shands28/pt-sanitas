import { TestBed } from '@angular/core/testing';

import { ImageListGeneratorService } from './image-list-generator.service';

describe('ImageListGeneratorService', () => {
  let service: ImageListGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageListGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get full imageList', () => {
    expect(service.getImageList().length).toBe(4000);
  })

  it('should search imageList', () => {
    expect(service.searchImageList('1').length).toBe(1)
  })
});
