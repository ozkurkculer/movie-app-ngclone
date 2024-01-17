import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { PopularmoviesComponent } from './popularmovies/popularmovies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MovieListComponent, PopularmoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'movie-app-ngclone';
  tabs = [
    { id: 0, title: 'Now Playing', content: `` },
    { id: 1, title: 'Upcoming', content: `` },
    { id: 2, title: 'Top Rated', content: `` },
    { id: 3, title: 'Popular', content: `` },
  ];
}
