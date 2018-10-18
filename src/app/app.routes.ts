import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    // { path: 'peliculas', component: Name2Component },
    // { path: 'horarios', component: Name3Component },
    // { path: 'contacto', component: Name4Component },
    // { path: '**', component: PageNotFoundComponent },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
