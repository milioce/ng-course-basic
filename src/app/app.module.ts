import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/services/servers.service';
import { LoggerService } from './servers/services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ShortenPipe,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    ServersService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
