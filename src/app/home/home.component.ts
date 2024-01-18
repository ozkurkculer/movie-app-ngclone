import { Component, OnInit, inject } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../services/movie.service';
import { Movie } from '../movie.interface';
import { RouterLink } from '@angular/router';
import { TopratedMovieListComponent } from '../toprated-movie-list/toprated-movie-list.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieListComponent, RouterLink, TopratedMovieListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isActive = false
  movieService = inject(MovieService);
  data: Movie[] = []
  tabs = [
    { id: 0, title: 'Now Playing', content: `` },
    { id: 1, title: 'Upcoming', content: `` },
    { id: 2, title: 'Top Rated', content: `` },
    { id: 3, title: 'Popular', content: `` },
  ];
  selectCategory(id: number) {
    switch (id) {
      case 0:
        this.movieService.getPopularMovies().subscribe((movies) => {
          this.data = movies;
        });
        this.isActive = true;
        break;
      case 1:

        break;
      case 2:

        break;
      case 3:

        break;

      default:
        break;
    }

  }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe((movies) => {
      this.data = movies;
    });
  }
}
