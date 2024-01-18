import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratedMovieListComponent } from './toprated-movie-list.component';

describe('TopratedMovieListComponent', () => {
  let component: TopratedMovieListComponent;
  let fixture: ComponentFixture<TopratedMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopratedMovieListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopratedMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
