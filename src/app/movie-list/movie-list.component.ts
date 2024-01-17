import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{
  httpClient = inject(HttpClient);
  movies: any = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getPopularMovies();
  }
}
