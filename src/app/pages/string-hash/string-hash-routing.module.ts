/*************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 ************************************************************************************************************/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'md5',
        loadComponent: async () => (await import('./md5/md5.component')).Md5Component,
    },
    {
        path: 'sha1',
        loadComponent: async () => (await import('./sha1/sha1.component')).Sha1Component,
    },
    {
        path: 'sha3',
        loadComponent: async () => (await import('./sha3/sha3.component')).Sha3Component,
    },
    {
        path: 'sha2',
        loadComponent: async () => (await import('./sha2/sha2.component')).Sha2Component,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StringHashRoutingModule {}
