import { Component } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { UserLoginService } from '../services/user-login.service';
import { Router } from '@angular/router';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-createplaylist',
  templateUrl: './createplaylist.component.html',
  styleUrls: ['./createplaylist.component.css']
})
export class CreateplaylistComponent {

  playlistName : string = "";

  constructor(private playlist : PlaylistService, private router: Router, private login : UserLoginService ){}

  createPlaylist(){
    this.playlist.createPlaylist(this.playlistName).subscribe( 
      response => { alert("Playlist created successfully.")        
      this.router.navigateByUrl("")
    },
      error => { alert("Playlist already exists.")}
    )
  }
}
