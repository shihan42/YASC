import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { AuthenticationService } from 'src/app/core/services/auth.service';


@Component({
	selector:    'app-dashboard-home',
	templateUrl: './dashboard-home.component.html',
	styleUrls: [ './dashboard-home.component.css' ]
})
export class DashboardHomeComponent implements OnInit
{
	currentUser: any;

	constructor(
		private authService: AuthenticationService,
		private titleService: Title,
		private logger: NGXLogger
	)
	{}

	ngOnInit(): void
	{
		this.currentUser = this.authService.getCurrentUser();
		this.titleService.setTitle('YASC - Dashboard');
		this.logger.log('Dashboard loaded');
	}
}
