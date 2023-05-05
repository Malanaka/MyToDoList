import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdlsRoutingModule } from './tdls-routing.module';
import { TdlsMaterialModule } from './tdls-material.module';
import * as fromComponents from './components';
import * as fromContainers from './contains';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
    imports: [
       CommonModule,
       TdlsRoutingModule,
       FormsModule,
       TdlsMaterialModule,
       MatDatepickerModule,
       MatNativeDateModule

    ],
    declarations: [
       ...fromComponents.components,
       ...fromContainers.containers
    ],
    providers: []
})
export class TdlsModule { }
