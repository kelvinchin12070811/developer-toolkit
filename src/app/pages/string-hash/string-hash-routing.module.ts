import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'md5',
        loadComponent: () => import('./md5/md5.component').then(m => m.Md5Component),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StringHashRoutingModule {}
