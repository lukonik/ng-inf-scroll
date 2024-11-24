import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportXComponent } from './viewport-x.component';

describe('ViewportXComponent', () => {
  let component: ViewportXComponent;
  let fixture: ComponentFixture<ViewportXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewportXComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewportXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
