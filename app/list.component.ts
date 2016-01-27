import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {Ping, PingService}   from './ping.service';

@Component({
  template: `
  <ul>
    <li *ngFor="#ping of pings"
      (click)="onSelect(ping)">
       {{ ping.user }} - {{ ping.time }}
    </li>
  </ul>
  `
})

export class ListComponent implements OnInit {
  pings: Ping[];

  private _selectedId: number;

  constructor(
    private _service: PingService,
    private _router: Router,
    routeParams: RouteParams) {
      this._selectedId = +routeParams.get('id');
  }

  onSelect(ping: Ping) {
    this._router.navigate( ['Detail', { id: ping.id }] );
  }

  ngOnInit() {
    this._service.getPings().then(pings => this.pings = pings)
  }

}
