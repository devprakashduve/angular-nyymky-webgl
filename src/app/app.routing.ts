import { Routes, RouterModule } from '@angular/router';
import { DayOneComponent } from './day-one';
import { BlogComponent } from './blog';


const routes: Routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
 
    { path: 'dayone', component: DayOneComponent }, 
    { path: 'blog', component: BlogComponent }, 

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


export const appRoutingModule = RouterModule.forRoot(routes);