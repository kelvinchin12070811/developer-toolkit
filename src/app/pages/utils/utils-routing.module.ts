/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'link-shortener',
        loadComponent: async () =>
            (await import('./link-shortener/link-shortener.component')).LinkShortenerComponent,
    },
    {
        path: 'string-compare',
        loadComponent: async () =>
            (await import('./string-compare/string-compare.component')).StringCompareComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UtilsRoutingModule {}
