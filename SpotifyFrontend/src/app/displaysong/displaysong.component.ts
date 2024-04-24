import { Component } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';
import { Router } from '@angular/router';
import { SongService } from '../services/song.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-displaysong',
  templateUrl: './displaysong.component.html',
  styleUrls: ['./displaysong.component.css'],
  
})
export class DisplaysongComponent {

 songs : any = [];
 songName : string = "";



 constructor(private song: SongService,private _snackBar: MatSnackBar, private userservice: UserLoginService, private router: Router) { }

 ngOnInit(){
  this.getSongs();
 }


  getSongs() {
    this.song.getSong().subscribe(
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


  deleteSong(songName : string){    
    this.song.delSong(songName).subscribe(
      response  => {alert(`Song Deleted Successfully!`)
      this.router.navigateByUrl("")},
      error => alert(JSON.stringify(error)) 
    )
  }
}
