import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementRefComponent } from './element-ref.component';

describe('ElementRefComponent', () => {
  let component: ElementRefComponent;
  let fixture: ComponentFixture<ElementRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementRefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
