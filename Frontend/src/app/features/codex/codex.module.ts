import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodexRoutingModule } from './codex-routing.module';
import { CodexHomeComponent } from './codex-home/codex-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemsBrowserComponent } from './items-browser/items-browser.component';
import { RecipesBrowserComponent } from './recipes-browser/recipes-browser.component';
import { BuildingsBrowserComponent } from './buildings-browser/buildings-browser.component';


@NgModule({
    declarations: [CodexHomeComponent, ItemsBrowserComponent, RecipesBrowserComponent, BuildingsBrowserComponent],
    imports: [
        CommonModule,
        CodexRoutingModule,
        SharedModule
    ]
})
export class CodexModule
{}
