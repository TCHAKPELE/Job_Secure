import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DATE_LOCALE } from '@angular/material/core';
@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatChipsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatMenuModule,
    MatDialogModule,
    MatSortModule,
    MatGridListModule,
    MatTooltipModule,
    MatTabsModule



  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }
  ]
})
export class MaterialModule {}