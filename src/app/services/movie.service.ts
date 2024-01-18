import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie } from '../movie.interface';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private URL = 'https://api.themoviedb.org/';
  private http = inject(HttpClient);

  private options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: environment.apiKey,
    },
  };

  getPopularMovies(): Observable<Movie[]> {
    return this.http
      .get<{ results: Movie[] }>(
        `${this.URL}/3/movie/popular?language=en-US&page=1`,
        this.options
      )
      .pipe(map((response) => response.results));
  }
}
