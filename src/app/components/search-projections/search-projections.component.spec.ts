import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProjectionsComponent } from './search-projections.component';

describe('SearchProjectionsComponent', () => {
  let component: SearchProjectionsComponent;
  let fixture: ComponentFixture<SearchProjectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProjectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProjectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
