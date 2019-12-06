import { TestBed } from '@angular/core/testing';

import { ListeproduitsService } from './listeproduits.service';

describe('ListeproduitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeproduitsService = TestBed.get(ListeproduitsService);
    expect(service).toBeTruthy();
  });
});
