import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryHttpComponent } from './data-entry-http.component';

describe('DataEntryHttpComponent', () => {
  let component: DataEntryHttpComponent;
  let fixture: ComponentFixture<DataEntryHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataEntryHttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataEntryHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
