import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/candeactive-guard.service'

const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},
  ]},
  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent},
  ]},
  {path: '**', component: PageNotFoundComponent, data: {message:"Page not found"}}
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
