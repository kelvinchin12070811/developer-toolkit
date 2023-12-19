import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringHashRoutingModule } from './pages/string-hash/string-hash-routing.module';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'generators/uuid',
        loadComponent: () =>
            import('./pages/generators/uuid/uuid.component').then(m => m.UuidComponent),
    },
    {
        path: 'generators/timestamp',
        loadComponent: () =>
            import('./pages/generators/timestamp/timestamp.component').then(
                m => m.TimestampComponent
            ),
    },
    {
        path: 'generators/char',
        loadComponent: () =>
            import('./pages/generators/char/char.component').then(m => m.CharComponent),
    },
    {
        path: 'generators/lorem-ipsum',
        loadComponent: () =>
            import('./pages/generators/lorem-ipsum/lorem-ipsum.component').then(
                m => m.LoremIpsumComponent
            ),
    },
    {
        path: 'generators/barcode',
        loadComponent: () =>
            import('./pages/generators/barcodes/barcodes.component').then(m => m.BarcodesComponent),
    },
    {
        path: 'string-hash',
        loadChildren: async () =>
            (await import('./pages/string-hash/string-hash.module')).StringHashModule,
    },
    {
        path: 'utils/link-shortener',
        loadChildren: () =>
            import('./pages/string-hash/string-hash.module').then(m => m.StringHashModule),
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
