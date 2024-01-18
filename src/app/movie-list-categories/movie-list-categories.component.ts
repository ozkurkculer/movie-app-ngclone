import { Component, OnInit, inject } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../services/movie.service';
import { Movie } from '../movie.interface';
@Component({
  selector: 'app-movie-list-categories',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './movie-list-categories.component.html',
  styleUrl: './movie-list-categories.component.css'
})
export class MovieListCategoriesComponent implements OnInit {
  movieService = inject(MovieService);

  activeIndex: number = 0;
  data: Movie[] = []
  tabs = [
    { id: 0, title: 'Now Playing' },
    { id: 1, title: 'Upcoming' },
    { id: 2, title: 'Top Rated' },
    { id: 3, title: 'Popular' },
  ];

  selectCategory(id: number) {
    switch (id) {
      case 0:
        this.movieService.getNowPlayingMovies().subscribe((movies) => {
          this.data = movies;
        });
        this.activeIndex = id;
        break;

      case 1:
        this.movieService.getUpcomingMovies().subscribe((movies) => {
          this.data = movies;
        });
        this.activeIndex = id;
        break;

      case 2:
        this.movieService.getTopRatedMovies().subscribe((movies) => {
          this.data = movies;
        });
        this.activeIndex = id;
        break;

      case 3:
        this.movieService.getPopularMovies().subscribe((movies) => {
          this.data = movies;
        });
        this.activeIndex = id;
        break;

      default:
        break;
    }
  }

  ngOnInit(): void {
    this.movieService.getNowPlayingMovies().subscribe((movies) => {
      this.data = movies;
      this.activeIndex = 0;
    });
  }
}
