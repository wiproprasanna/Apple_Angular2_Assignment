import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import {UsersComponent} from './users.component';
import {HttpModule} from '@angular/http';
@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule ],
  declarations: [ AppComponent ,UsersComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
