System.register(['angular2/core', 'angular2/router', './ping.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, ping_service_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ping_service_1_1) {
                ping_service_1 = ping_service_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(_service, _router, routeParams) {
                    this._service = _service;
                    this._router = _router;
                    this._selectedId = +routeParams.get('id');
                }
                ListComponent.prototype.onSelect = function (ping) {
                    this._router.navigate(['Detail', { id: ping.id }]);
                };
                ListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getPings().then(function (pings) { return _this.pings = pings; });
                };
                ListComponent = __decorate([
                    core_1.Component({
                        template: "\n  <ul>\n    <li *ngFor=\"#ping of pings\"\n      (click)=\"onSelect(ping)\">\n      {{ ping.id }} - {{ ping.user }}\n    </li>\n  </ul>\n  "
                    }), 
                    __metadata('design:paramtypes', [ping_service_1.PingService, router_1.Router, router_1.RouteParams])
                ], ListComponent);
                return ListComponent;
            })();
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map