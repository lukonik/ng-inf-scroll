import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportYComponent } from './viewport-y.component';

describe('ViewportYComponent', () => {
  let component: ViewportYComponent;
  let fixture: ComponentFixture<ViewportYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewportYComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewportYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
