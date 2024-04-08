import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllModificationWikiComponent } from './wiki/all-modification-wiki/all-modification-wiki.component';
import { AllConsulterWikiComponent } from './wiki/all-consulter-wiki/all-consulter-wiki.component';
import { NavbarComponent } from './vitrine/navbar/navbar.component';
import { BodyVitrineComponent } from './vitrine/body-vitrine/body-vitrine.component';
import { AllvitrineComponent } from './vitrine/allvitrine/allvitrine.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { SidebarwikiComponent } from './wiki/sidebarwiki/sidebarwiki.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from './authentification/sign-in/sign-in.component';
import { AllDashboradComponent } from './adminPanel/all-dashborad/all-dashborad.component';
import { SideBarDashboradComponent } from './adminPanel/side-bar-dashborad/side-bar-dashborad.component';
import { ListUserRoleComponent } from './adminPanel/list-user-role/list-user-role.component';
import { ListItemLogComponent } from './adminPanel/list-item-log/list-item-log.component';
@NgModule({
  declarations: [
    AppComponent,
    AllModificationWikiComponent,
    AllConsulterWikiComponent,
    NavbarComponent,
    BodyVitrineComponent,
    AllvitrineComponent,
    SidebarwikiComponent,
    SignInComponent,
    AllDashboradComponent,
    SideBarDashboradComponent,
    ListUserRoleComponent,
    ListItemLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbDropdownModule
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
