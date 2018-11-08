import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, DashboardComponent, ListagemDrogariasComponent } from './_components';
import { AuthGuard } from './_guards';

const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    { path: 'drogarias', component: ListagemDrogariasComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always', },

    { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
