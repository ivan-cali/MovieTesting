import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MovieModal} from '../movie-modal/movie-modal';
import {Movie} from '../../../models/movie.model';
import {MatIcon} from '@angular/material/icon';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {MatIconButton} from '@angular/material/button';
import {MatProgressSpinner} from '@angular/material/progress-spinner';



@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.html',
  styleUrls: ['./movie-card.css'],
  standalone: true,
  imports: [
    MatIcon,
    NgIf,
    MatIconButton,
    NgClass,
    MatProgressSpinner,
    NgForOf,
  ]
})
export class MovieCard {
  @Input() movie!: Movie;
  @Input() isFavorite: boolean = false;
  @Input() onToggleFavorite!: (movieId: string) => void;

  imageLoaded = false;

  constructor(private dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(MovieModal, {
      data: {
        movie: this.movie,
        isFavorite: this.isFavorite,
      },
      width: '900px',       // fixed width for desktop
      maxWidth: '90vw',     // responsive max width (won't exceed 95% viewport width)
      maxHeight: '90vh',    // limit height with vertical scroll if needed
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.toggledFavorite) {
        this.onToggleFavorite(this.movie.id);
      }
    });
  }
  toggleFavorite(event: MouseEvent): void {
    event.stopPropagation(); // Prevent modal opening
    this.isFavorite = !this.isFavorite; // immediate UI toggle
    this.onToggleFavorite(this.movie.id); // notify parent of toggle
  }
  renderStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }

  getFullStars(): number {
    return Math.floor(this.movie.rating);
  }

  hasHalfStar(): boolean {
    return this.movie.rating % 1 !== 0;
  }

  protected readonly Math = Math;
}
