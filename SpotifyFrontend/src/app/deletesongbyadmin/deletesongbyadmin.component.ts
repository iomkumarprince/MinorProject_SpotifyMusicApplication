import { Component } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';
import { SongService } from '../services/song.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletesongbyadmin',
  templateUrl: './deletesongbyadmin.component.html',
  styleUrls: ['./deletesongbyadmin.component.css']
})
export class DeletesongbyadminComponent {

  songName : string = "";

constructor(private login : UserLoginService, private song : SongService, private router: Router){}

ngOnInit(){  
}
  

  deleteSong(){    
    this.song.delSong(this.songName).subscribe(
      response  => {alert(`Song Deleted Successfully!`)
      this.router.navigateByUrl("")},
      error => alert(JSON.stringify(error)) 
    )
  }
}
