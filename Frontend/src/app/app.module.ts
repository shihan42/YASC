import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AppRoutingModule } from './app-routing.module';
import { LoggerModule } from 'ngx-logger';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state';


@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CoreModule,
		SharedModule,
		CustomMaterialModule.forRoot(),
		AppRoutingModule,
		LoggerModule.forRoot({
			serverLoggingUrl: `http://my-api/logs`,
			level: environment.logLevel,
			serverLogLevel: environment.serverLogLevel
		}),
		StoreModule.forRoot(reducers, {metaReducers})
	],
	bootstrap: [AppComponent]
})
export class AppModule
{}
