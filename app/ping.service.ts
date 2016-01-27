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

  getLocation() {
    if (!navigator.geolocation){
      console.error("Geolocation is not supported by your browser");
      return;
    }

    function success(position) {
      var lat  = position.coords.latitude;
      var long = position.coords.longitude;

      console.log('got location');
      console.log(lat, long);
    }

    function error() {
      console.error('something went wrong');
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }

  sendPing() {
    console.log("getting location");
    this.getLocation();
  }

};


var PINGS = [
  new Ping(3, 'andy', new Date("2016/01/27 10:00:01"), "34.0642487", "-118.36471739999999"),
  new Ping(2, 'andy', new Date("2016/01/27 09:30:01"), "34.0642487", "-118.54471739999999"),
  new Ping(1, 'kyle', new Date("2016/01/27 09:00:01"), "34.0642487", "-119.36471739999999"),
];

var pingsPromise = Promise.resolve(PINGS);
