import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOktaCallbackComponentComponent } from './custom-okta-callback-component.component';

describe('CustomOktaCallbackComponentComponent', () => {
  let component: CustomOktaCallbackComponentComponent;
  let fixture: ComponentFixture<CustomOktaCallbackComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomOktaCallbackComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomOktaCallbackComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
