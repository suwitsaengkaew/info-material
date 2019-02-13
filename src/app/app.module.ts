import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material-module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.router';
import { AuthenticationService } from './_services/authentication.service';
import { GetsybaseemployeeComponent } from './administrator/getsybaseemployee/getsybaseemployee.component';
import { QuizmanagementComponent } from './quiz/quizmanagement/quizmanagement.component';
import { HeaderComponent } from './header/header/header.component';
import { MainpageComponent } from './main/mainpage/mainpage.component';
import { QuizProcessComponent } from './quiz/quiz-process/quiz-process.component';
import { AuthenComponent } from './authentication/authen/authen.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    GetsybaseemployeeComponent,
    QuizmanagementComponent,
    HeaderComponent,
    MainpageComponent,
    QuizProcessComponent,
    AuthenComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
