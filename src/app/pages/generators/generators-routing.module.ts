import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'uuid',
        loadComponent: async () => (await import('./uuid/uuid.component')).UuidComponent,
    },
    {
        path: 'timestamp',
        loadComponent: async () =>
            (await import('./timestamp/timestamp.component')).TimestampComponent,
    },
    {
        path: 'char',
        loadComponent: async () => (await import('./char/char.component')).CharComponent,
    },
    {
        path: 'lorem-ipsum',
        loadComponent: async () =>
            (await import('./lorem-ipsum/lorem-ipsum.component')).LoremIpsumComponent,
    },
    {
        path: 'barcode',
        loadComponent: async () =>
            (await import('./barcodes/barcodes.component')).BarcodesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GeneratorsRoutingModule {}
