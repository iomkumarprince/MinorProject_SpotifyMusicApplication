import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  // url : string = "http://localhost:8085/api/v1/song/addSong";

  constructor(private http : HttpClient) { }
  addSong(data : any){
    const jwtToken = localStorage.getItem("jwtKey");
    console.log(jwtToken);
    const httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + jwtToken
    });
    console.log(httpHeaders)
    const requestOptions = { headers: httpHeaders };
    return this.http.post('http://localhost:9000/api/v2/addSong/${emailId}',data, requestOptions);    
  }
}
