<template>
  <CRow>


    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          Order id:  {{ $route.params.id }}
        </CCardHeader>
        <CCardBody>
          <CAlert
            :show.sync="dismissCountDown"
            :color="alertColor"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>
          <CDataTable
            striped
            small
            fixed
            :items="order"
            :fields="fields"
          >
          </CDataTable>
        </CCardBody>
        <CCardFooter>

          <CButton color="primary" @click="goBack">Back</CButton>
        </CCardFooter>
      </CCard>
    </CCol>



    <CCol col="12" lg="6">
      <!--    map here-->
      <CCard>
        <CCardHeader>
          Maps
        </CCardHeader>
        <CCardBody>

          <div style="height: 500px; width: 100%">
            <l-map
              v-if="showMap"
              :zoom="zoom"
              :center="center"
              :options="mapOptions"
              style="height: 80%"
              @update:center="centerUpdate"
              @update:zoom="zoomUpdate"
            >
              <l-tile-layer
                :url="url"
                :attribution="attribution"
              />
              <l-marker :lat-lng="pickupPoint">
                <l-popup>
                  <div @click="innerClick">
                    pickup here
                  </div>
                </l-popup>
              </l-marker>
              <l-marker :lat-lng="deliveryPoint">
                <l-tooltip :options="{ permanent: true, interactive: true }">
                  <div @click="innerClick">
                   Delivery here
                  </div>
                </l-tooltip>
              </l-marker>
              <l-icon-default :image-path="path" />
            </l-map>
          </div>

        </CCardBody>
      </CCard>

      <!--    status Info-->
      <CCard>
        <CCardHeader>
         Status Information
        </CCardHeader>
        <CCardBody>
          <CAlert
            :show.sync="dismissCountDown"
            :color="alertColor"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>

          <CDataTable
            striped
            small
            fixed
            :items="status"
            :fields="fields"
          >
          </CDataTable>

        </CCardBody>
        <CCardFooter>

        </CCardFooter>
      </CCard>

<!--      Driver Information-->
      <CCard>
        <CCardHeader>
          Driver Information
        </CCardHeader>
        <CCardBody>
          <CAlert
            :show.sync="dismissCountDown"
            :color="alertColor"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>
          <CDataTable
            striped
            small
            fixed
            :items="fleet"
            :fields="fields"
          >
          </CDataTable>
        </CCardBody>
        <CCardFooter>

        </CCardFooter>
      </CCard>
    </CCol>
<!--    products info-->
    <CCol col="12" lg="12">
      <CCard no-header>
        <CCardBody>
          <CRow>
            <CCol col="4" :key="file.id" v-for="file in files">
              <img
                class="image"
                :src="file.file_path"
                @click="imageClick(file.file_path)"
              />
              <a  class=" btn btn-success" :href="file.file_path" download target="_blank">Show</a>
            </CCol>
          </CRow>
          <vue-gallery-slideshow
            :images="images"
            :index="imageIndex"
            @close="imageIndex = null"
          ></vue-gallery-slideshow>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol col="12" lg="12">
      <CCard>
        <CCardHeader>
         Products Information
        </CCardHeader>
        <CCardBody>
          <CAlert
            :show.sync="dismissCountDown"
            :color="alertColor"
            fade
          >
            ({{dismissCountDown}}) {{ message }}
          </CAlert>
          <CDataTable
            striped
            small
            fixed
            :items="products"
            :fields="productFields"
          >
          </CDataTable>
        </CCardBody>
        <CCardFooter>
          <CButton color="primary" @click="goBack">Back</CButton>

        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>
<style>
.image {
  width: 300px;
  height: 300px;
  background-size: cover;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}
</style>
<script>
  import axios from 'axios'
  import { latLng } from "leaflet";
  import { LMap, LTileLayer, LMarker, LPopup, LTooltip, LIconDefault } from "vue2-leaflet";
  import VueGallerySlideshow from "vue-gallery-slideshow";
  export default {
    name: 'Order',
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
      LTooltip,
      LIconDefault,
      VueGallerySlideshow
    },
    data: () => {
      return {
        message: '',
        showMessage: false,
        alertColor:'',
        dismissSecs: 3,
        dismissCountDown: 0,
        order: [],
        images: [],
        files:[],
        imageIndex: null,
        products:[],
        status:[],
        fleet:[],
        productFields:['name','one_piece_price','quantity','total_price','note'],
        fields: [
          {key: 'key'},
          {key: 'value'},
        ],

        //map data
        zoom: 9,
        path:'../../../public/markers/1.png',
        center: latLng(24.763595, 46.740090),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        pickupPoint: latLng(24.763595, 46.740090),
        deliveryPoint:latLng(24.763595, 46.740090),
        currentZoom: 11.5,
        currentCenter: latLng(24.763595, 46.740090),
        mapOptions: {
          zoomSnap: 0.5
        },
        showMap: true
      }
    },
    methods: {
      imageClick(path) {
        let self = this;
        this.imageIndex = self.images.indexOf(path);
      },
      zoomUpdate(zoom) {
        this.currentZoom = zoom;
      },
      centerUpdate(center) {
        this.currentCenter = center;
      },
      innerClick() {
        alert("Click!");
      },

      showAlert () {
        this.dismissCountDown = this.dismissSecs
      },
      getOrderDetails(){
        let self = this;
        axios.get('/api/order/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
          .then(function (response) {

            // let imagesData = [...response.order.order.invoice];
            self.files = response.data.order.invoice;
            self.pickupPoint = latLng(response.data.order.pick_up_lat, response.data.order.pick_up_lng);
            self.deliveryPoint = latLng(response.data.order.delivery_lat, response.data.order.delivery_lng);

            let orderInfo = {...response.data.order};

            delete orderInfo.products;
            delete orderInfo.status;
            delete orderInfo.fleet;
            delete orderInfo.deleted_at;
            delete orderInfo.pick_up_lng;
            delete orderInfo.pick_up_lat;
            delete orderInfo.delivery_lng;
            delete orderInfo.delivery_lat;

            const items = Object.entries(orderInfo);
            self.order = items.map(([key, value]) => {
              return {key: key, value: value};
            });


            //products
            if (response.data.order.products !== null)
            self.products = response.data.order.products;

            //status
            if (response.data.order.status !== null) {
              let statusInfo = {...response.data.order.status};
                delete statusInfo.class;
                delete statusInfo.color;
                delete statusInfo.created_at;
                delete statusInfo.updated_at;
              const statusArr = Object.entries(statusInfo);
              self.status = statusArr.map(([key, value]) => {
                return {key: key, value: value}
              });
            }
            //driver =
            if (response.data.order.fleet !== null) {
              let fleetInfo = {...response.data.order.fleet};
              delete fleetInfo.user_id;
              delete fleetInfo.created_at;
              delete fleetInfo.updated_at;
              const fleetArr = Object.entries(fleetInfo);
              self.fleet = fleetArr.map(([key, value]) => {
                return {key: key, value: value}
              });
            }

          }).catch(function (error) {
          console.log(error);
          self.alertColor = 'danger';
          self.message = 'unexpected error occurred.';
          self.showAlert();
        });
      },
      goBack() {
        this.$router.go(-1)
      }
    },
    mounted: function(){
     this.getOrderDetails();
    },
  }


</script>
