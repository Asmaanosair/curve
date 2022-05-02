<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header>
        <CCardBody>
          <template slot="header">
            Create Orders
          </template>
          <CAlert :show.sync="dismissCountDown" :color="alertColor" fade>
            <ul v-if="message instanceof Object">
              <li v-for="item in message">
                ({{ dismissCountDown }}) {{ item[0] }}
              </li>
            </ul>
            <span v-if="alertColor=='danger' && message instanceof Object==false">
              ({{ dismissCountDown }}) unexpected error occurred in creating new order.
            </span>
            <span v-if="alertColor=='success'">
              ({{ dismissCountDown }}){{message}}
            </span>
          </CAlert>

          <p>{{ $t("customer_name") }}</p>
          <CInput
            type="text"
            :placeholder="$t('customer_name') + '...'"
            v-model="customer_name"
          ></CInput>

          <p>{{ $t("customer_mobile") }}</p>
          <CInput
            type="text"
            :placeholder="$t('customer_mobile') + '...'"
            v-model="customer_mobile"
          ></CInput>


          <p>Order Price</p>
          <CInput
            type="text"
            :placeholder="'Order Price...'"
            v-model="order_price"
          ></CInput>
          <p>{{ $t("discount") }}</p>
          <CInput
            type="text"
            :placeholder="$t('discount') + '...'"
            v-model="discount"
          ></CInput>
          <p>
            Payment Method
          </p>
          <select
            @change="choosePayFunc()"
            class="form-control"
            v-model="payment_method"
          >
            <option value="1">Cash On Delivery</option>
            <option value="2">Online Payment</option>

          </select>
<!--          <p>-->
<!--            Payment Type-->
<!--          </p>-->
<!--          <select-->
<!--            class="form-control"-->
<!--            v-model="payment_type"-->
<!--            v-show="type1"-->
<!--          >-->
<!--            <option value="1" >Pay Cash</option>-->
<!--            <option value="2">Pay by driver wallet</option>-->
<!--            <option value="3"> Not Paying</option>-->
<!--          </select>-->
<!--          <select-->
<!--            class="form-control"-->
<!--            v-model="payment_type"-->
<!--            v-show="type2"-->
<!--          >-->
<!--            <option value="3"> Not Paying</option>-->
<!--            <option value="4">Paying on picked up</option>-->

<!--          </select>-->
<!--          <p>-->
<!--            choose method deliver-->
<!--          </p>-->
<!--          <select-->
<!--            @change="chooseFeesFunc()"-->
<!--            class="form-control"-->
<!--            v-model="chooseFees"-->
<!--          >-->
<!--            <option value="0">by fees</option>-->
<!--            <option value="1">pay on pickup and collect</option>-->
<!--          </select>-->
<!--          <div class="mt-3" v-if="chooseFees == '0'">-->
<!--            <p>{{ $t("deliver_fees") }}</p>-->
<!--            <CInput-->
<!--              type="text"-->
<!--              :placeholder="$t('deliver_fees') + '...'"-->
<!--              v-model="deliver_fees"-->
<!--            ></CInput>-->
<!--          </div>-->
<!--          <div class="mt-3" v-else>-->
<!--            <p>{{ $t("pay_on_pickup") }}</p>-->
<!--            <CInput-->
<!--              type="text"-->
<!--              :placeholder="$t('pay_on_pickup') + '...'"-->
<!--              v-model="pay_on_pickup"-->
<!--            ></CInput>-->

<!--            <p>{{ $t("collect_on_delivery") }}</p>-->
<!--            <CInput-->
<!--              type="text"-->
<!--              :placeholder="$t('collect_on_delivery') + '...'"-->
<!--              v-model="collect_on_delivery"-->
<!--            ></CInput>-->
<!--          </div>-->
          <p>{{ $t("delivery_time") }}</p>
          <CInput
            type="datetime-local"
            :placeholder="$t('delivery_time') + '...'"
            v-model="delivery_time"
            format="yyyy-MM-dd HH:mm:ss"
          ></CInput>
          <div class="form-group" v-if="role!=='client' && role!=='client-branch' ">

            <label for="">Client </label>

            <select

              v-model.trim="$v.client_id.$model"
              :class="{
                'form-control': true,
                'is-invalid': $v.client_id.$error,
                'is-valid': !$v.client_id.$invalid
              }"
            >
              <option
                v-for="(client, index) in clients"
                :selected="client.id==client_id"
                :value="client.id"
                :key="index"
              >
                {{ client.company_name }}
              </option>
            </select>
            <!--            <div class="invalid-feedback">-->
            <!--                <span class="d-block" v-if="!$v.client_id.required">-->
            <!--                  Your Client is required .-->
            <!--                </span>-->
            <!--            </div>-->
            <!--            <div class="valid-feedback">-->
            <!--              Client is valid !-->
            <!--            </div>-->

          </div>

        </CCardBody>
      </CCard>
      <CCol col="12" lg="12">
        <CCard
          hidden
          no-header
          v-for="(product, index) in products"
          :key="index"
        >
          <CCardBody>
            <p>{{ $t("product_name") }}</p>
            <CInput
              type="text"
              :placeholder="$t('product_name') + '...'"
              v-model="product.name"
            ></CInput>

            <p>{{ $t("quantity") }}</p>
            <CInput
              type="text"
              :placeholder="$t('quantity') + '...'"
              v-model="product.quantity"
            ></CInput>
            <p>{{ $t("price") }}</p>
            <CInput
              type="text"
              :placeholder="$t('price') + '...'"
              v-model="product.one_piece_price"
            ></CInput>
            <p>{{ $t("notes") }}</p>
            <CInput
              type="text"
              :placeholder="$t('notes') + '...'"
              v-model="product.note"
            ></CInput>
            <CButton
              class="mb-3"
              color="danger"
              @click="deleteProduct(index)"
            >{{ $t("delete") }}</CButton
            >
          </CCardBody>
        </CCard>

        <CButton class="mb-3" color="success" @click="store()">{{
            $t("save")
          }}</CButton>
        <CButton class="mb-3" color="warning" @click="goBack">{{
            $t("back")
          }}</CButton>
        <CButton hidden class="mb-3" color="info" @click="addProduct()">{{
            $t("add_more_product")
          }}</CButton>
      </CCol>
    </CCol>

    <CCol col="12" lg="6">
      <div class="my-bg">
        <p>{{ $t("from") }}</p>
        <div id="myMap"></div>
        <p>{{ $t("pick_up_lng") }}</p>
        <CInput type="text" placeholder="0" v-model="pick_up_lng"></CInput>
        <p>{{ $t("pick_up_lat") }}</p>
        <CInput type="text" placeholder="0" v-model="pick_up_lat"></CInput>
      </div>

      <div class="my-bg">
        <p>{{ $t("to") }}</p>
        <div id="myMap2" class="my-4"></div>
        <p>{{ $t("delivery_lng") }}</p>
        <CInput type="text" placeholder="0" v-model="delivery_lng"></CInput>
        <p>{{ $t("delivery_lat") }}</p>
        <CInput type="text" placeholder="0" v-model="delivery_lat"></CInput>
      </div>

    </CCol>
  </CRow>
