import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    // MenuModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    PanelModule
  ]

})
export class PrimeNgModule { }
