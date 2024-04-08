import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllvitrineComponent } from './vitrine/allvitrine/allvitrine.component';
import { AllModificationWikiComponent } from './wiki/all-modification-wiki/all-modification-wiki.component';
import { AllConsulterWikiComponent } from './wiki/all-consulter-wiki/all-consulter-wiki.component';
import { AllDashboradComponent } from './adminPanel/all-dashborad/all-dashborad.component';
import { ListUserRoleComponent } from './adminPanel/list-user-role/list-user-role.component';
import { ListItemLogComponent } from './adminPanel/list-item-log/list-item-log.component';

const routes: Routes = [
  {path:"USPN_cfd",redirectTo:'/',pathMatch:'full'},
  {path:"",component:AllvitrineComponent},
  {path:"modificationwiki",component:AllModificationWikiComponent},
  {path:"consulterwiki",component:AllConsulterWikiComponent},
  {path:"admin",component:AllDashboradComponent,children:
  [
    {path:"listuser",component:ListUserRoleComponent},
    {path:"WikiLOG",component:ListItemLogComponent},

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
