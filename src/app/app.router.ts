import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpageComponent } from './main/mainpage/mainpage.component';
import { GetsybaseemployeeComponent } from './administrator/getsybaseemployee/getsybaseemployee.component';
import { QuizmanagementComponent } from './quiz/quizmanagement/quizmanagement.component';
import { QuizauthenComponent } from './quiz/quizauthen/quizauthen.component';
import { QuizProcessComponent } from './quiz/quiz-process/quiz-process.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
    { path: 'mainpage', component: MainpageComponent },
    { path: 'getsybaseemployee', component: GetsybaseemployeeComponent },
    { path: 'quizauthen', component: QuizauthenComponent },
    { path: 'quizmgnt', component: QuizmanagementComponent },
    { path: 'quizmgnt/:username/:section', component: QuizmanagementComponent },
    { path: 'quizprocess', component: QuizProcessComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
