import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ListComponent}      from './list.component';
import {DetailsComponent}   from './details.component';

import {PingService} from './ping.service'

@Component({
  selector: 'natlong-app',
  templateUrl: 'layout.html',
  providers:  [PingService],
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/',        name: 'Home',     component: ListComponent},
  {path:'/detail',  name: 'Detail',   component: DetailsComponent},
])

export class AppComponent { }
