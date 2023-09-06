import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { BarcodeInvalidsComponent } from './pages/barcodeInvalids/barcodeInvalids.component';
import { HomeComponent } from './pages/home/home.component';
import { DeclarativeBarcodeInvalidsComponent } from './pages/declarative-barcode-invalids/declarative-barcode-invalids.component';
// import { BarcodeInvalidsService } from './services/barcodeInvalid.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarcodeInvalidsComponent,
    HomeComponent,
    DeclarativeBarcodeInvalidsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    // BarcodeInvalidsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
