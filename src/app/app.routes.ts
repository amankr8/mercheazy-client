import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { Oauth2RedirectComponent } from './pages/oauth2-redirect/oauth2-redirect.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AuthGuard } from './util/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'oauth2/callback', component: Oauth2RedirectComponent },
  { path: '**', redirectTo: '' },
];
