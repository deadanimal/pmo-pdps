import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerRequestComponent } from './banner-request.component';

describe('BannerRequestComponent', () => {
  let component: BannerRequestComponent;
  let fixture: ComponentFixture<BannerRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
