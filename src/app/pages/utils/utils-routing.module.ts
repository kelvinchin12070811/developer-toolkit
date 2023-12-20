import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'link-shortener',
        loadComponent: async () =>
            (await import('./link-shortener/link-shortener.component')).LinkShortenerComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UtilsRoutingModule {}
