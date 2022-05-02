(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./frontend/node_modules/@codinglabs/laravel-asset/asset.js":
/*!******************************************************************!*\
  !*** ./frontend/node_modules/@codinglabs/laravel-asset/asset.js ***!
  \******************************************************************/
/*! exports provided: asset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asset", function() { return asset; });
const asset = (path) => {
    // default to MIX_ASSET_URL
    let prefix = process.env.MIX_ASSET_URL

    if (!prefix) {
        // fallback to determining ASSET_URL from meta tag
        prefix = document.head.querySelector('meta[name="asset-url"]').content
    }

    return prefix + '/' + path.replace(/^\/+/, '')
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./frontend/src/views/twistMaps/TwistMaps.vue":
/*!****************************************************!*\
  !*** ./frontend/src/views/twistMaps/TwistMaps.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TwistMaps_vue_vue_type_template_id_f4a03fdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwistMaps.vue?vue&type=template&id=f4a03fdc& */ "./frontend/src/views/twistMaps/TwistMaps.vue?vue&type=template&id=f4a03fdc&");
/* harmony import */ var _TwistMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwistMaps.vue?vue&type=script&lang=js& */ "./frontend/src/views/twistMaps/TwistMaps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TwistMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TwistMaps_vue_vue_type_template_id_f4a03fdc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TwistMaps_vue_vue_type_template_id_f4a03fdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/twistMaps/TwistMaps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/twistMaps/TwistMaps.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./frontend/src/views/twistMaps/TwistMaps.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwistMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TwistMaps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/twistMaps/TwistMaps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TwistMaps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/twistMaps/TwistMaps.vue?vue&type=template&id=f4a03fdc&":
/*!***********************************************************************************!*\
  !*** ./frontend/src/views/twistMaps/TwistMaps.vue?vue&type=template&id=f4a03fdc& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TwistMaps_vue_vue_type_template_id_f4a03fdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TwistMaps.vue?vue&type=template&id=f4a03fdc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/twistMaps/TwistMaps.vue?vue&type=template&id=f4a03fdc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TwistMaps_vue_vue_type_template_id_f4a03fdc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TwistMaps_vue_vue_type_template_id_f4a03fdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/twistMaps/TwistMaps.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/twistMaps/TwistMaps.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./frontend/node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-leaflet */ "./frontend/node_modules/vue2-leaflet/dist/vue2-leaflet.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./frontend/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _codinglabs_laravel_asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @codinglabs/laravel-asset */ "./frontend/node_modules/@codinglabs/laravel-asset/asset.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var tileProviders = [{
  name: "OpenStreetMap",
  visible: true,
  attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
} // {
//   name: 'OpenTopoMap',
//   visible: false,
//   url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
//   attribution:
//     'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
// },
];
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Example",
  components: {
    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LMap"],
    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LTileLayer"],
    LMarker: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LMarker"],
    LIcon: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LIcon"],
    LPolyline: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LPolyline"],
    LLayerGroup: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LLayerGroup"],
    LTooltip: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LTooltip"],
    LPopup: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LPopup"],
    LControlZoom: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LControlZoom"],
    LControlAttribution: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LControlAttribution"],
    LControlScale: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LControlScale"],
    LControlLayers: vue2_leaflet__WEBPACK_IMPORTED_MODULE_1__["LControlLayers"]
  },
  data: function data() {
    return {
      showMap: true,
      sideStyle: {
        position: "fixed",
        overflowY: "scroll",
        top: 0,
        bottom: 0
      },
      fleets: [],
      orders: [],
      sideShow: true,
      activeBtnMap: true,
      mapDriverLat: 25.025965,
      mapDriverLng: 47.275023,
      avilableFleets: [],
      offlineFleets: [],
      busyFleets: [],
      center: [41.0140076, 28.6829777],
      opacity: 0.6,
      token: "your token if using mapbox",
      mapOptions: {
        zoomControl: false,
        attributionControl: false,
        zoomSnap: true
      },
      zoom: 3,
      minZoom: 1,
      maxZoom: 15,
      zoomPosition: "topleft",
      attributionPosition: "bottomright",
      layersPosition: "topleft",
      attributionPrefix: "Vue2Leaflet",
      imperial: false,
      Positions: ["topleft", "topright", "bottomleft", "bottomright"],
      tileProviders: tileProviders,
      iconSize: 35,
      markers: [],
      avatarImg: Object(_codinglabs_laravel_asset__WEBPACK_IMPORTED_MODULE_3__["asset"])("img/avatars/1.png"),
      bounds: Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLngBounds"])( // TODO: make this to be the first and last order
      {
        lat: 25.025965,
        lng: 47.275023
      }, {
        lat: 24.592777,
        lng: 46.359089
      })
    };
  },
  computed: {
    dynamicSize: function dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor: function dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  },
  mounted: function mounted() {
    this.getInfo();
  },
  methods: {
    testFleet: function testFleet() {
      self = this;
      var driver = {
        active: 1,
        age: null,
        application_status_id: null,
        bank_iban: null,
        bank_name: null,
        block: 0,
        city_id: null,
        code: "12358",
        complete: 0,
        contract_type: null,
        country: "",
        created_at: "2020-06-16T21:27:11.000000Z",
        device_token: null,
        gender: "",
        id: 3,
        identity: "4534545435625",
        image: null,
        last_login: null,
        lat: 29,
        lng: 46,
        mobile: "42356543245",
        name: "test",
        nationality: null,
        nationalityId: null,
        orders_count: "2",
        status: "online",
        supplier_id: null,
        supplier_uuid: "",
        tank: 50,
        updated_at: "2020-06-16T21:27:11.000000Z",
        user_id: 1,
        uuid: "",
        vehicle_type: null,
        verification_code: null
      };
      var driverTarget = self.fleets.find(function (item) {
        return item.id == driver.id;
      });
      var index = self.fleets.indexOf(driverTarget);

      if (index !== -1) {
        driverTarget.tank = driver.tank;
        driverTarget.lat = driver.lat;
        driverTarget.lng = driver.lng;
        driverTarget.status = driver.status;
        driverTarget.orders_count = driver.orders_count;
        self.fleets[index] = driverTarget;
      } else {
        self.fleets.push(driver);
      }

      self.truckDrivers(self.fleets);
    },
    focusOnFleet: function focusOnFleet(newLat, newLng) {
      window.map.setCenter({
        lat: parseFloat(newLat),
        lng: parseFloat(newLng)
      });
    },
    truckDrivers: function truckDrivers(arrLatLng) {
      var _this = this;

      var options = {
        center: {
          lat: this.mapDriverLat,
          lng: this.mapDriverLng
        },
        zoom: 8
      };
      window.map = new google.maps.Map(document.getElementById("driver-map"), options);
      var iconTarget;
      this.offlineFleets = [];
      this.avilableFleets = [];
      this.busyFleets = [];
      arrLatLng.forEach(function (item) {
        if (item.lat != null && item.lng != null) {
          if (item.status == "offline") {
            _this.offlineFleets.push(item);
          } else {
            if (item.orders_count == 0) {
              _this.avilableFleets.push(item);
            } else {
              _this.busyFleets.push(item);
            }
          }
        }
      });

      for (var i = 0; i < arrLatLng.length; i++) {
        if (arrLatLng[i].lat != null && arrLatLng[i].lng != null) {
          var addMarker = function addMarker(props) {
            var marker = new google.maps.Marker({
              position: props.coords,
              icon: {
                url: props.icon,
                scaledSize: {
                  width: 35,
                  height: 35
                }
              },
              map: map
            });
            var info = new google.maps.InfoWindow({
              content: "<div class=\"p-1\">\n           <p class=\"mb-0\"><span class=\"font-weight-bold text-success\"> name: </span> ".concat(props.fleet_name, " </p>\n           <p class=\"mb-0\"><span class=\"font-weight-bold text-success\" > order count: </span> ").concat(props.fleet_orders_count, " </p>\n           <p class=\"mb-0\"><span class=\"font-weight-bold text-success\"> mobile: </span> ").concat(props.fleet_mobile, " </p>\n           <div class=\"d-flex mb-0\">\n           <p class=\"mb-0 font-weight-bold text-success\"> Battery:\n           </p>\n\n           <div class=\"progress \" style=\"width:64px;background:gray ;margin: 0 3px \" >\n                  <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width:").concat(props.tank, "%;\" aria-valuenow=\"").concat(props.tank, "\" aria-valuemin=\"0\" aria-valuemax=\"100\">").concat(props.tank, "%</div>\n           </div>\n           </div>\n           </div>")
            }); // info.open(map, marker);

            marker.addListener("mouseover", function () {
              info.open(map, marker);
            });
            marker.addListener("mouseout", function () {
              info.close(map, marker);
            });
          };

          if (arrLatLng[i].status == "online") {
            if (arrLatLng[i].orders_count == 0) {
              iconTarget = "https://www.grouplah.com/resources/Images/GoogleMaps/Map-Marker-grey.png";
            } else {
              iconTarget = "https://icon-library.com/images/marker-icon-png/marker-icon-png-19.jpg";
            }
          } else {
            iconTarget = "data:image/png;base64,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";
          }

          addMarker({
            coords: {
              lat: parseFloat(arrLatLng[i].lat),
              lng: parseFloat(arrLatLng[i].lng)
            },
            fleet_name: arrLatLng[i].name,
            fleet_orders_count: arrLatLng[i].orders_count,
            fleet_mobile: arrLatLng[i].mobile,
            icon: iconTarget,
            tank: arrLatLng[i].tank
          });
        }
      }
    },
    handleSideOrder: function handleSideOrder() {
      var sideOrder = document.getElementById("my-side-order");
      sideOrder.classList.toggle("handle-order");
    },
    fullMap: function fullMap() {
      var theMap = document.getElementById("mapping");
      this.activeBtnMap = false;
      theMap.style.position = "absolute";
      theMap.classList.add("full-map");
    },
    defaultMap: function defaultMap() {
      var theMap = document.getElementById("mapping");
      this.activeBtnMap = true;
      theMap.style.position = "relative";
      theMap.classList.remove("full-map");
    },
    orderMap: function orderMap() {
      document.getElementById("driver-map").style.display = "none";
      document.getElementById("mapping").style.display = "block";
    },
    driverMap: function driverMap() {
      document.getElementById("driver-map").style.display = "block";
      document.getElementById("mapping").style.display = "none";
    },
    showOrder: function showOrder(item) {
      console.log(item);
    },
    getInfo: function getInfo() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/map-data?token=" + localStorage.getItem("api_token")).then(function (response) {
        var data = _objectSpread({}, response.data);

        self.fleets = data.fleets;
        console.log("drivers", self.fleets);
        self.truckDrivers(data.fleets);
        self.orders = response.data.orders;
        self.markers = [];
        data.orders.map(function (order) {
          var deliveryOrder = {
            id: "delivery" + order.id,
            orderId: order.id,
            position: {
              lat: parseFloat(order.delivery_lat),
              lng: parseFloat(order.delivery_lng)
            },
            tooltip: "Delivery point order Id: " + order.id + " Code: " + order.code,
            draggable: false,
            visible: true,
            markerIcon: Object(_codinglabs_laravel_asset__WEBPACK_IMPORTED_MODULE_3__["asset"])("markers/delivery.png"),
            travel: [[order.pick_up_lat, order.pick_up_lng], [order.delivery_lat, order.delivery_lng]],
            travelId: "td" + order.id
          };
          self.markers.push(deliveryOrder);
          var pickUpOrder = {
            id: "pickup" + order.id,
            orderId: order.id,
            position: {
              lat: parseFloat(order.pick_up_lat),
              lng: parseFloat(order.pick_up_lng)
            },
            tooltip: "PickUp point order Id: " + order.id + " Code: " + order.code,
            draggable: false,
            visible: true,
            markerIcon: Object(_codinglabs_laravel_asset__WEBPACK_IMPORTED_MODULE_3__["asset"])("markers/pickup.png"),
            travel: [[order.pick_up_lat, order.pick_up_lng], [order.delivery_lat, order.delivery_lng]],
            travelId: "tp" + order.id
          };
          self.markers.push(pickUpOrder);
        });
        console.log(self.markers);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    focusOnDriver: function focusOnDriver(lat, lng) {
      var self = this;
      self.bounds = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLngBounds"])( // TODO: make this to be the first and last order
      {
        lat: lat,
        lng: lng
      }, {
        lat: lat,
        lng: lng
      });
    }
  },
  created: function created() {
    var _this2 = this;

    var self = this;
    self.fleets = [];
    this.$pusher.subscribe("fleet-location");
    this.$pusher.bind("App\\Events\\LocationNow", function (data) {
      console.log("the location is here");
      console.log(data);
      self = _this2;
      var driver = data.data.user;

      if (driver.tank == 0) {
        driver.tank = 90;
      }

      var driverTarget = self.fleets.find(function (item) {
        return item.id == driver.id;
      });
      var index = self.fleets.indexOf(driverTarget);

      if (index !== -1) {
        driverTarget.tank = driver.tank;
        driverTarget.lat = driver.lat;
        driverTarget.lng = driver.lng;
        driverTarget.status = driver.status;
        driverTarget.orders_count = driver.orders_count;
        self.fleets[index] = driverTarget;
      } else {
        self.fleets.push(driver);
      }

      self.truckDrivers(self.fleets);
    });
    this.$pusher.bind("App\\Events\\OrderOperation", function (data) {
      console.log("the order is here");
      console.log(data);
      var order = self.orders.find(function (order) {
        return order.id === data.order.id;
      });
      var index = self.orders.indexOf(order);
      var previosStatuses = [8, 9, 10, 11];

      if (order && !previosStatuses.includes(data.order.status.id)) {
        var keys = Object.keys(order);
        keys.map(function (key) {
          self.orders[index][key] = data.order[key];
        });
      } else if (order && previosStatuses.includes(data.order.status.id)) {
        self.orders.splice(index, 1);
      } else {
        var deliveryOrderMarker = {
          id: "delivery" + data.order.id,
          orderId: data.order.id,
          position: {
            lat: parseFloat(data.order.delivery_lat),
            lng: parseFloat(data.order.delivery_lng)
          },
          tooltip: "Delivery point order Id: " + data.order.id + " Code: " + data.order.code,
          draggable: false,
          visible: true,
          markerIcon: Object(_codinglabs_laravel_asset__WEBPACK_IMPORTED_MODULE_3__["asset"])("markers/delivery.png"),
          travel: [[data.order.pick_up_lat, data.order.pick_up_lng], [data.order.delivery_lat, data.order.delivery_lng]],
          travelId: "td" + order.id
        };
        self.markers.push(deliveryOrderMarker);
        var pickUpOrderMarker = {
          id: "pickup" + data.order.id,
          orderId: data.order.id,
          position: {
            lat: parseFloat(data.order.pick_up_lat),
            lng: parseFloat(data.order.pick_up_lng)
          },
          tooltip: "PickUp point order Id: " + order.id + " Code: " + order.code,
          draggable: false,
          visible: true,
          markerIcon: Object(_codinglabs_laravel_asset__WEBPACK_IMPORTED_MODULE_3__["asset"])("markers/pickup.png"),
          travel: [[data.order.pick_up_lat, data.order.pick_up_lng], [data.order.delivery_lat, data.order.delivery_lng]],
          travelId: "tp" + data.order.id
        };
        self.markers.push(pickUpOrderMarker);
        self.orders.push(data.order);
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/twistMaps/TwistMaps.vue?vue&type=template&id=f4a03fdc&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/twistMaps/TwistMaps.vue?vue&type=template&id=f4a03fdc& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "CRow",
    {
      staticStyle: { height: "101vh !important", "padding-top": "0!important" }
    },
    [
      _c(
        "l-map",
        {
          ref: "themap",
          staticStyle: { height: "700px", width: "100%" },
          attrs: {
            id: "mapping",
            zoom: _vm.zoom,
            options: _vm.mapOptions,
            center: _vm.center,
            bounds: _vm.bounds,
            "min-zoom": _vm.minZoom,
            "max-zoom": _vm.maxZoom
          },
          on: {
            "update:zoom": function($event) {
              _vm.zoom = $event
            }
          }
        },
        [
          _vm.activeBtnMap
            ? _c("img", {
                staticClass: "full-map-btn",
                attrs: {
                  src:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAAClpaVRUVGbm5s4ODjb29vGxsZpaWnDw8Pe3t5/f3+zs7OSkpLY2Ni4uLhxcXEvLy/09PTMzMysrKwNDQ0XFxdbW1tBQUGGhoaYmJjn5+fv7+8eHh55eXlLS0spKSljY2OxaxcIAAACy0lEQVR4nO3dgU4aURSEYbeCAq4giMVWUXz/l2xIa4JLEzlnZ+dyyf89wJwzWUQ2uSxXVwAAAAAAAAAAoH5N0uQxObC9zo40N2ya8SwxbvqUH2hv2DTT8LT7PuMKNGzmwWHrXtNKNNzGZr30GlakYbMOzXqrsOG7cVaZhqGpN1U2XAVGPdLwLBtGRs1qbHhtnFWm4SI061d9DYP/8V/raxj91NbW1jD2Gt0bVdVwe5MYd1tPw0n8Av61mGRvEWUNk0FqNPQHqdHQH6RGQ3+QGg39QWo09Aep0dAfpEZDf5AaDf1BajT0B6nR0B+kRkN/kBoN/UFqNPQHqdHQH6RGQ3+QGg39QWo09Aep0dAfpCZb7OhgxJN0zzxZw4duzoN0zzzZYtNu0K10zzzdYsuvOWPllr3IFuucvs58EWYYc9liX14O5/Ia3VvIFpvvPmN2mcN4w5lvPxdb9l2s3exjNtnDeMNp33WLrSKn7p1Wr6U3AAAAAAAAAAAAAAAAAAAAwAV6HL3djaJPlHUQLbb+98WZn7HH5A9PtdjBj4ZsNJuJqBZ7Pjz0H3tA97BUi3Uesv1bt2FPqsWOflXjXI7GyxY7+uWXkXTPPNliy27Qufwlyhbr5lzed0hpWAwN/UFqNPQHqdHQH6RGQ3+QGg39QWo09Aep0dAfpEZDf5AaDf1BajT0B6nR0B+kRkN/kBoN/UFqNPQHqdHQH6RGQ3+QGg39QWoDNlz/OEGbfyTsrD1lwHrAhida5p4KOx2nJ7ob5h4//dFjnr9h4gzP8/ehZ9WwuQ8Ou+s1rUTD4Gm6Wb9hRRrGLmK/S1imYexB6f1mlWkYmrqqsmHkGdlHZ2KraBgZVeU13Bln8V46TMOX0KwK/x9e/Gea+OfS/I1FkYaTxLhNRQ3H09S8dvt9tLbh6JQb7v/c48feYw6ddo9/7Fy+6gIAAAAAAABcsj/9Uihp19PW+QAAAABJRU5ErkJggg=="
                },
                on: {
                  click: function($event) {
                    return _vm.fullMap()
                  }
                }
              })
            : _c("img", {
                staticClass: "default-map-btn",
                attrs: {
                  src:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAAClpaVRUVGbm5s4ODjb29vGxsZpaWnDw8Pe3t5/f3+zs7OSkpLY2Ni4uLhxcXEvLy/09PTMzMysrKwNDQ0XFxdbW1tBQUGGhoaYmJjn5+fv7+8eHh55eXlLS0spKSljY2OxaxcIAAACy0lEQVR4nO3dgU4aURSEYbeCAq4giMVWUXz/l2xIa4JLEzlnZ+dyyf89wJwzWUQ2uSxXVwAAAAAAAAAAoH5N0uQxObC9zo40N2ya8SwxbvqUH2hv2DTT8LT7PuMKNGzmwWHrXtNKNNzGZr30GlakYbMOzXqrsOG7cVaZhqGpN1U2XAVGPdLwLBtGRs1qbHhtnFWm4SI061d9DYP/8V/raxj91NbW1jD2Gt0bVdVwe5MYd1tPw0n8Av61mGRvEWUNk0FqNPQHqdHQH6RGQ3+QGg39QWo09Aep0dAfpEZDf5AaDf1BajT0B6nR0B+kRkN/kBoN/UFqNPQHqdHQH6RGQ3+QGg39QWo09Aep0dAfpCZb7OhgxJN0zzxZw4duzoN0zzzZYtNu0K10zzzdYsuvOWPllr3IFuucvs58EWYYc9liX14O5/Ia3VvIFpvvPmN2mcN4w5lvPxdb9l2s3exjNtnDeMNp33WLrSKn7p1Wr6U3AAAAAAAAAAAAAAAAAAAAwAV6HL3djaJPlHUQLbb+98WZn7HH5A9PtdjBj4ZsNJuJqBZ7Pjz0H3tA97BUi3Uesv1bt2FPqsWOflXjXI7GyxY7+uWXkXTPPNliy27Qufwlyhbr5lzed0hpWAwN/UFqNPQHqdHQH6RGQ3+QGg39QWo09Aep0dAfpEZDf5AaDf1BajT0B6nR0B+kRkN/kBoN/UFqNPQHqdHQH6RGQ3+QGg39QWoDNlz/OEGbfyTsrD1lwHrAhida5p4KOx2nJ7ob5h4//dFjnr9h4gzP8/ehZ9WwuQ8Ou+s1rUTD4Gm6Wb9hRRrGLmK/S1imYexB6f1mlWkYmrqqsmHkGdlHZ2KraBgZVeU13Bln8V46TMOX0KwK/x9e/Gea+OfS/I1FkYaTxLhNRQ3H09S8dvt9tLbh6JQb7v/c48feYw6ddo9/7Fy+6gIAAAAAAABcsj/9Uihp19PW+QAAAABJRU5ErkJggg==",
                  button: ""
                },
                on: {
                  click: function($event) {
                    return _vm.defaultMap()
                  }
                }
              }),
          _vm._v(" "),
          _c("l-control-layers", {
            attrs: {
              position: _vm.layersPosition,
              collapsed: false,
              "sort-layers": true
            }
          }),
          _vm._v(" "),
          _vm._l(_vm.tileProviders, function(tileProvider) {
            return _c("l-tile-layer", {
              key: tileProvider.name,
              attrs: {
                name: tileProvider.name,
                visible: tileProvider.visible,
                url: tileProvider.url,
                attribution: tileProvider.attribution,
                token: _vm.token,
                "layer-type": "base"
              }
            })
          }),
          _vm._v(" "),
          _c("l-control-zoom", { attrs: { position: _vm.zoomPosition } }),
          _vm._v(" "),
          _c("l-control-attribution", {
            attrs: {
              position: _vm.attributionPosition,
              prefix: _vm.attributionPrefix
            }
          }),
          _vm._v(" "),
          _c("l-control-scale", { attrs: { imperial: _vm.imperial } }),
          _vm._v(" "),
          _vm._l(_vm.markers, function(marker) {
            return _c(
              "l-marker",
              {
                key: marker.id,
                attrs: {
                  visible: marker.visible,
                  draggable: marker.draggable,
                  "lat-lng": marker.position
                },
                on: {
                  "update:latLng": function($event) {
                    return _vm.$set(marker, "position", $event)
                  },
                  "update:lat-lng": function($event) {
                    return _vm.$set(marker, "position", $event)
                  },
                  click: function($event) {
                    return _vm.showOrder(marker)
                  }
                }
              },
              [
                _c("l-icon", {
                  attrs: {
                    "icon-size": _vm.dynamicSize,
                    "icon-anchor": _vm.dynamicAnchor,
                    "icon-url": marker.markerIcon
                  }
                }),
                _vm._v(" "),
                _c("l-popup", { attrs: { content: marker.tooltip } }),
                _vm._v(" "),
                _c("l-tooltip", { attrs: { content: marker.tooltip } })
              ],
              1
            )
          }),
          _vm._v(" "),
          _vm._l(_vm.markers, function(marker) {
            return _c("l-polyline", {
              key: marker.travelId,
              attrs: { "lat-lngs": marker.travel }
            })
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("div", {
        staticStyle: { display: "none" },
        attrs: { id: "driver-map" }
      }),
      _vm._v(" "),
      _c(
        "CSidebar",
        {
          style: _vm.sideStyle,
          attrs: {
            id: "my-side-order",
            aside: "",
            show: _vm.sideShow,
            colorScheme: "light",
            size: "lg"
          }
        },
        [
          _c(
            "button",
            {
              attrs: { hidden: "" },
              on: {
                click: function($event) {
                  return _vm.testFleet()
                }
              }
            },
            [_vm._v("test")]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "close-order",
              on: {
                click: function($event) {
                  return _vm.handleSideOrder()
                }
              }
            },
            [_vm._v("x")]
          ),
          _vm._v(" "),
          _c(
            "CTabs",
            {
              staticClass: "nav-underline nav-underline-primary orders-tabs",
              attrs: { tabs: "" }
            },
            [
              _c(
                "CTab",
                [
                  _c("template", { slot: "title" }, [
                    _c(
                      "span",
                      {
                        staticClass: "change-map",
                        on: {
                          click: function($event) {
                            return _vm.driverMap()
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.$t("drivers")) +
                            "\n          "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "CListGroup",
                    { staticClass: "list-group-accent" },
                    [
                      _c("div", [
                        _c("div", { staticClass: "p-2" }, [
                          _c("p", { staticClass: "mb-0  font-weight-bolder" }, [
                            _vm._v(
                              "\n                Total Drivers:\n                "
                            ),
                            _c("span", { staticClass: "badge badge-info" }, [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(
                                    _vm.busyFleets.length +
                                      _vm.avilableFleets.length +
                                      _vm.offlineFleets.length
                                  ) +
                                  "\n                "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "font-weight-bolder" }, [
                            _vm._v("Drivers Status :")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "badge badge-success" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.busyFleets.length) +
                                "\n              "
                            )
                          ]),
                          _vm._v("\n              /\n              "),
                          _c(
                            "span",
                            {
                              staticClass: "badge",
                              staticStyle: {
                                background: "gray",
                                color: "white"
                              }
                            },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.avilableFleets.length) +
                                  "\n              "
                              )
                            ]
                          ),
                          _vm._v("\n              /\n              "),
                          _c("span", { staticClass: "badge badge-danger" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.offlineFleets.length) +
                                "\n              "
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "CListGroupItem",
                        {
                          staticClass:
                            "list-group-item-accent-success bg-success  text-center\n          font-weight-bold text-muted text-uppercase small",
                          staticStyle: { color: "white !important" }
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.$t("online")) +
                              " have orders\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.fleets, function(fleet) {
                        return fleet.status == "online" &&
                          fleet.orders_count > 0 &&
                          fleet.lat != null &&
                          fleet.lng != null
                          ? _c(
                              "CListGroupItem",
                              {
                                key: fleet.id,
                                staticClass:
                                  "list-group-item-accent-success list-group-item-divider",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    return _vm.focusOnFleet(
                                      fleet.lat,
                                      fleet.lng
                                    )
                                  }
                                }
                              },
                              [
                                _c("div", [
                                  _c(
                                    "div",
                                    { staticClass: "c-avatar float-right" },
                                    [
                                      _c("img", {
                                        staticClass: "c-avatar-img",
                                        attrs: {
                                          src: _vm.avatarImg,
                                          alt: "admin@bootstrapmaster.com"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", [
                                    _c("strong", [_vm._v(_vm._s(fleet.name))])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "small",
                                    { staticClass: "text-muted mr-3" },
                                    [
                                      _c("CIcon", {
                                        attrs: { name: "cil-list" }
                                      }),
                                      _vm._v(
                                        "  \n                " +
                                          _vm._s(fleet.orders_count) +
                                          "\n                " +
                                          _vm._s(_vm.$t("orders")) +
                                          "\n              "
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("small", { staticClass: "text-muted" }, [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(fleet.mobile) +
                                        "\n              "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "d-flex  align-items-center",
                                      staticStyle: { "margin-top": "3px" }
                                    },
                                    [
                                      _c(
                                        "p",
                                        { staticClass: "mb-0 text-gray" },
                                        [
                                          _vm._v(
                                            "\n                  Battery:\n                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "progress",
                                          staticStyle: {
                                            width: "64px",
                                            background: "gray",
                                            margin: "0 3px",
                                            position: "relative",
                                            top: "2px"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "progress-bar bg-info",
                                              style:
                                                "width:" + fleet.tank + "%",
                                              attrs: {
                                                role: "progressbar",
                                                "aria-valuenow": fleet.tank,
                                                "aria-valuemin": "0",
                                                "aria-valuemax": "100"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(fleet.tank) +
                                                  "%\n                  "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            )
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _c("hr", { staticClass: "transparent mx-3 my-0" }),
                      _vm._v(" "),
                      _c(
                        "CListGroupItem",
                        {
                          staticClass:
                            "list-group-item-accent-secondary bg-gray text-center\n          font-weight-bold  text-uppercase small",
                          staticStyle: {
                            color: "white !important",
                            background: "gray!important"
                          }
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.$t("online")) +
                              " " +
                              _vm._s(_vm.$t("avilable")) +
                              "\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.fleets, function(fleet) {
                        return fleet.status == "online" &&
                          fleet.orders_count == 0 &&
                          fleet.lat != null &&
                          fleet.lng != null
                          ? _c(
                              "CListGroupItem",
                              {
                                key: fleet.id,
                                staticClass:
                                  "list-group-item-accent-secondary list-group-item-divider",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    return _vm.focusOnFleet(
                                      fleet.lat,
                                      fleet.lng
                                    )
                                  }
                                }
                              },
                              [
                                _c("div", [
                                  _c(
                                    "div",
                                    { staticClass: "c-avatar float-right" },
                                    [
                                      _c("img", {
                                        staticClass: "c-avatar-img",
                                        attrs: {
                                          src: _vm.avatarImg,
                                          alt: "admin@bootstrapmaster.com"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", [
                                    _c("strong", [_vm._v(_vm._s(fleet.name))])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "small",
                                    { staticClass: "text-muted mr-3" },
                                    [
                                      _c("CIcon", {
                                        attrs: { name: "cil-list" }
                                      }),
                                      _vm._v(
                                        "  \n                " +
                                          _vm._s(fleet.orders_count) +
                                          "\n                " +
                                          _vm._s(_vm.$t("orders")) +
                                          "\n              "
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "small",
                                    { staticClass: "text-muted" },
                                    [
                                      _c("CIcon", {
                                        attrs: { name: "cil-mobile" }
                                      }),
                                      _vm._v(
                                        " " +
                                          _vm._s(fleet.mobile) +
                                          "\n              "
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "d-flex  align-items-center",
                                      staticStyle: { "margin-top": "3px" }
                                    },
                                    [
                                      _c(
                                        "p",
                                        { staticClass: "mb-0 text-gray" },
                                        [
                                          _vm._v(
                                            "\n                  Battery:\n                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "progress",
                                          staticStyle: {
                                            width: "64px",
                                            background: "gray",
                                            margin: "0 3px",
                                            position: "relative",
                                            top: "2px"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "progress-bar bg-info",
                                              style:
                                                "width:" + fleet.tank + "%",
                                              attrs: {
                                                role: "progressbar",
                                                "aria-valuenow": fleet.tank,
                                                "aria-valuemin": "0",
                                                "aria-valuemax": "100"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                    " +
                                                  _vm._s(fleet.tank) +
                                                  "%\n                  "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            )
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _c("hr", { staticClass: "transparent mx-3 my-0" }),
                      _vm._v(" "),
                      _c(
                        "CListGroupItem",
                        {
                          staticClass:
                            "list-group-item-accent-danger bg-danger text-center\n          font-weight-bold  text-uppercase small",
                          staticStyle: { color: "white !important" }
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.$t("offline")) +
                              "\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.fleets, function(fleet) {
                        return fleet.status == "offline" &&
                          fleet.lat != null &&
                          fleet.lng != null
                          ? _c(
                              "CListGroupItem",
                              {
                                key: fleet.id,
                                staticClass:
                                  "list-group-item-accent-danger list-group-item-divider",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    return _vm.focusOnFleet(
                                      fleet.lat,
                                      fleet.lng
                                    )
                                  }
                                }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "c-avatar float-right" },
                                  [
                                    _c("img", {
                                      staticClass: "c-avatar-img",
                                      attrs: {
                                        src: _vm.avatarImg,
                                        alt: "admin@bootstrapmaster.com"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", [
                                  _c("strong", [_vm._v(_vm._s(fleet.name))])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  { staticClass: "text-muted mr-3" },
                                  [
                                    _c("CIcon", {
                                      attrs: { name: "cil-list" }
                                    }),
                                    _vm._v(
                                      "  \n              " +
                                        _vm._s(fleet.orders_count) +
                                        "\n              " +
                                        _vm._s(_vm.$t("orders")) +
                                        "\n            "
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "small",
                                  { staticClass: "text-muted" },
                                  [
                                    _c("CIcon", {
                                      attrs: { name: "cil-mobile" }
                                    }),
                                    _vm._v(
                                      " " +
                                        _vm._s(fleet.mobile) +
                                        "\n            "
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "d-flex  align-items-center",
                                    staticStyle: { "margin-top": "3px" }
                                  },
                                  [
                                    _c("p", { staticClass: "mb-0 text-gray" }, [
                                      _vm._v(
                                        "\n                Battery:\n              "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "progress",
                                        staticStyle: {
                                          width: "64px",
                                          background: "gray",
                                          margin: "0 3px",
                                          position: "relative",
                                          top: "2px"
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "progress-bar bg-info",
                                            style: "width:" + fleet.tank + "%",
                                            attrs: {
                                              role: "progressbar",
                                              "aria-valuenow": fleet.tank,
                                              "aria-valuemin": "0",
                                              "aria-valuemax": "100"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(fleet.tank) +
                                                "%\n                "
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          : _vm._e()
                      })
                    ],
                    2
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "CTab",
                { attrs: { active: "" } },
                [
                  _c("template", { slot: "title" }, [
                    _c(
                      "span",
                      {
                        staticClass: "change-map",
                        on: {
                          click: function($event) {
                            return _vm.orderMap()
                          }
                        }
                      },
                      [_vm._v("\n            " + _vm._s(_vm.$t("orders")))]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.orders, function(order) {
                    return _c(
                      "CListGroupItem",
                      {
                        key: order.id,
                        staticClass:
                          "list-group-item-accent-success list-group-item-divider",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            return _vm.focusOnDriver(
                              order.pick_up_lat,
                              order.delivery_lng
                            )
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "c-avatar float-right" }, [
                          _c(
                            "p",
                            {
                              class: " like-img " + "bg-" + order.status.class
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    order.customer_name != null
                                      ? order.customer_name.substring(0, 1)
                                      : ""
                                  ) +
                                  "\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("p", { staticClass: "my-customer-name" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(order.customer_name) +
                                "\n            "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "my-locale" }, [
                          _c(
                            "span",
                            { class: " my-p " + "bg-" + order.status.class },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    order.status != null
                                      ? order.status.name.substring(0, 1)
                                      : ""
                                  ) +
                                  "\n            "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("strong", [
                            _c(
                              "span",
                              {
                                class:
                                  " the-code " + "text-" + order.status.class
                              },
                              [_vm._v("Code:")]
                            ),
                            _vm._v("\n              " + _vm._s(order.code))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("small", { staticClass: "text-muted mr-3" }, [
                          _c("img", {
                            staticClass: "my-money",
                            attrs: {
                              src:
                                "https://www.vhv.rs/dpng/d/511-5119015_blue-money-icon-png-png-download-habitat-for.png",
                              alt: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("strong", [
                            _vm._v(" " + _vm._s(order.total_price) + " SR ")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "small",
                          { staticClass: "text-muted my-date-delivery" },
                          [
                            _c("CIcon", { attrs: { name: "cil-mobile" } }),
                            _vm._v(
                              " " + _vm._s(order.delivery_time) + "\n          "
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "small",
                          { staticClass: "te\n          xt-muted" },
                          [
                            _c(
                              "CBadge",
                              {
                                staticClass: "my-status",
                                attrs: { color: order.status.class }
                              },
                              [
                                _vm._v(
                                  "\n              " + _vm._s(order.status.name)
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  })
                ],
                2
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);