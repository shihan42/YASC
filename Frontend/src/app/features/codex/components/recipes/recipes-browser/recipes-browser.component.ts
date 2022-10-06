import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';


@Component({
	selector:    'app-recipes-browser',
	templateUrl: './recipes-browser.component.html',
	styleUrls: [ './recipes-browser.component.css' ]
})
export class RecipesBrowserComponent implements OnInit
{
    constructor(
        private titleService: Title,
        private logger: NGXLogger
    )
    {}

    ngOnInit(): void
    {
        this.titleService.setTitle('YASC - Recipes');
        this.logger.log('Recipes browser loaded');
    }
}
