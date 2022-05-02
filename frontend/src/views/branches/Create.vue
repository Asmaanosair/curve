<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <label for="">Branch Name</label>
          <input class="form-control mb-2" type="text" v-model="name" />

          <div class="form-group">
            <p>Client</p>
            <select
              type="text"
              v-model.trim="client"
              :class="{
                'form-control': true
              }"
            >
              <option
                v-for="(client, index) in allClients"
                :value="client.id"
                :key="index"
              >
                {{ client.name }}
              </option>
            </select>
          </div>

          <div class="my-bg">
            <p>pickup location</p>
            <div id="myMap"></div>
            <p>{{ $t("pick_up_lng") }}</p>
            <CInput type="text" placeholder="0" v-model="pick_up_lng"></CInput>
            <p>{{ $t("pick_up_lat") }}</p>
            <CInput type="text" placeholder="0" v-model="pick_up_lat"></CInput>
          </div>

          <div class="my-bg">
            <p>drop-off location</p>
            <div id="myMap2" class="my-4"></div>
            <p>{{ $t("delivery_lng") }}</p>
            <CInput type="text" placeholder="0" v-model="delivery_lng"></CInput>
            <p>{{ $t("delivery_lat") }}</p>
            <CInput type="text" placeholder="0" v-model="delivery_lat"></CInput>
          </div>
          <div role="group" class="form-group">
            <p>{{ $t("status") }}</p>
            <select
              type="text"
              v-model="status"
              :class="{
                'form-control': true,
              }"
            >
              <option
                v-for="(status, index) in allStatus"
                :value="status.name"
                :key="index"
              >
                {{ status.name }}
              </option>
            </select>

          </div>
          <CButton class="mb-3" color="success" @click="store()">{{
            $t("save")
          }}</CButton>
          <CButton class="mb-3" color="warning" @click="goBack">{{
            $t("back")
          }}</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJhqpSuRhbNnIMU1qCnhBKgiYuuS5yypg"></script>
<script>
import axios from "axios";
import { cilThumbUp } from "@coreui/icons";
export default {
  name: "Creat",
  data: () => {
    return {
      products: [
        {
          name: "test",
          one_piece_price: 100,
          quantity: 1,
          total_price: 10,
          note: "test"
        }
      ],
      customer_name: "test",
      allStatus: {},
      code: "1",
      customer_mobile: "",
      total_price: 0,
      name: "",
      order_price: 100,
      discount: 10,
      pick_up_lng: 0,
      pick_up_lat: 0,
      status: '',
      delivery_lng: 0,
      delivery_lat: 0,
      deliver_fees: 10,
      kilos_count: 0,
      client: "",
      allClients: [],
      pickerMove: false,
      delivery_time: "",
      imageIndex: null,
      showMessage: false,
      number_of_products: 0,
      message: "",
      alertColor: "",
      dismissSecs: 7,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  methods: {
    deleteProduct(index) {
      this.products.splice(index, 1);
    },
    mapPicker2() {
      var self = this;
      var map2;
      var marker2;
      var myLatlng2 = new google.maps.LatLng(24.74674035785072, 46.601989625);
      var geocoder2 = new google.maps.Geocoder();
      var infowindow2 = new google.maps.InfoWindow();
      function initialize() {
        var mapOptions2 = {
          zoom: 18,
          center: myLatlng2,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map2 = new google.maps.Map(
          document.getElementById("myMap2"),
          mapOptions2
        );

        marker2 = new google.maps.Marker({
          map: map2,
          position: myLatlng2,
          draggable: true
        });

        geocoder2.geocode(
          {
            latLng: myLatlng2
          },
          function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[0]) {
                infowindow2.setContent(results[0].formatted_address);
                infowindow2.open(map2, marker2);
              }
            }
          }
        );

        google.maps.event.addListener(marker2, "dragend", function() {
          geocoder2.geocode(
            {
              latLng: marker2.getPosition()
            },
            function(results, status) {
              self.delivery_lat = marker2.getPosition().lat();
              self.delivery_lng = marker2.getPosition().lng();
              self.pickerMove = true;
              self.kilos_count = self.calculateDistance();
              infowindow2.setContent(results[0].formatted_address);
              infowindow2.open(map2, marker2);
            }
          );
        });
      }
      initialize();
    },

    mapPicker() {
      var self = this;
      var map;
      var marker;
      var myLatlng = new google.maps.LatLng(24.74674035785072, 46.601989625);
      var geocoder = new google.maps.Geocoder();
      var infowindow = new google.maps.InfoWindow();
      function initialize() {
        var mapOptions = {
          zoom: 18,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById("myMap"), mapOptions);

        marker = new google.maps.Marker({
          map: map,
          position: myLatlng,
          draggable: true
        });

        geocoder.geocode(
          {
            latLng: myLatlng
          },
          function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[0]) {
                infowindow.setContent(results[0].formatted_address);
                infowindow.open(map, marker);
              }
            }
          }
        );

        google.maps.event.addListener(marker, "dragend", function() {
          geocoder.geocode(
            {
              latLng: marker.getPosition()
            },
            function(results, status) {
              self.pick_up_lat = marker.getPosition().lat();
              self.pick_up_lng = marker.getPosition().lng();
              if (self.pickerMove) {
                self.kilos_count = self.calculateDistance();
              }

              infowindow.setContent(results[0].formatted_address);
              infowindow.open(map, marker);
            }
          );
        });
      }
      initialize();
    },

    addProduct() {
      let product = {
        name: "",
        one_piece_price: 0,
        quantity: 1,
        total_price: 0,
        note: ""
      };

      this.products.push(product);
    },
    goBack() {
      this.$router.go(-1);
      this.$router.replace({ path: "/driver-applications" });
    },
    getClients() {
      this.loading = true;
      let self = this;
      this.items = [];
      axios
        .get(
          "/api/branch/create" + "?token=" + localStorage.getItem("api_token")
        )
        .then(function(response) {
          self.allClients = response.data.clients;
          self.allStatus = response.data.statuses;

        })
        .catch(function(error) {
          console.log(error);

          self.loading = false;
          self.alertColor = "danger";
          self.message = "unexpected error occurred in getting fleets.";
          self.showAlert();
        });
    },
    store() {
      let self = this;
      let formData = new FormData();

      formData.append("name", this.name);
      formData.append("pickup_lng", this.pick_up_lng);
      formData.append("pickup_lat", this.pick_up_lat);
      formData.append("delivery_lng", this.delivery_lng);
      formData.append("delivery_lat", this.delivery_lat);
      formData.append("client_id", this.client);
      formData.append("status", this.status);

      axios
        .post(
          "/api/branch?token=" + localStorage.getItem("api_token"),
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        .then(function(response) {
          self.alertColor = "success";
          self.message = "Successfully Created Branch.";
          self.showAlert();
          self.goBack();
        })
        .catch(function(error) {
          console.log(error);
          self.alertColor = "danger";
          self.message = "unexpected error occurred in creating new Branch.";
          self.showAlert();
        });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },

    calculateDistance() {
      self = this;
      let gsp1 = new google.maps.LatLng(self.pick_up_lat, self.pick_up_lng);
      let gsp2 = new google.maps.LatLng(self.delivery_lat, self.delivery_lng);
      let distanceinMetere = google.maps.geometry.spherical.computeDistanceBetween(
        gsp1,
        gsp2
      );
      let kilos_count = distanceinMetere / 1000;
      return kilos_count.toFixed(2);
    }
  },

  created: function() {},

  mounted: function() {
    this.getClients();
    this.mapPicker2();
    this.mapPicker();
  }
};
</script>
