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
                PingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PingService);
                return PingService;
            })();
            exports_1("PingService", PingService);
            PINGS = [
                new Ping(3, 'andy', 1453877474, 34.0642487. - 118.36471739999999),
                new Ping(2, 'andy', 1453876474, 34.0642487. - 118.36471739999999),
                new Ping(1, 'kyle', 1453875474, 34.0642487. - 118.36471739999999),
            ];
            pingsPromise = Promise.resolve(PINGS);
        }
    }
});
//# sourceMappingURL=pings.service.js.map