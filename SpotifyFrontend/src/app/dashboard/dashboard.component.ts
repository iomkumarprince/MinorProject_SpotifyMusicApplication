import { Component } from '@angular/core';
import { SongService } from '../services/song.service';
import { Router } from '@angular/router';
import { UserLoginService } from '../services/user-login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatMenuTrigger } from '@angular/material/menu';
import { PlaylistService } from '../services/playlist.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards: any = [];
  admin: boolean = false;
  user: boolean = false;
  menu: boolean = false;

  constructor(private song: SongService, private playlist: PlaylistService, private _snackBar: MatSnackBar, private userservice: UserLoginService, private router: Router) { }


  ngOnInit() {
    if (this.userservice.role == "admin") {
      this.admin = true;
      this.user = true;

    }

    if (this.userservice.role == "User") {
      this.user = true;
    }

    this.getSongs();
  }

  logout() {
    this.userservice.user = "";
    this.router.navigate(['/login']);
  }

  getSongs() {
    this.song.getSong().subscribe(
      response => {
        this.cards = response;
      }
    )
  }

  playSong(songName: string) {
    this._snackBar.open(songName + ' is playing', 'stop', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    })
  }

  showMenu() {
    this.menu = !this.menu;

  }

  createPlaylist() {
    this.router.navigateByUrl("/createPlaylist");
  }

  addSongToPlaylist(songName: string) {
    this.setSongName(songName);
    this.router.navigateByUrl("/addSongToPlaylist");
  }

  showPlaylist() {
    this.router.navigateByUrl("/watchPlaylist");
  }

  setSongName(songName: string) {
    this.playlist.songName = songName;
  }

}
