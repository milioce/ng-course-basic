import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServersComponent } from './servers.component';
import { ServerComponent } from './server/server.component';
import { ServerResolver } from './services/server-resolver.service';

const routes: Routes = [
  { path: '', component: ServersComponent, children: [
    {
      path: ':id', component: ServerComponent,
      resolve: { 'server': ServerResolver}
    }
  ]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServersRoutingModule { }
