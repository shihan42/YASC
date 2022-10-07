import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';


@Component({
    selector:    'app-codex-home',
    templateUrl: './codex-home.component.html',
    styleUrls: [ './codex-home.component.css' ]
})
export class CodexHomeComponent implements OnInit
{
    constructor(
        private titleService: Title,
        private logger: NGXLogger
    )
    {}

    ngOnInit(): void
    {
        this.titleService.setTitle("Codex - YASC");
        this.logger.log("Codex loaded");
    }
}
