import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromContainers from './contains';

const routes: Routes = [
   {
        path: '',
        component: fromContainers.TdsComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TdlsRoutingModule { }
