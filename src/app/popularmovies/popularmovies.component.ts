import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';


@Component({
  selector: 'app-popularmovies',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './popularmovies.component.html',
  styleUrl: './popularmovies.component.css'
})
export class PopularmoviesComponent implements OnInit {
  httpClient = inject(HttpClient);

  private URL = 'https://api.themoviedb.org/';
  private options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: environment.apiKey,
    },
  };

  data: any[] = []

  ngOnInit(): void {
    this.fetchData();
   }


  fetchData(){
    this.httpClient.get(`${this.URL}/3/movie/popular?language=en-US&page=1`, this.options).subscribe((data: any) => {
      console.log(data);
      this.data = data.results;
    })
  }
}
