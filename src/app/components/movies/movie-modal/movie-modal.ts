import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {NgForOf, NgIf} from '@angular/common';
import {Movie} from '../../../models/movie.model';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.html',
  imports: [
    MatIcon,
    MatIconButton,
    NgIf,
    MatButton,
    NgForOf,
    MatChipsModule,
  ],
  styleUrls: ['./movie-modal.css']
})
export class MovieModal {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      movie: Movie;
      isFavorite: boolean;
    },
    private dialogRef: MatDialogRef<MovieModal>
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  toggleFavorite() {
    this.data.isFavorite = !this.data.isFavorite;
    this.dialogRef.close({ toggledFavorite: true });
  }

  renderStars(rating: number): ('full' | 'half' | 'empty')[] {
    const stars: ('full' | 'half' | 'empty')[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) stars.push('full');
    if (hasHalfStar) stars.push('half');
    while (stars.length < 5) stars.push('empty');

    return stars;
  }
}
