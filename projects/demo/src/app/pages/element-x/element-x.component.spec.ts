import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementXComponent } from './element-x.component';

describe('ElementXComponent', () => {
  let component: ElementXComponent;
  let fixture: ComponentFixture<ElementXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementXComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
