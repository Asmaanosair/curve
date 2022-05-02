<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header class="p-4">
        <h2 class="text-center">
          {{$t("download_example")}}
        </h2>
        <a
          href="https://drive.google.com/file/d/1sZOKkchxezS2Hp15wJ5dMJqtvQzmp_wN/view?usp=sharing"
          download=""
          class="text-center"
        >
          <img
            class="excel-img"
            src="https://www.freeiconspng.com/thumbs/xls-icon/excel-icon-15.png"
            alt=""
          />
        </a>
        <CCardBody class="text-center">
          <form
            action="/api/import-excel"
            method="post"
            enctype="multipart/form-data"
          >
            <input type="hidden" name="token" :value="apiToken" />
            <input required type="file" name="file" />
            <input type="submit" class="btn btn-success" :value="$t('upload')"/>
          </form>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from "axios";
export default {
  name: "Creat",
  data: () => {
    return {
      apiToken: "",
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

      this.products.forEach(element => {
        orderPrice += element.quantity * element.one_piece_price;
        element.total_price = element.quantity * element.one_piece_price;
      });

      this.order_price = orderPrice;

      this.total_price =
        parseInt(this.order_price) +
        parseInt(this.deliver_fees) -
        parseInt(this.discount);

      formData.append("customer_name", this.customer_name);
      formData.append("customer_mobile", this.customer_mobile);
      formData.append("order_price", this.order_price);
      formData.append("discount", this.discount);
      formData.append("deliver_fees", this.deliver_fees);
      formData.append("delivery_time", this.delivery_time);
      formData.append("code", this.code);
      formData.append("number_of_products", this.number_of_products);
      formData.append("total_price", this.total_price);

      formData.append("pick_up_lng", this.pick_up_lng);
      formData.append("pick_up_lat", this.pick_up_lat);
      formData.append("delivery_lng", this.delivery_lng);
      formData.append("delivery_lat", this.delivery_lat);
      formData.append("products", JSON.stringify(this.products));

      axios
        .post(
          "/api/create-order" + "?token=" + localStorage.getItem("api_token"),
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        .then(function(response) {
          self.alertColor = "success";
          self.message = "Successfully Created Fleet.";
          self.showAlert();
        })
        .catch(function(error) {
          console.log(error);
          self.alertColor = "danger";
          self.message = "unexpected error occurred in creating new fleet.";
          self.showAlert();
        });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    getToken() {
      this.apiToken = localStorage.getItem("api_token");
    }
  },

  created: function() {},

  mounted: function() {
    this.getToken()
  }
};
</script>
