import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  

  baseUrl: string = "http://localhost:8085/api/v1/playlist";
  url:string = "http://localhost:8085/api/v1/playlist/addSongPlaylist/";

  emailId : string = "";

  songName : string = "";

  constructor(private http : HttpClient) { }

  createPlaylist(playlistName : string){
    const jwtToken = localStorage.getItem("jwtKey");
    console.log(jwtToken);
    const httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + jwtToken
    });
    console.log(httpHeaders)
    const requestOptions = { headers: httpHeaders };
    return this.http.post(this.baseUrl +"/createPlaylist/"+ this.emailId , playlistName, requestOptions);  
  }

  watchPlaylist(){
    const jwtToken = localStorage.getItem("jwtKey");   
    const httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + jwtToken
    });
    const requestOptions = { headers: httpHeaders };
    return this.http.get(this.baseUrl+"/findSongs", requestOptions);
  }

  deletePlaylist(playlistName : string){
    const jwtToken = localStorage.getItem("jwtKey");   
    const httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + jwtToken
    });
    const requestOptions = { headers: httpHeaders };
    return this.http.delete(this.baseUrl+"/deletePlaylist/"+playlistName, requestOptions);
  }

  addSongToPlaylist(playlistName : string, songName : string){
    const jwtToken = localStorage.getItem("jwtKey");   
    const httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + jwtToken
    });
    const requestOptions = { headers: httpHeaders };
    return this.http.get(this.url + playlistName + "/" +songName, requestOptions);
  }

  
  deleteSongFromPlaylist(playlistName : string, songName : string){
    const jwtToken = localStorage.getItem("jwtKey");
    console.log(jwtToken);
    const httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + jwtToken
    });
    console.log(httpHeaders)
    const requestOptions = { headers: httpHeaders };
    return this.http.get(this.baseUrl +"/delFromPlaylist/" + playlistName + "/" +songName, requestOptions);  
  }

  getAllSongsOfThePlaylist(playlistName:string){
    const jwtToken = localStorage.getItem("jwtKey");
    console.log(jwtToken);
    const httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + jwtToken
    });
    console.log(httpHeaders)
    const requestOptions = { headers: httpHeaders };
    return this.http.get(this.baseUrl + "/getSongs/" + playlistName, requestOptions);
  }
}
