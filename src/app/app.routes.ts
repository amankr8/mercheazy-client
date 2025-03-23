import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { Oauth2RedirectComponent } from './pages/oauth2-redirect/oauth2-redirect.component';
import { UserProfileComponent } from './pages/landing/user-profile/user-profile.component';
import { AuthGuard } from './util/guard/auth.guard';
import { HomeComponent } from './pages/landing/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
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
