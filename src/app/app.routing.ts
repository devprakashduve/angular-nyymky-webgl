import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
 
    { path: 'dayOne', component: DayOneComponent }, 

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


export const appRoutingModule = RouterModule.forRoot(routes);