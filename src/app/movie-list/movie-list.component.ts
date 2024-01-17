import { Component, OnInit, inject } from '@angular/core';
import { Movie } from '../movie.interface';
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
  movies: Movie[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe((movies) => {
      console.log(movies);
      this.movies = movies;
    })
  }
}