</template>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJhqpSuRhbNnIMU1qCnhBKgiYuuS5yypg"></script>
<script>
import axios from "axios";
import moment from 'moment'
import {
  between,
  email,
  maxLength,
  minLength,
  minValue,
  numeric,
  required
} from "vuelidate/lib/validators";
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
      clients: {},
      code: "1",
      type1: true,
      type2: false,
      role:'',
      client_id:'',
      customer_mobile: "09022321223",
      total_price: 0,
      order_price: 100,
      discount: 0,
      chooseFees: 0,
      pay_on_pickup: 0,
      collect_on_delivery: 0,
      pick_up_lng: 46.6020969133606,
      pick_up_lat: 24.747953426988584,
      delivery_lng: 46.59552550127411,
      delivery_lat: 24.743909817158464,
      deliver_fees: 20,
      kilos_count: 0,
      payment_method: 1,
      payment_type: 3,
      pickerMove: false,
      delivery_time: "",
      timeNow: "",
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
  validations: {
    client_id:{
      required
    },

  },

  methods: {
    getFleets() {
      this.loading = true;
      let self = this;
      this.items = [];
      axios
        .get(
          "/api/orders/create" +
          "?token=" +
          localStorage.getItem("api_token")
        )
        .then(function(response) {
          console.log(response);

          self.clients = response.data.clients;
          self.role = response.data.user.menuroles;
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
          self.loading = false;
          self.alertColor = "danger";
          self.message = "unexpected error occurred in getting fleets.";
          self.showAlert();
        });
    },
    getNow() {

      const today = new Date();
      this.timeNow = today;

    },
    deleteProduct(index) {
      this.products.splice(index, 1);
    },
    chooseFeesFunc() {
      if (this.chooseFees == 1) {
        this.deliver_fees = 0;
      } else {
        this.pay_on_pickup = 0;
        this.collect_on_delivery = 0;
      }
    },
    choosePayFunc() {
      if (this.payment_method == 1) {
        this.type1 = true;
        this.type2 = false;
        this.payment_type = 1;
      } else {
        this.type2 = true;
        this.type1= false;
        this.payment_type = 3;
      }
    },
    mapPicker2() {
      var self = this;
      var map2;
      var marker2;
      var myLatlng2 = new google.maps.LatLng(
        self.delivery_lat,
        self.delivery_lng
      );
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
      var myLatlng = new google.maps.LatLng(self.pick_up_lat, self.pick_up_lng);
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
    store() {
      let self = this;
      let formData = new FormData();
      let orderPrice = 0;
      this.number_of_products = this.products.length;

      // this.products.forEach(element => {
      //   orderPrice += element.quantity * element.one_piece_price;
      //   element.total_price = element.quantity * element.one_piece_price;
      // });

      // this.order_price = orderPrice;

      this.total_price = parseInt(this.order_price) - parseInt(this.discount);

      formData.append("customer_name", this.customer_name);
      formData.append("customer_mobile", this.customer_mobile);
      formData.append("order_price", this.order_price);
      formData.append("discount", this.discount);
      formData.append("delivery_time",moment(String(this.delivery_time)).format('MM/DD/YYYY HH:mm'));
      formData.append("timeNow",moment(String(this.timeNow)).format('MM/DD/YYYY HH:mm'));

      formData.append("client_id", this.client_id);
      formData.append("number_of_products", this.number_of_products);
      formData.append("total_price", this.total_price);
      formData.append("pick_up_lng", this.pick_up_lng);
      formData.append("pick_up_lat", this.pick_up_lat);
      formData.append("delivery_lng", this.delivery_lng);
      formData.append("delivery_lat", this.delivery_lat);
      formData.append("kilos_count", this.kilos_count);
      formData.append("payment_method", this.payment_method);
      formData.append("products", JSON.stringify(this.products));

      axios
        .post(
          "/api/create-order?token=" + localStorage.getItem("api_token"),
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        .then(function(response) {
          self.alertColor = "success";
          self.message = "Successfully Created order.";
          self.showAlert();
        })
        .catch(function(error) {
          console.log(error.response);
          self.alertColor = "danger";
          self.message = error.response.data.message;


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
    this.kilos_count = this.calculateDistance();

    this.mapPicker2();
    this.mapPicker();
    this.getNow();
    this.getFleets();
  }
};
</script>
