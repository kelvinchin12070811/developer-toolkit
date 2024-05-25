import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'base64',
        loadComponent: async () =>
            (await import('./base64-decoder/base64-decoder.component')).Base64DecoderComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DecodersRoutingModule {}
