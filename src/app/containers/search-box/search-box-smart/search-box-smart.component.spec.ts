import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxSmartComponent } from './search-box-smart.component';

describe('SearchBoxSmartComponent', () => {
  let component: SearchBoxSmartComponent;
  let fixture: ComponentFixture<SearchBoxSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoxSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
