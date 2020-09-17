import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { EmitterComponent } from './messages/emitter.component';
import { ReceiverComponent } from './messages/receiver.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './users/user/user.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './users/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    EmitterComponent,
    ReceiverComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    ErrorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
