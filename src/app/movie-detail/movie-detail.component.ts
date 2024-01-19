import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { map, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommentComponent } from '../comment/comment.component';
import { ActorCardComponent } from '../actor-card/actor-card.component';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommentComponent, ActorCardComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private titleService = inject(Title);
  private activatedRoute = inject(ActivatedRoute);
  private movieService = inject(MovieService);

  activeIndex = 0;
  tabs = [
    { id: 0, title: 'About Movie' },
    { id: 1, title: 'Reviews' },
    { id: 2, title: 'Cast' },
  ];

  commentArray: Array<any> = [];
  cast: Array<any> = [];
  data: any;

  genreName = '';
  releaseDate = '';
  runTime = '';
  title = '';
  aboutMovie = '';
  coverSrc = 'https://image.tmdb.org/t/p/original';
  posterSrc = 'https://image.tmdb.org/t/p/w500';

  setTitle(movieTitle: string) {
    this.titleService.setTitle(movieTitle);
  }

  selectCategory(id: number) {
    this.activeIndex = id;
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map((params) => params['id']),
        switchMap((id) => this.movieService.getMovieDetail(id)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((response) => {
        this.data = response;
        this.title = response.original_title;
        this.setTitle(response.original_title + ' | Movie App');
        this.posterSrc += response.poster_path;
        this.coverSrc += response.backdrop_path;
        this.releaseDate = response.release_date.slice(0, 4);
        this.runTime = response.runtime;
        this.genreName = response.genres[0].name;
        this.aboutMovie = response.overview;
      });

    this.activatedRoute.params
      .pipe(
        map((params) => params['id']),
        switchMap((id) => this.movieService.getMovieReviews(id)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((response) => {
        this.commentArray = response.results;
      });

    this.activatedRoute.params
      .pipe(
        map((params) => params['id']),
        switchMap((id) => this.movieService.getMovieCredits(id)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((response) => {
        this.cast = response.cast;
        
      });
  }
}
