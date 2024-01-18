import { Component, Input} from '@angular/core';
import { Movie } from '../movie.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent{
  @Input() movies: Movie[] = [];

}
