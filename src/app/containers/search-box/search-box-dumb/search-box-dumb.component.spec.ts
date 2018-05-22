import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxDumbComponent } from './search-box-dumb.component';

describe('SearchBoxDumbComponent', () => {
  let component: SearchBoxDumbComponent;
  let fixture: ComponentFixture<SearchBoxDumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoxDumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
