import { TestBed } from '@angular/core/testing';

import { TextGeneratorService } from './text-generator.service';

describe('TextGeneratorService', () => {
  let service: TextGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate random lorem ipsum text', () => {
    let randomGeneratedText = service.generateRandomText(10);
    expect(randomGeneratedText.split(' ').length).toBe(10)
  })
});
