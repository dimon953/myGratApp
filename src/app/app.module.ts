import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';

@NgModule({
  declarations: [
      AppComponent, AlbumComponent, TrackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
