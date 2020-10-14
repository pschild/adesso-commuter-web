import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MqttModule } from 'ngx-mqtt';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MqttModule.forRoot({
      hostname: environment.env.WS_URL,
      port: environment.env.WS_PORT,
      path: '',
      protocol: 'ws'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
