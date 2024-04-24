import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  baseUrl : string = "http://localhost:9000/api/v2/getSongs";

  delUrl : string = "http://localhost:9000/api/v2//deleteSongById/{songId}"


  constructor(private http : HttpClient) { }

  getSong(){       
    return this.http.get(this.baseUrl);   
  }

  delSong(songName : string){
    const jwtToken = localStorage.getItem("jwtKey");
    console.log(jwtToken);
    const httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + jwtToken
    });
    console.log(httpHeaders)
    const requestOptions = { headers: httpHeaders };
    return this.http.delete(this.delUrl+"/"+songName, requestOptions);
  }
}
