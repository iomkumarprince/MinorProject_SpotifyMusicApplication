import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateplaylistComponent } from './createplaylist/createplaylist.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddSongByAdminComponent } from './add-song-by-admin/add-song-by-admin.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { LogoutComponent } from './logout/logout.component';
import { DeletesongbyadminComponent } from './deletesongbyadmin/deletesongbyadmin.component';
import { WatchplaylistComponent } from './watchplaylist/watchplaylist.component';
import { AddsongtoplaylistComponent } from './addsongtoplaylist/addsongtoplaylist.component';
import {MatTableModule} from '@angular/material/table';
import { DeletesongfromplaylistComponent } from './deletesongfromplaylist/deletesongfromplaylist.component';
import { DeleteplaylistComponent } from './deleteplaylist/deleteplaylist.component';
import { GetSongsOfPlaylistComponent } from './get-songs-of-playlist/get-songs-of-playlist.component';
import { LoginGuard } from 'src/guards/login.guard';
import { LogoutGuard } from 'src/guards/logout.guard';
import {MatExpansionModule} from '@angular/material/expansion';
import { DisplaysongComponent } from './displaysong/displaysong.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    CreateplaylistComponent,
    DashboardComponent,
    AddSongByAdminComponent,
    LogoutComponent,
    DeletesongbyadminComponent,
    WatchplaylistComponent,    
    AddsongtoplaylistComponent,
    DeletesongfromplaylistComponent,
    DeleteplaylistComponent,
    GetSongsOfPlaylistComponent,
    DisplaysongComponent,
    NavbarComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatMenuModule,
    NgbModule

    

  ],
  providers: [LoginGuard, LogoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
