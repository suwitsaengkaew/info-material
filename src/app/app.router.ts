import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './main/mainpage/mainpage.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { AuthenComponent } from './authentication/authen/authen.component';

import { GetsybaseemployeeComponent } from './administrator/getsybaseemployee/getsybaseemployee.component';
import { QuizmanagementComponent } from './quiz/quizmanagement/quizmanagement.component';
import { QuizProcessComponent } from './quiz/quiz-process/quiz-process.component';

import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
    // { path: '', redirectTo: '/mainpage', pathMatch: 'full', canActivate: [AuthGuard] },
    // { path: 'mainpage', component: MainpageComponent },
    { path: '', component: MainpageComponent, canActivate: [AuthGuard] },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    // { path: 'mainpage', component: MainpageComponent },
    { path: 'getsybaseemployee', component: GetsybaseemployeeComponent },
    { path: 'authen', component: AuthenComponent },
    { path: 'quizmgnt', component: QuizmanagementComponent },
    { path: 'quizmgnt/:username/:section', component: QuizmanagementComponent },
    { path: 'quizprocess', component: QuizProcessComponent },

    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
