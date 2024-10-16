import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OktaCallbackComponent } from './okta-callback.component';

describe('OktaCallbackComponent', () => {
  let component: OktaCallbackComponent;
  let fixture: ComponentFixture<OktaCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OktaCallbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OktaCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
