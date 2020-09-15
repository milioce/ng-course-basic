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

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ShortenPipe,
    ServerComponent,
    CreateServerComponent,
    CreateServerTdComponent,
    EmitterComponent,
    ReceiverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
