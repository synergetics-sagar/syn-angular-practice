import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryFetchComponent } from './data-entry-fetch.component';

describe('DataEntryFetchComponent', () => {
  let component: DataEntryFetchComponent;
  let fixture: ComponentFixture<DataEntryFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataEntryFetchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataEntryFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
