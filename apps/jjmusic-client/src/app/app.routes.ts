import { Route } from '@angular/router';
import { HomeComponent } from '@jjmusic-nx-monorepo/client/domain/home';
import { SignUpComponent } from '@jjmusic-nx-monorepo/client/domain/auth/sign-up';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  //   { path: 'lessons', component: undefined },
  //   { path: 'sheet-music', component: undefined },
  //   { path: 'contact-us', component: undefined },
  { path: 'sign-up', component: SignUpComponent },
  //   { path: 'log-in', component: undefined },
];
