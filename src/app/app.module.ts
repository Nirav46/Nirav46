import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// import { AngularFirestoreModule } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
