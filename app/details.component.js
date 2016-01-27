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
    var DetailsComponent;
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
            DetailsComponent = (function () {
                function DetailsComponent(_router, _routeParams, _service) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._service = _service;
                }
                DetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this._service.getPing(id).then(function (ping) { return _this.ping = ping; });
                };
                DetailsComponent.prototype.getImgSrc = function () {
                    return "https://maps.googleapis.com/maps/api/staticmap?center=" + this.ping.lat + "," + this.ping.long + "&zoom=18&size=300x300&sensor=false";
                };
                DetailsComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div *ngIf=\"ping\">\n      <a [routerLink]=\"['Home']\">&lt;&nbsp;Back</a>\n      <h3>{{ping.user}} - {{ ping.time }}</h3>\n      <div>\n        <img  src=\"{{getImgSrc()}}\" />\n      </div>\n    </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, ping_service_1.PingService])
                ], DetailsComponent);
                return DetailsComponent;
            })();
            exports_1("DetailsComponent", DetailsComponent);
        }
    }
});
//# sourceMappingURL=details.component.js.map