/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
        path: 'encoders',
        loadChildren: async () => (await import('./pages/encoders/encoders.module')).EncodersModule,
    },
    {
        path: 'decoders',
        loadChildren: async () => (await import('./pages/decoders/decoders.module')).DecodersModule,
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
