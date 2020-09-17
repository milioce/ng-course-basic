import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ServerResolver } from './servers/services/server-resolver.service';
import { LoginComponent } from './users/login/login.component';
import { AuthGuardService } from './users/services/auth-guard.service';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'users', component: UsersComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'users/:id/:name', component: UserComponent },

  {
    path: 'servers',
    loadChildren: () => import('./servers/servers.module').then(m => m.ServersModule)
  },

  { path: 'login', component: LoginComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent, data: { code: 404 } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
