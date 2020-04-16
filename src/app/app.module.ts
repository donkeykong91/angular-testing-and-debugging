import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { XyzUserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClientModule, routing ],
  declarations: [ AppComponent, XyzUserListComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
