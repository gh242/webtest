import { DeclarativeBarcodeInvalidsComponent } from './pages/declarative-barcode-invalids/declarative-barcode-invalids.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarcodeInvalidsComponent } from './pages/barcodeInvalids/barcodeInvalids.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'barcodeInvalids', component: BarcodeInvalidsComponent},
  { path: 'declarativeBarcodeInvalids', component: DeclarativeBarcodeInvalidsComponent},
  // { path: '', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
