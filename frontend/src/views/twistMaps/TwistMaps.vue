<template>
  <CRow style="height:101vh !important; padding-top:0!important">
    <l-map
      id="mapping"
      :zoom.sync="zoom"
      :options="mapOptions"
      :center="center"
      :bounds="bounds"
      :min-zoom="minZoom"
      :max-zoom="maxZoom"
      style="height: 700px; width: 100%"
      ref="themap"
    >
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAAClpaVRUVGbm5s4ODjb29vGxsZpaWnDw8Pe3t5/f3+zs7OSkpLY2Ni4uLhxcXEvLy/09PTMzMysrKwNDQ0XFxdbW1tBQUGGhoaYmJjn5+fv7+8eHh55eXlLS0spKSljY2OxaxcIAAACy0lEQVR4nO3dgU4aURSEYbeCAq4giMVWUXz/l2xIa4JLEzlnZ+dyyf89wJwzWUQ2uSxXVwAAAAAAAAAAoH5N0uQxObC9zo40N2ya8SwxbvqUH2hv2DTT8LT7PuMKNGzmwWHrXtNKNNzGZr30GlakYbMOzXqrsOG7cVaZhqGpN1U2XAVGPdLwLBtGRs1qbHhtnFWm4SI061d9DYP/8V/raxj91NbW1jD2Gt0bVdVwe5MYd1tPw0n8Av61mGRvEWUNk0FqNPQHqdHQH6RGQ3+QGg39QWo09Aep0dAfpEZDf5AaDf1BajT0B6nR0B+kRkN/kBoN/UFqNPQHqdHQH6RGQ3+QGg39QWo09Aep0dAfpCZb7OhgxJN0zzxZw4duzoN0zzzZYtNu0K10zzzdYsuvOWPllr3IFuucvs58EWYYc9liX14O5/Ia3VvIFpvvPmN2mcN4w5lvPxdb9l2s3exjNtnDeMNp33WLrSKn7p1Wr6U3AAAAAAAAAAAAAAAAAAAAwAV6HL3djaJPlHUQLbb+98WZn7HH5A9PtdjBj4ZsNJuJqBZ7Pjz0H3tA97BUi3Uesv1bt2FPqsWOflXjXI7GyxY7+uWXkXTPPNliy27Qufwlyhbr5lzed0hpWAwN/UFqNPQHqdHQH6RGQ3+QGg39QWo09Aep0dAfpEZDf5AaDf1BajT0B6nR0B+kRkN/kBoN/UFqNPQHqdHQH6RGQ3+QGg39QWoDNlz/OEGbfyTsrD1lwHrAhida5p4KOx2nJ7ob5h4//dFjnr9h4gzP8/ehZ9WwuQ8Ou+s1rUTD4Gm6Wb9hRRrGLmK/S1imYexB6f1mlWkYmrqqsmHkGdlHZ2KraBgZVeU13Bln8V46TMOX0KwK/x9e/Gea+OfS/I1FkYaTxLhNRQ3H09S8dvt9tLbh6JQb7v/c48feYw6ddo9/7Fy+6gIAAAAAAABcsj/9Uihp19PW+QAAAABJRU5ErkJggg=="
        v-if="activeBtnMap"
        class="full-map-btn"
        @click="fullMap()"
      />

      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAAClpaVRUVGbm5s4ODjb29vGxsZpaWnDw8Pe3t5/f3+zs7OSkpLY2Ni4uLhxcXEvLy/09PTMzMysrKwNDQ0XFxdbW1tBQUGGhoaYmJjn5+fv7+8eHh55eXlLS0spKSljY2OxaxcIAAACy0lEQVR4nO3dgU4aURSEYbeCAq4giMVWUXz/l2xIa4JLEzlnZ+dyyf89wJwzWUQ2uSxXVwAAAAAAAAAAoH5N0uQxObC9zo40N2ya8SwxbvqUH2hv2DTT8LT7PuMKNGzmwWHrXtNKNNzGZr30GlakYbMOzXqrsOG7cVaZhqGpN1U2XAVGPdLwLBtGRs1qbHhtnFWm4SI061d9DYP/8V/raxj91NbW1jD2Gt0bVdVwe5MYd1tPw0n8Av61mGRvEWUNk0FqNPQHqdHQH6RGQ3+QGg39QWo09Aep0dAfpEZDf5AaDf1BajT0B6nR0B+kRkN/kBoN/UFqNPQHqdHQH6RGQ3+QGg39QWo09Aep0dAfpCZb7OhgxJN0zzxZw4duzoN0zzzZYtNu0K10zzzdYsuvOWPllr3IFuucvs58EWYYc9liX14O5/Ia3VvIFpvvPmN2mcN4w5lvPxdb9l2s3exjNtnDeMNp33WLrSKn7p1Wr6U3AAAAAAAAAAAAAAAAAAAAwAV6HL3djaJPlHUQLbb+98WZn7HH5A9PtdjBj4ZsNJuJqBZ7Pjz0H3tA97BUi3Uesv1bt2FPqsWOflXjXI7GyxY7+uWXkXTPPNliy27Qufwlyhbr5lzed0hpWAwN/UFqNPQHqdHQH6RGQ3+QGg39QWo09Aep0dAfpEZDf5AaDf1BajT0B6nR0B+kRkN/kBoN/UFqNPQHqdHQH6RGQ3+QGg39QWoDNlz/OEGbfyTsrD1lwHrAhida5p4KOx2nJ7ob5h4//dFjnr9h4gzP8/ehZ9WwuQ8Ou+s1rUTD4Gm6Wb9hRRrGLmK/S1imYexB6f1mlWkYmrqqsmHkGdlHZ2KraBgZVeU13Bln8V46TMOX0KwK/x9e/Gea+OfS/I1FkYaTxLhNRQ3H09S8dvt9tLbh6JQb7v/c48feYw6ddo9/7Fy+6gIAAAAAAABcsj/9Uihp19PW+QAAAABJRU5ErkJggg=="
        button
        v-else
        class="default-map-btn"
        @click="defaultMap()"
      />

      <l-control-layers
        :position="layersPosition"
        :collapsed="false"
        :sort-layers="true"
      />
      <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :attribution="tileProvider.attribution"
        :token="token"
        layer-type="base"
      />
      <l-control-zoom :position="zoomPosition" />
      <l-control-attribution
        :position="attributionPosition"
        :prefix="attributionPrefix"
      />
      <l-control-scale :imperial="imperial" />
      <l-marker
        v-for="marker in markers"
        :key="marker.id"
        :visible="marker.visible"
        :draggable="marker.draggable"
        :lat-lng.sync="marker.position"
        @click="showOrder(marker)"
      >
        <l-icon
          :icon-size="dynamicSize"
          :icon-anchor="dynamicAnchor"
          :icon-url="marker.markerIcon"
        />
        <l-popup :content="marker.tooltip" />
        <l-tooltip :content="marker.tooltip" />
      </l-marker>
      <l-polyline
        :key="marker.travelId"
        v-for="marker in markers"
        :lat-lngs="marker.travel"
      />
      <!--      <l-layer-group-->
      <!--        layer-type="overlay"-->
      <!--        name="Layer polyline"-->
      <!--      >-->
      <!--      </l-layer-group>-->
    </l-map>

    <div style="display:none" id="driver-map"></div>

    <CSidebar
      id="my-side-order"
      aside
      :show="sideShow"
      colorScheme="light"
      size="lg"
      :style="sideStyle"
    >
      <button hidden @click="testFleet()">test</button>
      <span class="close-order" @click="handleSideOrder()">x</span>
      <!--    overlaid-->

      <!--    @update:show="(val) => $store.commit('set', ['asideShow', val])"-->
      <!--      <CSidebarClose @click.native="sideShow=false"/>-->
      <CTabs tabs class="nav-underline nav-underline-primary orders-tabs">
        <CTab >
          <template slot="title">
            <!--            <CIcon name="cil-list"/>-->
            <span class="change-map" @click="driverMap()">
              {{ $t("drivers") }}
            </span>
          </template>
          <CListGroup class="list-group-accent">
            <div>
              <div class="p-2">
                <p class="mb-0  font-weight-bolder">
                  Total Drivers:
                  <span class="badge badge-info">
                    {{
                      busyFleets.length +
                        avilableFleets.length +
                        offlineFleets.length
                    }}
                  </span>
                </p>
                <span class="font-weight-bolder">Drivers Status :</span>
                <span class="badge badge-success">
                  {{ busyFleets.length }}
                </span>
                /
                <span class="badge" style="background: gray;color: white;">
                  {{ avilableFleets.length }}
                </span>
                /
                <span class="badge badge-danger">
                  {{ offlineFleets.length }}
                </span>
              </div>
            </div>

            <CListGroupItem
              style="color:white !important"
              class="list-group-item-accent-success bg-success  text-center
            font-weight-bold text-muted text-uppercase small"
            >
              {{ $t("online") }} have orders
            </CListGroupItem>

            <CListGroupItem
              v-for="fleet in fleets"
              v-if="
                fleet.status == 'online' &&
                  fleet.orders_count > 0 &&
                  fleet.lat != null &&
                  fleet.lng != null
              "
              @click="focusOnFleet(fleet.lat, fleet.lng)"
              :key="fleet.id"
              href="#"
              class="list-group-item-accent-success list-group-item-divider"
            >
              <div>
                <div class="c-avatar float-right">
                  <img
                    class="c-avatar-img"
                    :src="avatarImg"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                <div>
                  <strong>{{ fleet.name }}</strong>
                </div>
                <small class="text-muted mr-3">
                  <CIcon name="cil-list" />&nbsp;&nbsp;
                  {{ fleet.orders_count }}
                  {{ $t("orders") }}
                </small>

                <small class="text-muted">
                  {{ fleet.mobile }}
                </small>
                <div class="d-flex  align-items-center" style="margin-top:3px">
                  <p class="mb-0 text-gray">
                    Battery:
                  </p>
                  <div
                    class="progress"
                    style="width:64px;background:gray ;margin: 0 3px;position: relative;top: 2px;"
                  >
                    <div
                      class="progress-bar bg-info"
                      role="progressbar"
                      :style="'width:' + fleet.tank + '%'"
                      :aria-valuenow="fleet.tank"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {{ fleet.tank }}%
                    </div>
                  </div>
                </div>
              </div>
            </CListGroupItem>

            <hr class="transparent mx-3 my-0" />
            <CListGroupItem
              style="color:white !important;  background:gray!important "
              class="list-group-item-accent-secondary bg-gray text-center
            font-weight-bold  text-uppercase small"
            >
              {{ $t("online") }} {{ $t("avilable") }}
            </CListGroupItem>

            <CListGroupItem
              v-for="fleet in fleets"
              v-if="
                fleet.status == 'online' &&
                  fleet.orders_count == 0 &&
                  fleet.lat != null &&
                  fleet.lng != null
              "
              @click="focusOnFleet(fleet.lat, fleet.lng)"
              :key="fleet.id"
              href="#"
              class="list-group-item-accent-secondary list-group-item-divider"
            >
              <div>
                <div class="c-avatar float-right">
                  <img
                    class="c-avatar-img"
                    :src="avatarImg"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                <div>
                  <strong>{{ fleet.name }}</strong>
                </div>
                <small class="text-muted mr-3">
                  <CIcon name="cil-list" />&nbsp;&nbsp;
                  {{ fleet.orders_count }}
                  {{ $t("orders") }}
                </small>
                <small class="text-muted">
                  <CIcon name="cil-mobile" /> {{ fleet.mobile }}
                </small>
                <div class="d-flex  align-items-center" style="margin-top:3px">
                  <p class="mb-0 text-gray">
                    Battery:
                  </p>
                  <div
                    class="progress"
                    style="width:64px;background:gray ;margin: 0 3px;position: relative;top: 2px;"
                  >
                    <div
                      class="progress-bar bg-info"
                      role="progressbar"
                      :style="'width:' + fleet.tank + '%'"
                      :aria-valuenow="fleet.tank"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {{ fleet.tank }}%
                    </div>
                  </div>
                </div>
              </div>
            </CListGroupItem>

            <hr class="transparent mx-3 my-0" />
            <CListGroupItem
              style="color:white !important;  "
              class="list-group-item-accent-danger bg-danger text-center
            font-weight-bold  text-uppercase small"
            >
              {{ $t("offline") }}
            </CListGroupItem>
            <CListGroupItem
              v-for="fleet in fleets"
              v-if="
                fleet.status == 'offline' &&
                  fleet.lat != null &&
                  fleet.lng != null
              "
              :key="fleet.id"
              href="#"
              @click="focusOnFleet(fleet.lat, fleet.lng)"
              class="list-group-item-accent-danger list-group-item-divider"
            >
              <div class="c-avatar float-right">
                <img
                  class="c-avatar-img"
                  :src="avatarImg"
                  alt="admin@bootstrapmaster.com"
                />
              </div>
              <div>
                <strong>{{ fleet.name }}</strong>
              </div>
              <small class="text-muted mr-3">
                <CIcon name="cil-list" />&nbsp;&nbsp;
                {{ fleet.orders_count }}
                {{ $t("orders") }}
              </small>
              <small class="text-muted">
                <CIcon name="cil-mobile" /> {{ fleet.mobile }}
              </small>
              <div class="d-flex  align-items-center" style="margin-top:3px">
                <p class="mb-0 text-gray">
                  Battery:
                </p>
                <div
                  class="progress"
                  style="width:64px;background:gray ;margin: 0 3px;position: relative;top: 2px;"
                >
                  <div
                    class="progress-bar bg-info"
                    role="progressbar"
                    :style="'width:' + fleet.tank + '%'"
                    :aria-valuenow="fleet.tank"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {{ fleet.tank }}%
                  </div>
                </div>
              </div>
            </CListGroupItem>
          </CListGroup>
        </CTab>
        <CTab active>
          <template slot="title">
            <!--            <CIcon name="cil-speech"/>-->
            <span class="change-map" @click="orderMap()">
              {{ $t("orders") }}</span
            >
          </template>
          <CListGroupItem
            v-for="order in orders"
            :key="order.id"
            @click="focusOnDriver(order.pick_up_lat, order.delivery_lng)"
            href="#"
            class="list-group-item-accent-success list-group-item-divider"
          >
            <div class="c-avatar float-right">
              <!-- <img
                class="c-avatar-img"
                srcasset("markers/1.png"
                alt="admin@bootstrapmaster.com"
              /> -->
              <p :class="' like-img ' + 'bg-' + order.status.class">
                {{
                  order.customer_name != null
                    ? order.customer_name.substring(0, 1)
                    : ""
                }}
              </p>
              <br />
              <p class="my-customer-name">
                {{ order.customer_name }}
              </p>
            </div>

            <div class="my-locale">
              <span :class="' my-p ' + 'bg-' + order.status.class">
                {{
                  order.status != null ? order.status.name.substring(0, 1) : ""
                }}
              </span>
            </div>
            <div>
              <strong
                ><span :class="' the-code ' + 'text-' + order.status.class"
                  >Code:</span
                >
                {{ order.code }}</strong
              >
            </div>
            <small class="text-muted mr-3">
              <!-- <CIcon name="cil-list" /> -->
              <img
                class="my-money"
                src="https://www.vhv.rs/dpng/d/511-5119015_blue-money-icon-png-png-download-habitat-for.png"
                alt=""
              />
              <strong> {{ order.total_price }} SR </strong>
            </small>
            <small class="text-muted my-date-delivery">
              <CIcon name="cil-mobile" /> {{ order.delivery_time }}
            </small>
            <small
              class="te
            xt-muted"
            >
              <CBadge class="my-status" :color="order.status.class">
                {{ order.status.name }}</CBadge
              >
            </small>
          </CListGroupItem>
        </CTab>
      </CTabs>
    </CSidebar>
  </CRow>
</template>

<script>
import { latLngBounds } from "leaflet";
import {
  LMap,
  LTileLayer,
  LMarker,
  LIcon,
  LPolyline,
  LLayerGroup,
  LTooltip,
  LPopup,
  LControlZoom,
  LControlAttribution,
  LControlScale,
  LControlLayers
} from "vue2-leaflet";
import axios from "axios";
import { asset } from "@codinglabs/laravel-asset";

const tileProviders = [
  {
    name: "OpenStreetMap",
    visible: true,
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  }
  // {
  //   name: 'OpenTopoMap',
  //   visible: false,
  //   url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
  //   attribution:
  //     'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  // },
];

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPolyline,
    LLayerGroup,
    LTooltip,
    LPopup,
    LControlZoom,
    LControlAttribution,
    LControlScale,
    LControlLayers
  },
  data() {
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
      avatarImg: asset("img/avatars/1.png"),
      bounds: latLngBounds(
        // TODO: make this to be the first and last order
        { lat: 25.025965, lng: 47.275023 },
        { lat: 24.592777, lng: 46.359089 }
      )
    };
  },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  },
  mounted: function() {
    this.getInfo();
  },
  methods: {
    testFleet() {
      self = this;
      let driver = {
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

      let driverTarget = self.fleets.find(item => {
        return item.id == driver.id;
      });

      let index = self.fleets.indexOf(driverTarget);
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

    focusOnFleet(newLat, newLng) {
      window.map.setCenter({
        lat: parseFloat(newLat),
        lng: parseFloat(newLng)
      });
    },
    truckDrivers(arrLatLng) {
      let options = {
        center: { lat: this.mapDriverLat, lng: this.mapDriverLng },
        zoom: 8
      };

      window.map = new google.maps.Map(
        document.getElementById("driver-map"),
        options
      );
      let iconTarget;
      this.offlineFleets = [];
      this.avilableFleets = [];
      this.busyFleets = [];
      arrLatLng.forEach(item => {
        if (item.lat != null && item.lng != null) {
          if (item.status == "offline") {
            this.offlineFleets.push(item);
          } else {
            if (item.orders_count == 0) {
              this.avilableFleets.push(item);
            } else {
              this.busyFleets.push(item);
            }
          }
        }
      });

      for (let i = 0; i < arrLatLng.length; i++) {
        if (arrLatLng[i].lat != null && arrLatLng[i].lng != null) {
          if (arrLatLng[i].status == "online") {
            if (arrLatLng[i].orders_count == 0) {
              iconTarget =
                "https://www.grouplah.com/resources/Images/GoogleMaps/Map-Marker-grey.png";
            } else {
              iconTarget =
                "https://icon-library.com/images/marker-icon-png/marker-icon-png-19.jpg";
            }
          } else {
            iconTarget =
              "data:image/png;base64,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";
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

          function addMarker(props) {
            let marker = new google.maps.Marker({
              position: props.coords,
              icon:{
                url: props.icon,
                scaledSize: { width: 35, height: 35 },
              },
              map: map
            });

            let info = new google.maps.InfoWindow({
              content: `<div class="p-1">
           <p class="mb-0"><span class="font-weight-bold text-success"> name: </span> ${props.fleet_name} </p>
           <p class="mb-0"><span class="font-weight-bold text-success" > order count: </span> ${props.fleet_orders_count} </p>
           <p class="mb-0"><span class="font-weight-bold text-success"> mobile: </span> ${props.fleet_mobile} </p>
           <div class="d-flex mb-0">
           <p class="mb-0 font-weight-bold text-success"> Battery:
           </p>

           <div class="progress " style="width:64px;background:gray ;margin: 0 3px " >
                  <div class="progress-bar bg-info" role="progressbar" style="width:${props.tank}%;" aria-valuenow="${props.tank}" aria-valuemin="0" aria-valuemax="100">${props.tank}%</div>
           </div>
           </div>
           </div>`
            });
            // info.open(map, marker);

            marker.addListener("mouseover", function() {
              info.open(map, marker);
            });
            marker.addListener("mouseout", function() {
              info.close(map, marker);
            });
          }
        }
      }
    },
    handleSideOrder() {
      let sideOrder = document.getElementById("my-side-order");
      sideOrder.classList.toggle("handle-order");
    },

    fullMap() {
      let theMap = document.getElementById("mapping");
      this.activeBtnMap = false;
      theMap.style.position = "absolute";
      theMap.classList.add("full-map");
    },

    defaultMap() {
      let theMap = document.getElementById("mapping");
      this.activeBtnMap = true;
      theMap.style.position = "relative";
      theMap.classList.remove("full-map");
    },
    orderMap() {
      document.getElementById("driver-map").style.display = "none";
      document.getElementById("mapping").style.display = "block";
    },
    driverMap() {
      document.getElementById("driver-map").style.display = "block";
      document.getElementById("mapping").style.display = "none";
    },

    showOrder(item) {
      console.log(item);
    },
    getInfo() {
      let self = this;
      axios
        .get("/api/map-data?token=" + localStorage.getItem("api_token"))
        .then(function(response) {
          const data = { ...response.data };

          self.fleets = data.fleets;

          console.log("drivers",self.fleets);

          self.truckDrivers(data.fleets);

          self.orders = response.data.orders;
          self.markers = [];
          data.orders.map(order => {
            const deliveryOrder = {
              id: "delivery" + order.id,
              orderId: order.id,
              position: {
                lat: parseFloat(order.delivery_lat),
                lng: parseFloat(order.delivery_lng)
              },
              tooltip:
                "Delivery point order Id: " + order.id + " Code: " + order.code,
              draggable: false,
              visible: true,
              markerIcon: asset("markers/delivery.png"),
              travel: [
                [order.pick_up_lat, order.pick_up_lng],
                [order.delivery_lat, order.delivery_lng]
              ],
              travelId: "td" + order.id
            };
            self.markers.push(deliveryOrder);
            const pickUpOrder = {
              id: "pickup" + order.id,
              orderId: order.id,
              position: {
                lat: parseFloat(order.pick_up_lat),
                lng: parseFloat(order.pick_up_lng)
              },
              tooltip:
                "PickUp point order Id: " + order.id + " Code: " + order.code,
              draggable: false,
              visible: true,
              markerIcon: asset("markers/pickup.png"),
              travel: [
                [order.pick_up_lat, order.pick_up_lng],
                [order.delivery_lat, order.delivery_lng]
              ],
              travelId: "tp" + order.id
            };

            self.markers.push(pickUpOrder);
          });

          console.log(self.markers);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    focusOnDriver(lat, lng) {
      let self = this;
      self.bounds = latLngBounds(
        // TODO: make this to be the first and last order
        { lat: lat, lng: lng },
        { lat: lat, lng: lng }
      );
    }
  },

  created() {
    let self = this;
    self.fleets = [];
    this.$pusher.subscribe("fleet-location");
    this.$pusher.bind("App\\Events\\LocationNow", data => {
      console.log("the location is here");
      console.log(data)
      self = this;
      let driver = data.data.user;
      if(driver.tank==0){
        driver.tank=90
      }
      let driverTarget = self.fleets.find(item => {
        return item.id == driver.id;
      });

      let index = self.fleets.indexOf(driverTarget);

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

    this.$pusher.bind("App\\Events\\OrderOperation", data => {
      console.log("the order is here");
      console.log(data);

      let order = self.orders.find(order => order.id === data.order.id);
      let index = self.orders.indexOf(order);

      let previosStatuses = [8, 9, 10, 11];
      if (order && !previosStatuses.includes(data.order.status.id)) {
        let keys = Object.keys(order);
        keys.map(key => {
          self.orders[index][key] = data.order[key];
        });
      } else if (order && previosStatuses.includes(data.order.status.id)) {
        self.orders.splice(index, 1);
      } else {
        const deliveryOrderMarker = {
          id: "delivery" + data.order.id,
          orderId: data.order.id,
          position: {
            lat: parseFloat(data.order.delivery_lat),
            lng: parseFloat(data.order.delivery_lng)
          },
          tooltip:
            "Delivery point order Id: " +
            data.order.id +
            " Code: " +
            data.order.code,
          draggable: false,
          visible: true,
          markerIcon: asset("markers/delivery.png"),
          travel: [
            [data.order.pick_up_lat, data.order.pick_up_lng],
            [data.order.delivery_lat, data.order.delivery_lng]
          ],
          travelId: "td" + order.id
        };
        self.markers.push(deliveryOrderMarker);
        const pickUpOrderMarker = {
          id: "pickup" + data.order.id,
          orderId: data.order.id,
          position: {
            lat: parseFloat(data.order.pick_up_lat),
            lng: parseFloat(data.order.pick_up_lng)
          },
          tooltip:
            "PickUp point order Id: " + order.id + " Code: " + order.code,
          draggable: false,
          visible: true,
          markerIcon: asset("markers/pickup.png"),
          travel: [
            [data.order.pick_up_lat, data.order.pick_up_lng],
            [data.order.delivery_lat, data.order.delivery_lng]
          ],
          travelId: "tp" + data.order.id
        };

        self.markers.push(pickUpOrderMarker);

        self.orders.push(data.order);
      }
    });
  }
};
</script>
