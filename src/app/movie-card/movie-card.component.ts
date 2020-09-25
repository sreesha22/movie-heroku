import { Component, Input } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie: Movie;
}