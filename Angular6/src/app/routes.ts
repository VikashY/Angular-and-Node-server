import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
// import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AccessDeniedComponent } from './errors/access-denied/access-denied.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'access-denied', component: AccessDeniedComponent
    },
    {
        path: 'aboutus', component: AboutusComponent
    },
    {
        path: 'PaymentDetail', component: PaymentDetailsComponent
        // ,canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }
];