import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMqttMessage } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { EventMqttService } from './event-mqtt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(private eventMqttService: EventMqttService) {
  }

  ngOnInit(): void {
    this.subscription = this.eventMqttService.observe('devices/+/version')
      .subscribe((data: IMqttMessage) => {
        console.log(data.payload.toString());
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
