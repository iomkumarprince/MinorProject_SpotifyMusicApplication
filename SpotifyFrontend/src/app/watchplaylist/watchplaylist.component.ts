import { Component } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { Router } from '@angular/router';
import { SongService } from '../services/song.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-watchplaylist',
  templateUrl: './watchplaylist.component.html',
  styleUrls: ['./watchplaylist.component.css']
})
export class WatchplaylistComponent {

  panelOpenState = false;

  playlistData : any;
  songs : any =[];
  playlistName : string = "";
  songName : string = "";

  constructor(private playlist : PlaylistService,  private _snackBar: MatSnackBar, private song : SongService, private router: Router){}

  ngOnInit(){
   this.watchPlaylist(); 
  }
  watchPlaylist(){
    this.playlist.watchPlaylist().subscribe(
      response => {this.playlistData = response;
      }
    )
  }

  deletePlaylist(playlistName:string){
    this.playlist.deletePlaylist(playlistName).subscribe(
      response => { alert(`Playlist deleted successfully.`)
      this.ngOnInit();
    })
  }

  deleteSongToPlaylist(playlistName:string, songName:string){
    this.playlist.deleteSongFromPlaylist(playlistName, songName).subscribe(
      response => { alert("Song deleted from Playlist successfully")
      this.router.navigateByUrl("/watchPlaylist");   
    } 
      
    )
  }

  getSongs(playlistName:string){   
    this.playlist.getAllSongsOfThePlaylist(playlistName).subscribe(
      response => { 
        this.songs = response;  
      }
    )
  }

  playSong(songName :string) {
    this._snackBar.open(songName + ' is playing', 'stop', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    })
  }  
}
