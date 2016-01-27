System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Ping, PingService, PINGS, pingsPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Ping = (function () {
                function Ping(id, user, time, lat, long) {
                    this.id = id;
                    this.user = user;
                    this.time = time;
                    this.lat = lat;
                    this.long = long;
                }
                return Ping;
            })();
            exports_1("Ping", Ping);
            PingService = (function () {
                function PingService() {
                }
                PingService.prototype.getPings = function () { return pingsPromise; };
                PingService.prototype.getPing = function (id) {
                    return pingsPromise
                        .then(function (pings) { return pings.filter(function (h) { return h.id === +id; })[0]; });
                };
                PingService.prototype.getLocation = function () {
                    if (!navigator.geolocation) {
                        console.error("Geolocation is not supported by your browser");
                        return;
                    }
                    function success(position) {
                        var lat = position.coords.latitude;
                        var long = position.coords.longitude;
                        console.log('got location');
                        console.log(lat, long);
                    }
                    function error() {
                        console.error('something went wrong');
                    }
                    navigator.geolocation.getCurrentPosition(success, error);
                };
                PingService.prototype.sendPing = function () {
                    console.log("getting location");
                    this.getLocation();
                };
                PingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PingService);
                return PingService;
            })();
            exports_1("PingService", PingService);
            ;
            PINGS = [
                new Ping(3, 'andy', new Date("2016/01/27 10:00:01"), "34.0642487", "-118.36471739999999"),
                new Ping(2, 'andy', new Date("2016/01/27 09:30:01"), "34.0642487", "-118.54471739999999"),
                new Ping(1, 'kyle', new Date("2016/01/27 09:00:01"), "34.0642487", "-119.36471739999999"),
            ];
            pingsPromise = Promise.resolve(PINGS);
        }
    }
});
//# sourceMappingURL=ping.service.js.map