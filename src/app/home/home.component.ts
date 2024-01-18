import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopratedMovieListComponent } from '../toprated-movie-list/toprated-movie-list.component';
import { MovieListCategoriesComponent } from '../movie-list-categories/movie-list-categories.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TopratedMovieListComponent, MovieListCategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

}
