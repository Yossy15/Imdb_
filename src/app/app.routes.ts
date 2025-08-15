import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PersonComponent } from './components/person/person.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:id', component: MoviesComponent},
  { path: 'person/:id', component: PersonComponent},
  { path: '**', redirectTo: '' }
];