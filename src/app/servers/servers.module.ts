import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServersRoutingModule } from './servers-routing.module';
import { ServersComponent } from './servers.component';
import { ServerComponent } from './server/server.component';
import { CreateServerTdComponent } from './create-server/create-server-td.component';
import { CreateServerComponent } from './create-server/create-server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ServersComponent,
    ServerComponent,
    CreateServerComponent,
    CreateServerTdComponent,
  ],
  imports: [
    CommonModule,
    ServersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ServersModule { }
