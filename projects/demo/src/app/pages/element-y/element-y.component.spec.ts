import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementYComponent } from './element-y.component';

describe('ElementYComponent', () => {
  let component: ElementYComponent;
  let fixture: ComponentFixture<ElementYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementYComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
