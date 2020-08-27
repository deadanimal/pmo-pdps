import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIndividualProfileComponent } from './search-individual-profile.component';

describe('SearchIndividualProfileComponent', () => {
  let component: SearchIndividualProfileComponent;
  let fixture: ComponentFixture<SearchIndividualProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchIndividualProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIndividualProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
