import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './shared/layouts/auth/auth.component';
import { AdminComponent } from './shared/layouts/admin/admin.component';
import { NavbarComponent } from './shared/layouts/navbar/navbar.component';
import { SearchComponent } from './shared/layouts/search/search.component';
import { SliderComponent } from './shared/layouts/slider/slider.component';
import { TableComponent } from './shared/layouts/table/table.component';
import { ImageGridComponent } from './shared/layouts/image-grid/image-grid.component';
import { BannerFullWidthComponent } from './shared/layouts/banner-full-width/banner-full-width.component';
import { WhyChooseVistaComponent } from './shared/layouts/why-choose-vista/why-choose-vista.component';

import { IvyCarouselModule } from 'angular-responsive-carousel';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminComponent,
    NavbarComponent,
    SearchComponent,
    SliderComponent,
    TableComponent,
    ImageGridComponent,
    BannerFullWidthComponent,
    WhyChooseVistaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
