import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {

  query: string;
  movies$: Observable<Array<Movie>>;

  constructor(private readonly movieService: MovieService) {}

  getSearchResults() {
    this.movies$ = this.movieService.searchMovie(this.query);
  }

}