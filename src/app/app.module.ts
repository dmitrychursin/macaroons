import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ProductComponent} from './components/product/product.component';
import {ProductService} from './services/product.service';
import {AdvantagesService} from './services/advantages.service';
import {AdvantagesComponent} from './components/advantages/advantages.component';
import {BasketComponent} from './components/basket/basket.component';
import {PhonePipe} from './pipes/phone.pipe';
import {EffectsButtonsDirective} from './directives/effects-buttons.directive';
import {RestrictionTextPipe} from './pipes/restriction-text.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AdvantagesComponent,
    BasketComponent,
    PhonePipe,
    EffectsButtonsDirective,
    RestrictionTextPipe,
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ProductService, AdvantagesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
