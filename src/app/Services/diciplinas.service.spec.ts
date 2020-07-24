import { TestBed } from '@angular/core/testing';

import { DiciplinasService } from './diciplinas.service';

describe('DiciplinasService', () => {
  let service: DiciplinasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiciplinasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
