import { Component } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-song-by-admin',
  templateUrl: './add-song-by-admin.component.html',
  styleUrls: ['./add-song-by-admin.component.css']
})
export class AddSongByAdminComponent {
  
  constructor(private admin : AdminServiceService, private _snackBar: MatSnackBar, private router: Router ) { }
 
  data= new FormGroup(
    {
      "songId" : new FormControl(""),
      "songName" : new FormControl(""),
      "artist" : new FormControl(""),
      "duration" : new FormControl(""),
      "genre" : new FormControl(""),          
    }
    )

  ngOnInit(): void {}

    addSong(){      
      this.admin.addSong(this.data.value).subscribe(
        response => { this._snackBar.open('Congrats, you have added the song !!', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']          
        })
        this.router.navigateByUrl("")
           },
        error => {this._snackBar.open('Sorry, Song is already exist !!', 'failure', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        })
      }
      )      
    }
}
