import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {Ping, PingService}   from './ping.service';

@Component({
  template: `
    <div *ngIf="ping">
      <a [routerLink]="['Home']">&lt;&nbsp;Back</a>
      <h3>{{ping.user}} - {{ ping.time }}</h3>
      <div>
        <img  src="{{getImgSrc()}}" />
      </div>
    </div>
    `,
  directives: [ROUTER_DIRECTIVES]
})

export class DetailsComponent implements OnInit {
  ping: Ping;

  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _service:PingService){}

  ngOnInit() {
    let id = this._routeParams.get('id');
    this._service.getPing(id).then(ping => this.ping = ping);
  }

  getImgSrc() {
    return "https://maps.googleapis.com/maps/api/staticmap?center=" + this.ping.lat + "," + this.ping.long + "&zoom=18&size=300x300&sensor=false";
  }

}
