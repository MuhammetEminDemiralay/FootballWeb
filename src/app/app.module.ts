import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderboxComponent } from './Header/headerbox/headerbox.component';
import { NaviComponent } from './Header/navi/navi.component';
import { SelectboxComponent } from './Header/selectbox/selectbox.component';
import { FootballerComponent } from './Main/footballer/footballer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderboxComponent,
    NaviComponent,
    SelectboxComponent,
    FootballerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
