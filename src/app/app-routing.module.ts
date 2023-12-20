import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringHashRoutingModule } from './pages/string-hash/string-hash-routing.module';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'generators',
        loadChildren: async () =>
            (await import('./pages/generators/generators.module')).GeneratorsModule,
    },
    {
        path: 'string-hash',
        loadChildren: async () =>
            (await import('./pages/string-hash/string-hash.module')).StringHashModule,
    },
    {
        path: 'utils',
        loadChildren: async () => (await import('./pages/utils/utils.module')).UtilsModule,
    },
    {
        path: 'settings',
        loadComponent: async () =>
            (await import('./pages/settings/common/common.component')).CommonComponent,
    },
    {
        path: '**',
        loadComponent: async () =>
            (await import('./pages/http-status/not-found/not-found.component')).NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
