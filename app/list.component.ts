import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {Ping, PingService}   from './ping.service';

@Component({
  templateUrl: 'list.html'
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

  sendPing() {
    console.log('send ping');
    this._service.sendPing();
  }

  ngOnInit() {
    this._service.getPings().then(pings => this.pings = pings)
  }

}
