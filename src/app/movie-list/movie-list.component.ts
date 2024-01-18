import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie.interface';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{
  httpClient = inject(HttpClient);
  movies: Movie[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
}
