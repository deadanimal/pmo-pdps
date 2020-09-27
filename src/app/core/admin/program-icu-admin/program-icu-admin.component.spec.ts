import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramIcuAdminComponent } from './program-icu-admin.component';

describe('ProgramIcuAdminComponent', () => {
  let component: ProgramIcuAdminComponent;
  let fixture: ComponentFixture<ProgramIcuAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramIcuAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramIcuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
