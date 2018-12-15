(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");




var routes = [
    {
        path: '',
        loadChildren: "./dashboard/dashboard.module#DashboardModule",
    },
    { path: "**", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'concesionario';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_cars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/cars */ "./src/app/services/cars.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production
                    ? []
                    : angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__["HttpClientInMemoryWebApiModule"].forRoot(_services_cars__WEBPACK_IMPORTED_MODULE_8__["Cars"], {
                        passThruUnknownUrl: true
                    })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <span class=\"content__number\">404</span>\n</div>\n<div class=\"content\">\n  <span class=\"content__title\">Oops! Page not found</span>\n</div>\n<div class=\"content\">\n  <span class=\"conten__subtitle\"> Sorry, but the page you are looking for is not found. please, make sure you have\n    typed the current url</span>\n</div>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  margin: 50px; }\n  .content__number {\n    font-size: 10em;\n    color: #00BCD4; }\n  .content__title {\n    font-size: 3em;\n    font-weight: bold; }\n  .content__subtitle {\n    font-size: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL0M6XFxVc2Vyc1xcTWFyaWEgRmVybmFuZGFcXERvY3VtZW50c1xcR0FQXFxjb25jZXNpb25hcmlvL3NyY1xcYXBwXFxub3QtZm91bmRcXG5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsWUFBVztFQUNYLHdCQUF1QjtFQUN2QixhQUFZLEVBY2I7RUFaQztJQUNFLGdCQUFlO0lBQ2YsZUFBYyxFQUNmO0VBRUQ7SUFDRSxlQUFjO0lBQ2Qsa0JBQWlCLEVBQ2xCO0VBQ0Q7SUFDRSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gIFxyXG4gICAgJl9fbnVtYmVyIHtcclxuICAgICAgZm9udC1zaXplOiAxMGVtO1xyXG4gICAgICBjb2xvcjogIzAwQkNENDtcclxuICAgIH1cclxuICBcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgJl9fc3VidGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(router) {
        this.router = router;
        setTimeout(function () {
            router.navigate([""]);
        }, 3000);
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/cars.ts":
/*!**********************************!*\
  !*** ./src/app/services/cars.ts ***!
  \**********************************/
/*! exports provided: Cars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cars", function() { return Cars; });
var Cars = /** @class */ (function () {
    function Cars() {
    }
    Cars.prototype.createDb = function () {
        var cars = [
            {
                id: 0,
                model: 'Mazda 6',
                year: '2019',
                make: 'mazda',
                weight: '1500 kg',
                HP: '185',
                transmition: 'automatic',
                price: '$35.000',
                pictureUrl: 'http://www.mazda.com.co/assets/models/mazda6/heros/heromazda.jpg',
                description: 'Inspirado en el lenguaje de DISEÑO KODO- Alma del movimiento, característico de la marca, Mazda 6 evoluciona en su elegancia y refinamiento, dignos del vehículo insignia de la marca. La TECNOLOGÍA SKYACTIV exclusiva de Mazda, se complementa en este modelo con el Sistema de Control G -Vectoring, y el TURBO DE PRESIÓN DINÁMICA. Mazda 6 cuenta con conectividad de última generación al hacer compatibles con Mazda CONNECT, los sistemas Apple CarPlay & Android Auto. De igual manera, las características en seguridad activa y pasiva, junto con la serie integrada de tecnologías en seguridad de i-ACTIVSENSE, operan en una gama de situaciones más amplia.'
            },
            {
                id: 1,
                model: 'Mustang GT',
                year: '2018',
                make: 'ford',
                weight: '2204 Kg',
                HP: '460',
                transmition: 'automatic',
                price: '$102.000',
                pictureUrl: 'http://veh-markets.com/uploads/postfotos/2016-mustang-gt-track-pack-edition-3.jpg',
                description: ' El Mustang está diseñado para adaptarlo a la manera que conduces, hasta el último detalle.Desde el diseño del panel de instrumentos y el sonido de su rugido hasta cómo se siente tomar una curva, esta leyenda nació para que la personalices a tu gusto.Además, el Mustang es el Auto Deportivo Mediano con Más Alta Calificación de 2018 en Calidad Inicial.'
            },
            {
                id: 2,
                model: 'camaro six ss',
                year: '2019',
                make: 'chevrolet',
                weight: '2120 Kg',
                HP: '455',
                transmition: 'automatic',
                price: '$100.000',
                pictureUrl: 'https://es.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2018/performance/camaro/camaro/01-images/2018-camaro-2ss-gaz-trimselector.jpg?imwidth=1200',
                description: 'El Chevrolet Camaro es un auto deportivo producido por el fabricante estadounidense Chevrolet GM. Se clasifica como un pony car y en algunas versiones también como un muscle car. El Camaro surgió como la respuesta de General Motors a su rival más digno durante esta época: el Ford Mustang.'
            },
            {
                id: 3,
                model: 'CX5',
                year: '2018',
                make: 'mazda',
                weight: '',
                HP: '154-188',
                transmition: 'automatic',
                price: '$59.000',
                pictureUrl: 'https://www.diariomotor.com/imagenes/2016/11/nuevo-mazda-cx-5-01.jpg',
                description: 'La mundialmente galardonada Mazda CX-5 continúa su evolución, convirtiéndose en un referente de su segmento. El lenguaje de DISEÑO KODO “Alma del movimiento” toma como fuente de inspiración la belleza y la identidad japonesa que evocan una constante búsqueda de la perfección, del cuidado en los detalles y del esmero por parte de los artesanos japoneses para crear piezas únicas de la más alta calidad. Mazda CX-5 transmite una imagen más robusta y dinámica en su exterior, y a través de finos acabados interiores, refuerza su apariencia sofisticada y funcional, todo para lograr una experiencia de conducción superior.'
            },
            {
                id: 4,
                model: 'Q5',
                year: '2018',
                make: 'audi',
                weight: '2000 Kg',
                HP: '150',
                transmition: 'manual',
                price: '$70.000',
                pictureUrl: 'https://www.audi.com.co/media/Theme_Banners_Banner_Image_Component/6691-banner-20809-image/dh-1400-918e09/c7fd2c75/1544007364/bnn1920x1080-aq5-161007-oe-1-.jpg',
                description: 'odos los detalles del Nuevo Audi Q5 están dominados por el diseño característico de la familia Q, que incorpora el dinamismo y la eficiencia, como el llamativo capó o la línea del techo ligeramente inclinado y la línea cromada de la ventana.'
            },
            {
                id: 5,
                model: 'Fortuner',
                year: '2019',
                make: 'toyota',
                weight: '1875 Kg',
                HP: '164',
                transmition: 'manual',
                price: '$42.000',
                pictureUrl: 'http://www.tuyomotor.com/v2_base/file_loader.php?id_file=4357-m21',
                description: 'Diseño exterior moderno, vanguardista y exclusivo que transmite fuerza y elegancia. La Toyota Fortuner SW4 fue creada para ser un vehículo exclusivo con presencia imponente y una personalidad única.La simetría de diseño con líneas redondeadas proporciona la sensación de fuerza y potencia de un vehículo capaz de operar con serenidad en condiciones extremas, con detalles que transmiten dinamismo y elegancia.'
            },
            {
                id: 6,
                model: 'X6',
                year: '2019',
                make: 'bmw',
                weight: '2000 kg',
                HP: '450',
                transmition: 'automatic',
                price: '$30.000',
                pictureUrl: 'https://www.bmw.com.co/content/dam/bmw/common/all-models/x-series/x6/2014/At%20a%20glance/topstage-start.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1489075534572.jpg',
                description: 'Potente y atlético: la presencia de un modelo BMW X y la deportividad de un coupé. El BMW X6 transciende todos los límites. Sus motores BMW TwinPower Turbo ofrecen una potente mezcla de dinamismo y eficiencia, y el BMW xDrive ayuda a trasladarla a la carretera.'
            },
            {
                id: 7,
                model: 'Twizy',
                year: '2018',
                make: 'renault',
                weight: '800 kg',
                HP: '3CG Electrico',
                transmition: 'automatic',
                price: '$12.000',
                pictureUrl: 'https://www.cdn.renault.com/content/dam/Renault/CO/electric-vehicles/twizy/b09e-twizy/b09e-phase1/hero-zone/hero-images/renault-twizy-range.png.ximg.l_4_m.smart.png',
                description: 'Con un radio de giro de sólo 3.4 metros, Renault Twizy ofrece una experiencia única de manejo. Gracias a este radio de giro fuera de lo normal, Twizy se convierte en un vehículo no sólo manejable sino muy reactivo. Se vive mejor en la ciudad con Renault Twizy!'
            },
            {
                id: 8,
                model: 'Captur',
                year: '2019',
                make: 'renault',
                weight: '1750',
                HP: '143',
                transmition: 'automatic',
                price: '$20.000',
                pictureUrl: 'https://www.cdn.renault.com/content/dam/Renault/CO/personal-cars/captur/hero-zone/captur-packshot.png.ximg.l_4_m.smart.png',
                description: 'Durante la historia de la humanidad las joyas han sido utilizadas para resaltar la belleza y enaltecer las actitudes de quien las porta, por eso inspiramos nuestra edición especial Renault CAPTUR con una joya exclusiva creada con cristales de Swarovski®. Porque esta vez y por tiempo limitado puedes tener una de las 300 unidades de esta edición especial.'
            },
            {
                id: 9,
                model: 'Alaskan',
                year: '2018',
                make: 'renault',
                weight: '200 kg',
                HP: '190',
                transmition: 'manual',
                price: '$40.000',
                pictureUrl: 'https://www.cdn.renault.com/content/dam/Renault/master/vehicules/u60/renault-u60-reveal-003.jpg.ximg.l_4_m.smart.jpg',
                description: 'La Renault ALASKAN integra en su ADN un diseño moderno e imponente que hace honor a sus capacidades. Cuenta con grandes y esculpidos guardabarros, una robusta e imponente parrilla cromada resaltando la nueva identidad de marca.'
            }
        ];
        return { cars: cars };
    };
    return Cars;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiURL: 'app/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Maria Fernanda\Documents\GAP\concesionario\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map