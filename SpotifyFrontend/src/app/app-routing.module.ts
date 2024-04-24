import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateplaylistComponent } from './createplaylist/createplaylist.component';
import { AddSongByAdminComponent } from './add-song-by-admin/add-song-by-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { DeletesongbyadminComponent } from './deletesongbyadmin/deletesongbyadmin.component';
import { WatchplaylistComponent } from './watchplaylist/watchplaylist.component';
import { DeleteplaylistComponent } from './deleteplaylist/deleteplaylist.component';
import { AddsongtoplaylistComponent } from './addsongtoplaylist/addsongtoplaylist.component';
import { DeletesongfromplaylistComponent } from './deletesongfromplaylist/deletesongfromplaylist.component';
import { GetSongsOfPlaylistComponent } from './get-songs-of-playlist/get-songs-of-playlist.component';
import { LoginGuard } from 'src/guards/login.guard';
import { DisplaysongComponent } from './displaysong/displaysong.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path : "", component : DashboardComponent },
  { path : 'Login', component : LoginComponent },
  { path : 'Signup', component : SignupComponent },
  { path : 'logout', component : LogoutComponent,canActivate : [LoginGuard] },
  { path : 'deleteSong', component : DeletesongbyadminComponent, canActivate : [LoginGuard] },
  { path : 'Dashboard', component : DashboardComponent },
  { path : 'watchPlaylist', component : WatchplaylistComponent, canActivate : [LoginGuard] },
  { path : 'createPlaylist', component : CreateplaylistComponent, canActivate : [LoginGuard] },
  { path : 'deletePlaylist', component : DeleteplaylistComponent, canActivate : [LoginGuard] },
  { path : 'addSongToPlaylist', component : AddsongtoplaylistComponent, canActivate : [LoginGuard] },
  { path : 'deleteSongFromPlaylist', component : DeletesongfromplaylistComponent, canActivate : [LoginGuard] },
  { path : 'getSongsFromPlaylist', component : GetSongsOfPlaylistComponent, canActivate : [LoginGuard] },
  { path : 'displaySong', component : DisplaysongComponent, canActivate : [LoginGuard] },
  { path : 'addSongByAdmin', component : AddSongByAdminComponent, canActivate : [LoginGuard] },
  { path : 'app', component : AppComponent },
  { path : '**', component : PagenotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
