import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodexRoutingModule } from './codex-routing.module';
import { CodexHomeComponent } from './components/codex-home/codex-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemsBrowserComponent } from './components/items/items-browser/items-browser.component';
import { RecipesBrowserComponent } from './components/recipes/recipes-browser/recipes-browser.component';
import { BuildingsBrowserComponent } from './components/buildings/buildings-browser/buildings-browser.component';
import { ItemDetailComponent } from './components/items/item-detail/item-detail.component';
import { ItemFilterPipe } from './pipes/item-filter.pipe';


@NgModule({
    declarations: [
        CodexHomeComponent,
        ItemsBrowserComponent,
        ItemDetailComponent,
        RecipesBrowserComponent,
        BuildingsBrowserComponent,
        ItemFilterPipe
    ],
    imports: [
        CommonModule,
        CodexRoutingModule,
        SharedModule
    ]
})
export class CodexModule
{}
