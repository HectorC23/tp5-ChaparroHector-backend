import { TestBed } from '@angular/core/testing';

import { TicketeroService } from './ticketero.service';

describe('TicketeroService', () => {
  let service: TicketeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
