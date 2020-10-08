import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistCandiadteComponent } from './shortlist-candiadte.component';

describe('ShortlistCandiadteComponent', () => {
  let component: ShortlistCandiadteComponent;
  let fixture: ComponentFixture<ShortlistCandiadteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortlistCandiadteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlistCandiadteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
