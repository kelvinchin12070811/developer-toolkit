import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/common/common.component').then(
        (m) => m.CommonComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/http-status/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
