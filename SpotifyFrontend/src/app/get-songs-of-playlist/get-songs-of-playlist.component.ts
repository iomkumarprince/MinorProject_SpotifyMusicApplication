import { Component } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-songs-of-playlist',
  templateUrl: './get-songs-of-playlist.component.html',
  styleUrls: ['./get-songs-of-playlist.component.css']
})
export class GetSongsOfPlaylistComponent {
  songs : any =[];
  playlistName : string = "";
constructor(private playlist : PlaylistService, private router: Router){}
ngOnInit(){
  this.getSongs();
}
getSongs(){
  this.playlist.getAllSongsOfThePlaylist(this.playlistName).subscribe(
    response => {this.songs = response
      this.router.navigateByUrl("")
    },
    error => {alert(`Error found`)}
  )
}
}
