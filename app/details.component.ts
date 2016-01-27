import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {Ping, PingService}   from './ping.service';

@Component({
  template: `
    <div *ngIf="ping">
      <h3>{{ping.user}} - {{ ping.time }}</h3>
      <div>
        <label>Id: </label>{{ping.id}}
      </div>
    </div>
    `
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

}
