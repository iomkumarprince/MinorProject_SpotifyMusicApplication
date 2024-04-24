import { Component } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletesongfromplaylist',
  templateUrl: './deletesongfromplaylist.component.html',
  styleUrls: ['./deletesongfromplaylist.component.css']
})
export class DeletesongfromplaylistComponent {

  playlistName : string = "";
  songName : string = "";

  constructor(private playlist : PlaylistService, private router: Router){}

  deleteSongToPlaylist(){
    this.playlist.deleteSongFromPlaylist(this.playlistName, this.songName).subscribe(
      response => { alert("Song deleted from Playlist successfully")
      this.router.navigateByUrl("")},
      error => {alert(JSON.stringify(error))}
    )
  }
}
