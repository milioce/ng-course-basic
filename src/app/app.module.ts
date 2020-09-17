import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ServerComponent } from './servers/server/server.component';
import { CreateServerComponent } from './servers/create-server/create-server.component';
import { CreateServerTdComponent } from './servers/create-server/create-server-td.component';
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
    ServersComponent,
    ShortenPipe,
    ServerComponent,
    CreateServerComponent,
    CreateServerTdComponent,
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
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
