import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MqttModule } from 'ngx-mqtt';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MqttModule.forRoot({
      hostname: '192.168.178.28',
      port: 1884,
      path: '',
      protocol: 'ws'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
