import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { examples } from './examples';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },

  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome.component')
  },
  {
    path: 'menu',
    loadComponent: () => import('./main-menu/main-menu.component')
  },

  ...examples,

  {
    path: 'about',
    loadComponent: () => import('./about/about.component')
  },
  {
    path: 'resources',
    loadComponent: () => import('./resources/resources.component')
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
