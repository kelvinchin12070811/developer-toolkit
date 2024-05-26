import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'base64',
        loadComponent: async () =>
            (await import('./base64-encoder/base64-encoder.component')).Base64EncoderComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EncodersRoutingModule {}
