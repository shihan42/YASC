import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggerModule } from 'ngx-logger';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './state';
import { ItemsEffects } from './state/itemsState/items.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


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
		StoreModule.forRoot(reducers, {metaReducers}),
		EffectsModule.forRoot([ItemsEffects]),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
	],
	bootstrap: [AppComponent]
})
export class AppModule
{}
