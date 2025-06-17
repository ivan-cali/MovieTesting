import { Component, Input } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Movie} from '../../../models/movie.model';
import {MovieCard} from '../movie-card/movie-card';


@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.html',
  imports: [
    MovieCard,
    NgForOf,
    NgIf,
  ],
  styleUrls: ['./movie-grid.css']
})
export class MovieGrid {
  @Input() movies: Movie[] = [];
  @Input() favorites: string[] = [];
  @Input() onToggleFavorite: (movieId: string) => void = () => {};

  isFavorite(id: string): boolean {
    return this.favorites.includes(id);
  }
}
