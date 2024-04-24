import { Component } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsongtoplaylist',
  templateUrl: './addsongtoplaylist.component.html',
  styleUrls: ['./addsongtoplaylist.component.css']
})
export class AddsongtoplaylistComponent {

  playlistName : string="";
  songName : string="";

  constructor(private playlist : PlaylistService, private router: Router){}

  addSongToPlaylist(){
    this.songName = this.playlist.songName;
    this.playlist.addSongToPlaylist(this.playlistName, this.songName).subscribe(
      response => { alert("Song added to Playlist successfully")
      this.router.navigateByUrl("")
    },
      error => {alert(JSON.stringify(error))}
    )
  }
}
