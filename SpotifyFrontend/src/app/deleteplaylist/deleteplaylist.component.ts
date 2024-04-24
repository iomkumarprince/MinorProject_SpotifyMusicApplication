import { Component } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteplaylist',
  templateUrl: './deleteplaylist.component.html',
  styleUrls: ['./deleteplaylist.component.css']
})
export class DeleteplaylistComponent {

  playlistName : string = "";

  constructor(private playlist : PlaylistService, private router: Router){}

  deletePlaylist(){
    this.playlist.deletePlaylist(this.playlistName).subscribe(
      response => { alert(`Playlist deleted successfully.`)
      this.router.navigateByUrl("")
    },
      error => { alert(`Error found.`)}
    )
  }
}
