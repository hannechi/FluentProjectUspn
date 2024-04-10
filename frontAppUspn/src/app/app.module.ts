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
import { MoreInformationVersionWikiComponent } from './adminPanel/more-information-version-wiki/more-information-version-wiki.component';
import { AllForumQAComponent } from './forum/all-forum-qa/all-forum-qa.component';
import { QuestionListForumComponent } from './forum/question-list-forum/question-list-forum.component';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddQuestionComponent } from './forum/modal-add-question/modal-add-question.component';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionAndResponsesFillComponent } from './forum/question-and-responses-fill/question-and-responses-fill.component';
import { ConversationQAComponent } from './forum/conversation-qa/conversation-qa.component';
import { ModalAddResponseComponent } from './forum/modal-add-response/modal-add-response.component';
import { ModalUpdateQuestionComponent } from './forum/modal-update-question/modal-update-question.component';
<<<<<<< HEAD
import { ModalUpdateResponseComponent } from './forum/modal-update-response/modal-update-response.component';

=======
import { ModalUpdateResponseComponent } from './forum/modal-update-response/modal-update-response.component'; // this is needed!
>>>>>>> 29194d2f8ce71a48bf35d96902922a1e7720e111

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
    ListItemLogComponent,
    MoreInformationVersionWikiComponent,
    AllForumQAComponent,
    QuestionListForumComponent,
    ModalAddQuestionComponent,
    QuestionAndResponsesFillComponent,
    ConversationQAComponent,
    ModalAddResponseComponent,
    ModalUpdateQuestionComponent,
    ModalUpdateResponseComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbDropdownModule,
    NgbPopoverModule,
    TagInputModule, 
    BrowserAnimationsModule
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
