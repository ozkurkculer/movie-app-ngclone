import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private URL = 'https://api.themoviedb.org/';

  private options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: environment.apiKey,
    },
  };

  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get(`${this.URL}/3/movie/popular?language=en-US&page=1`, this.options).subscribe((data: any)=>{
      console.log(data);
      return data.results;
    });
  }
}
