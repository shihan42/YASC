import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { BuildingsBrowserComponent } from './components/buildings/buildings-browser/buildings-browser.component';

import { CodexHomeComponent } from './components/codex-home/codex-home.component';
import { ItemDetailComponent } from './components/items/item-detail/item-detail.component';
import { ItemsBrowserComponent } from './components/items/items-browser/items-browser.component';
import { RecipesBrowserComponent } from './components/recipes/recipes-browser/recipes-browser.component';


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
                component: ItemsBrowserComponent,
                pathMatch: 'full'
            },
            {
                path: 'items/:itemId',
                component: ItemDetailComponent
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
