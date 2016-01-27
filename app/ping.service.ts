import {Injectable} from 'angular2/core';

export class Ping {
  constructor(public id: number, public user: string, public time: Date, public lat: string, public long: string) {}
}

@Injectable()

export class PingService {
  getPings() { return pingsPromise; }

  getPing(id: number | string) {
    return pingsPromise
            .then(pings => pings.filter(h => h.id === +id)[0]);
  }

};

var PINGS = [
  new Ping(3, 'andy', new Date("2016/01/27 10:00:01"), "34.0642487", "-118.36471739999999"),
  new Ping(2, 'andy', new Date("2016/01/27 09:30:01"), "37.0642487", "-118.54471739999999"),
  new Ping(1, 'kyle', new Date("2016/01/27 09:00:01"), "33.0642487", "-119.36471739999999"),
];

var pingsPromise = Promise.resolve(PINGS);
