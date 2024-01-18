import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Movie } from '../movie.interface';
import { map } from 'rxjs';


@Component({
  selector: 'app-toprated-movie-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './toprated-movie-list.component.html',
  styleUrl: './toprated-movie-list.component.css'
})
export class TopratedMovieListComponent implements OnInit {
  movieService = inject(MovieService);
  movies: Movie[] = []
  ngOnInit(): void {
    this.movieService.getTopRatedMovies().subscribe((movies) => {
      this.movies = movies.slice(0,10);
    });
  }
}
