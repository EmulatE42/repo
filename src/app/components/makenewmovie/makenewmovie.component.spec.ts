import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakenewmovieComponent } from './makenewmovie.component';

describe('MakenewmovieComponent', () => {
  let component: MakenewmovieComponent;
  let fixture: ComponentFixture<MakenewmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakenewmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakenewmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
