import {Component, ViewChild} from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatListItem, MatNavList} from '@angular/material/list';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    MatSidenavModule,
    MatIcon,
    MatIconButton,
    MatNavList,
    MatListItem,
    RouterLink,
    NgIf,

  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav(): void {
    this.sidenav.toggle();
  }
}
