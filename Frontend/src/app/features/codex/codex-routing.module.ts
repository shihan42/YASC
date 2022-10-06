import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { BuildingsBrowserComponent } from './buildings-browser/buildings-browser.component';

import { CodexHomeComponent } from './codex-home/codex-home.component';
import { ItemsBrowserComponent } from './items-browser/items-browser.component';
import { RecipesBrowserComponent } from './recipes-browser/recipes-browser.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: CodexHomeComponent,
                pathMatch: 'full'
            },
            {
                path: 'items',
                component: ItemsBrowserComponent
            },
            {
                path: 'recipes',
                component: RecipesBrowserComponent
            },
            {
                path: 'buildings',
                component: BuildingsBrowserComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CodexRoutingModule
{}
