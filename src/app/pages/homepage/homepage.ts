import { Component } from '@angular/core';
import {Movies} from './movies/movies';

@Component({
  selector: 'app-homepage',
  imports: [
    Movies
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

}
