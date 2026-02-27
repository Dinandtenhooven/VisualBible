import { Routes } from '@angular/router';
import { AppsMenuComponent } from './apps-menu/apps-menu.component';
import { GenealogyComponent } from './apps/genealogy/genealogy.component';

export const routes: Routes = [
    { path: '', component: AppsMenuComponent },
    { path: 'genealogy', component: GenealogyComponent },
];
