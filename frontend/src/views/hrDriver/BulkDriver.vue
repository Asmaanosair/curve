<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard no-header class="p-4">
        <h2 class="text-center">
          {{ $t("download_example") }}
          <div class="my-notes">
            <p>notes</p>
            <ul>
              <li>
                mobile should be unique
              </li>
              <li>
                identity should be unique
              </li>
              <li>
                identity should not be less than 10 numbers and greater than 15
              </li>
            </ul>
          </div>
        </h2>
        <a
          href="https://drive.google.com/file/d/1z47FwANPAravR-Z0_n_S2DuDA4CR5zPn/view?usp=sharing"
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
            action="/api/bulk-driver"
            method="post"
            enctype="multipart/form-data"
          >
            <input type="hidden" name="token" :value="apiToken" />
            <input required type="file" name="file" />
            <input
              type="submit"
              class="btn btn-success"
              :value="$t('upload')"
            />
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
    goBack() {
      this.$router.go(-1);
      this.$router.replace({ path: "/driver-applications" });
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
    this.getToken();
  }
};
</script>
