// movies.component.ts
import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../models/movie.model';
import {mockMovies} from '../../../data/mock-movies';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {NgForOf, NgIf} from '@angular/common';
import {MatOption, MatSelect} from '@angular/material/select';
import {MovieCard} from '../../../components/movies/movie-card/movie-card';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.html',
  imports: [
    MatFormField,
    NgForOf,
    MatInput,
    MatSelect,
    MatOption,
    MatCardModule,
    MatLabel,
    MovieCard,
    NgIf,
  ],
  styleUrls: ['./movies.css']
})
export class Movies implements OnInit {
  movies: Movie[] = mockMovies;
  filteredMovies: Movie[] = mockMovies;
  selectedGenre: string = 'all';
  minRating: number = 0;
  favorites: string[] = [];
  genres = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Romance', 'Sci-Fi', 'Thriller'];

  ngOnInit(): void {
    const savedFavorites = localStorage.getItem('movieRadarFavorites');
    if (savedFavorites) {
      this.favorites = JSON.parse(savedFavorites);
    }
    this.filterMovies();
  }

  clampRating(value: number | string): number {
    let rating = Number(value);
    if (isNaN(rating)) return 0;
    if (rating < 0) return 0;
    if (rating > 5) return 5;
    return rating;
  }

  onGenreChange(genre: string) {
    this.selectedGenre = genre;
    this.filterMovies();
  }

  onRatingChange(rating: number) {
    this.minRating = rating;
    this.filterMovies();
  }

  filterMovies() {
    this.filteredMovies = this.movies.filter(movie => {
      return (this.selectedGenre === 'all' || movie.genre === this.selectedGenre) &&
        movie.rating >= this.minRating;
    });
  }

  toggleFavorite(movieId: string) {
    const index = this.favorites.indexOf(movieId);
    if (index > -1) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(movieId);
    }
  }

  isFavorite(movieId: string): boolean {
    return this.favorites.includes(movieId);
  }
}
