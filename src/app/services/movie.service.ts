import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie } from '../movie.interface';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private URL = 'https://api.themoviedb.org/';
  private http = inject(HttpClient);
  private popularMoviesUrl = `${this.URL}/3/movie/popular?language=en-US&page=1`
  private topRatedMoviesUrl = `${this.URL}/3/movie/top_rated?language=en-US&page=1`
  private nowPlayingMoviesUrl = `${this.URL}/3/movie/now_playing?language=en-US&page=1`
  private upcomingMoviesUrl = `${this.URL}/3/movie/upcoming?language=en-US&page=1`

  private options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: environment.apiKey,
    },
  };

  getPopularMovies(): Observable<Movie[]> {
    return this.http
      .get<{ results: Movie[] }>(this.popularMoviesUrl, this.options).pipe(map((response) => response.results));
  }

  getTopRatedMovies(): Observable<Movie[]> {
    return this.http.get<{ results: Movie[] }>(this.topRatedMoviesUrl, this.options).pipe(map((response) => response.results));
  }

  getNowPlayingMovies(): Observable<Movie[]> {
    return this.http.get<{ results: Movie[] }>(this.nowPlayingMoviesUrl, this.options).pipe(map((response) => response.results));
  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.http.get<{ results: Movie[] }>(this.upcomingMoviesUrl, this.options).pipe(map((response) => response.results));
  }

  getMovieDetail(id: number): Observable<Array<Object>> {
    return this.http.get<Array<Object>>(this.URL + `3/movie/${id}?language=en-US`, this.options).pipe((response) => response);
  }

  getMovieReviews(id: number): Observable<Array<Object>> {
    return this.http.get<Array<Object>>(this.URL + `3/movie/${id}/reviews?language=en-US&page=1`, this.options).pipe((response) => response);
  }

  getMovieCredits(id: number): Observable<Array<Object>> {
    return this.http.get<Array<Object>>(this.URL + `3/movie/${id}/credits?language=en-US`, this.options).pipe((response) => response);
  }
}
