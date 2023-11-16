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
});
