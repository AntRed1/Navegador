import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { appConfig } from './components/app/app.config';
import { routes } from './components/app/app.routes';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      HttpClientModule,
      FormsModule,
      HomeComponent,
      AboutComponent,
      ContactComponent
    ),
    ...appConfig.providers,
  ],
}).catch((err: any) => console.error(err));
