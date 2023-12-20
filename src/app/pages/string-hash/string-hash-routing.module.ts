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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StringHashRoutingModule {}
