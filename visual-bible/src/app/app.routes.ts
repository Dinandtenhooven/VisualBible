import { Routes } from '@angular/router';
import { AppsMenuComponent } from './apps-menu/apps-menu.component';
import { GenealogyComponent } from './apps/genealogy/genealogy.component';
import { ExplanationsComponent } from './apps/explanations/explanations.component';
import { EarthCurvatureExplanationComponent } from './apps/explanations/earth-curvature/earth-curvature.component';

export const routes: Routes = [
    { path: '', component: AppsMenuComponent },
    { path: 'genealogy', component: GenealogyComponent },
    { path: 'explanations', component: ExplanationsComponent },
    { path: 'explanations/earth-curvature', component: EarthCurvatureExplanationComponent }
];
