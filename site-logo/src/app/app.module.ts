import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Box1Component } from './box1/box1.component';
import { FooterComponent } from './footer/footer.component';
import { BoxComponent } from './box/box.component';
import { Box2Component } from './box2/box2.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    Box1Component,
    FooterComponent,
    BoxComponent,
    Box2Component,
    SubheaderComponent,
    NavigationComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
