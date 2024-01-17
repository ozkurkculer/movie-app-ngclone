import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Movie } from '../movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private URL = 'https://api.themoviedb.org/';

  private options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: this.API_KEY,
    },
  };

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(
        `${this.URL}/3/movie/popular?language=en-US&page=1`,
        this.options
      );
  }
}
