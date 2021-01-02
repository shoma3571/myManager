import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DetailListsComponent } from './detail-lists/detail-lists.component';
import { InputFormsComponent } from './input-forms/input-forms.component';

import { DateFormComponent } from './date-form/date-form.component';

import { DetailListsModule } from './detail-lists/detail-lists.module';

@NgModule({
  declarations: [
    DetailListsComponent,
    InputFormsComponent,
    DateFormComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    DetailListsModule
  ],
  exports: [
    DetailListsComponent,
    InputFormsComponent,
    DateFormComponent
  ]
})
export class ComponentsModule { }
