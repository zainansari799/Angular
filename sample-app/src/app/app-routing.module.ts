import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IntroductionComponent } from './landing-page/introduction/introduction.component';
import { EducationComponent } from './landing-page/education/education.component';
import { SkillsComponent } from './landing-page/skills/skills.component';
import { ContactsComponent } from './landing-page/contacts/contacts.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { 
    path: 'landingPage',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        component: IntroductionComponent
      },
      {
        path: 'introduction',
        component: IntroductionComponent
      },
      {
        path: 'education',
        component: EducationComponent
      },
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
