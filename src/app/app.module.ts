import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';
import { ReposComponent } from './repos/repos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
