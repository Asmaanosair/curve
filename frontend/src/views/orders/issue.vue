<template>
  <CRow class="m-orders">
    <CCol col="12" xl="12">
      <CCol col="3" class="my-3">
        <!-- <a href="/#/new-orders/create"> create Order</a> -->
        <CButton
          class="mt-1 mb-3 m-btn"
          color="success"
          @click="createOrder2()"
          >{{ $t("create_order") }}</CButton
        >

        <CButton
          class="mt-1 mb-3 m-btn "
          color="success"
          @click="bulkOrder()"
          >{{ $t("bulk_order") }}</CButton
        >
      </CCol>

      <CCard>
        <!--        <CCardHeader>-->
        <!--            Current Orders-->
        <!--        </CCardHeader>-->
        <CCardBody v-if="myLang == 'en'">
          <h6>
            {{ $t("Issue") }}
            <span>
              {{ $t("Orders") }}
            </span>
          </h6>

          <CAlert :show.sync="showMessage" :color="alertColor" fade>
            ({{ dismissCountDown }}) {{ message }}
          </CAlert>

          <CCol sm="12">
            <CDataTable
              hover
              striped
              :items="currentOrdersItems"
              :fields="fieldsCurrent"
              table-column
              items-per-page-select
              :sorter="{ external: true, resetable: true }"
              :columnFilter="{ external: true, lazy: true }"
              @pagination-change="changeItemsLimitCurrentOrders"
              :sorter-value.sync="currentOrdersSorter"
              :column-filter-value.sync="currentOrdersColumnFilter"
              :loading="currentOrdersLoading"
            >
              <template #code="{item}">
                <td>
                  {{ item.code }}
                </td>
              </template>

              <template #company="{item}">
                <td>
                  <div class="bg-info" style="padding: 2.5px ; border-radius: 10px ;text-align: center">
                    {{ item.user.company_name }}

                  </div>
                </td>
              </template>

              <template #customer_name="{item}">
                <td>
                  {{ item.customer_name }}
                </td>
              </template>

              <template #customer_mobile="{item}">
                <td>
                  {{ item.customer_mobile }}
                </td>
              </template>

              <template #number_of_products="{item}">
                <td>
                  {{ item.number_of_products }}
                </td>
              </template>

              <template #total_price="{item}">
                <td>
                  {{ item.total_price }}
                </td>
              </template>

              <template #delivery_time="{item}">
                <td>
                  {{ item.delivery_time }}
                </td>
              </template>

              <template #kilos_count="{item}">
                <td>
                  {{ item.kilos_count }}
                </td>
              </template>

              <template #commission="{item}">
                <td>
                  {{ item.kilos_total_price }}
                </td>
              </template>

              <template v-if="role == 'user,admin'" #status="{item}">
                <td>
                  <CDropdown
                    size="sm"
                    :color="item.status.class"
                    :offset="[10, 5]"
                    :toggler-text="item.status.name"
                    class="m-2"
                  >
                    <CDropdownItem
                      :key="status.id"
                      v-for="status in allStatus"
                      v-show="status !== item.status.name"
                      @click="handleChangeStatus(status.id, item.id)"
                      >{{ status.name }}</CDropdownItem
                    >
                  </CDropdown>
                </td>
              </template>

              <template v-else #status="{item}">
                <td>
                  <CDropdown
                    size="sm"
                    :color="item.status.class"
                    :offset="[10, 5]"
                    :toggler-text="item.status.name"
                    class="m-2"
                  >
                    <CDropdownItem
                      v-if="
                        status.id != 34 &&
                          status.id != 36 &&
                          status.id != 37 &&
                          status.id != 10 &&
                          status.id != 11
                      "
                      :key="status.id"
                      v-for="status in allStatus"
                      v-show="status !== item.status.name"
                      @click="handleChangeStatus(status.id, item.id)"
                      >{{ status.name }}</CDropdownItem
                    >
                  </CDropdown>
                </td>
              </template>

              <template #show="{item}">
                <td>
                  <CButton class="my-btn" size="sm" @click="showOrder(item.id)">
                    <img
                      class="control-img"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKcHbnEx0bIoJmfthMQ2Jnc97Uz-qjLGOjSg&usqp=CAU"
                      alt=""
                    />
                  </CButton>
                </td>
              </template>

              <template #edit="{item}">
                <td>
                  <CButton class="my-btn" size="sm" @click="editOrder(item.id)">
                    <img
                      class="control-img"
                      src="https://www.pinclipart.com/picdir/big/164-1646319_ewsully-com-img-activities-icons-edit-icon-png.png"
                      alt=""
                    />
                  </CButton>
                </td>
              </template>

              <template #delete="{item}">
                <td>
                  <CButton
                    class="my-btn"
                    size="sm"
                    @click="deleteOrder(item.id)"
                  >
                    <img
                      class="control-img"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGp9jrAF7I5Wc0eAcIu6BS8_620EiL9Dd8Xg&usqp=CAU"
                      alt=""
                    />
                  </CButton>
                </td>
              </template>

              <template #assign_to_driver="{item}">
                <td>
                  <CButton
                    size="sm"
                    v-if="item.fleet_id === null"
                    color="primary"
                    @click="assignOrder(item.id)"
                    >Assign</CButton
                  >
                  <CButton
                    size="sm"
                    v-else
                    color="warning"
                    @click="assignOrder(item.id)"
                    >Reassign</CButton
                  >
                </td>
              </template>
            </CDataTable>

            <CPagination
              :pages="currentOrdersMaxPages"
              :active-page.sync="currentOrdersActivePage"
            />
          </CCol>
        </CCardBody>
        <!--============================ Start Translation Ar  ===============================-->
        <CCardBody v-else>
          <h6>
            {{ $t("Issue") }}
            <span>
              {{ $t("Orders") }}
            </span>
          </h6>
          <!-- <CButton class="m-3" color="primary" @click="createFleet()">Create Driver</CButton> -->
          <CAlert :show.sync="showMessage" :color="alertColor" fade>
            ({{ dismissCountDown }}) {{ message }}
          </CAlert>
          <CCol sm="12">
            <CDataTable
              hover
              striped
              :items="currentOrdersItems"
              :fields="fieldsCurrentAr"
              table-column
              items-per-page-select
              :sorter="{ external: true, resetable: true }"
              :columnFilter="{ external: true, lazy: true }"
              @pagination-change="changeItemsLimitCurrentOrders"
              :sorter-value.sync="currentOrdersSorter"
              :column-filter-value.sync="currentOrdersColumnFilter"
              :loading="currentOrdersLoading"
            >
              <template #رقم_الكود="{item}">
                <td>
                  {{ item.code }}
                </td>
              </template>

              <template #اسم_الشركة="{item}">
                <td>
                  <CBadge color="info">
                    {{ item.user.name }}
                  </CBadge>
                </td>
              </template>

              <template #اسم_صاحب_الطلب="{item}">
                <td>
                  {{ item.customer_name }}
                </td>
              </template>

              <template #موبايل_صاحب_الطلب="{item}">
                <td>
                  {{ item.customer_mobile }}
                </td>
              </template>

              <template #عدد_المنتجات="{item}">
                <td>
                  {{ item.number_of_products }}
                </td>
              </template>

              <template #السعر_الإجمالى="{item}">
                <td>
                  {{ item.total_price }}
                </td>
              </template>

              <template #وقت_التوصيل="{item}">
                <td>
                  {{ item.delivery_time }}
                </td>
              </template>

              <!-- Start Drop Down Code -->
              <template #الحالة="{item}">
                <td>
                  <CDropdown
                    size="sm"
                    :color="item.status.class"
                    :offset="[10, 5]"
                    :toggler-text="item.status.name"
                    class="m-2"
                  >
                    <CDropdownItem
                      :key="status.id"
                      v-for="status in allStatus"
                      v-show="status !== item.status.name"
                      @click="handleChangeStatus(status.id, item.id)"
                      >{{ status.name }}</CDropdownItem
                    >
                  </CDropdown>
                </td>
              </template>
              <!-- End Drop Down Code -->

              <template #عرض="{item}">
                <td>
                  <CButton class="my-btn" size="sm" @click="showOrder(item.id)">
                    <img
                      class="control-img"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKcHbnEx0bIoJmfthMQ2Jnc97Uz-qjLGOjSg&usqp=CAU"
                      alt=""
                    />
                  </CButton>
                </td>
              </template>
              <template #تعيين_للسائق="{item}">
                <td>
                  <CButton
                    size="sm"
                    v-if="item.fleet_id === null"
                    color="primary"
                    @click="assignOrder(item.id)"
                    >{{ $t("assign") }}</CButton
                  >
                  <CButton
                    size="sm"
                    v-else
                    color="warning"
                    @click="assignOrder(item.id)"
                    >{{ $t("reassign") }}</CButton
                  >
                </td>
              </template>
            </CDataTable>

            <CPagination
              :pages="currentOrdersMaxPages"
              :active-page.sync="currentOrdersActivePage"
            />
          </CCol>
        </CCardBody>
      </CCard>
    </CCol>
    <!--============================ Previous Orders  =======================-->

    <FleetsModal
      :showModal="showFleetModal"
      :closeModal="closeModal"
      :orderId="orderId"
    >
    </FleetsModal>
  </CRow>
</template>
<style>
.d-inline {
  font-size: 10px;
}
td {
  font-size: 12px;
}
</style>

<script>
import axios from "axios";
import FleetsModal from "../fleets/fleetAssignModal";
import Pusher from "pusher-js";

// import Pusher from "pusher-js";

export default {
  name: "Orders",
  components: {
    FleetsModal
  },

  data: () => {
    return {
      orderId: null,
      showFleetModal: false,
      currentOrdersItems: [],

      fieldsCurrent: [
        "code",
        "company",
        "customer_name",
        "customer_mobile",
        "number_of_products",
        "total_price",
        "delivery_time",
        "commission",
        "kilos_count",
        "status",
        "show",
        "edit",
        "delete",
        "assign_to_driver"
      ],

      fieldsCurrentAr: [
        "رقم_الكود",
        "اسم_الشركة",
        "اسم_صاحب_الطلب",
        "موبايل_صاحب_الطلب",
        "عدد_المنتجات",
        "السعر_الإجمالى",
        "وقت_التوصيل",
        "الحالة",
        "عرض",
        "تعيين_للسائق"
      ],

      currentOrdersActivePage: 1,
      currentOrdersMaxPages: 1,

      currentOrdersSorter: { column: "", asc: false },

      currentOrdersColumnFilter: {},

      message: "",
      showMessage: false,
      alertColor: "",
      dismissSecs: 3,
      dismissCountDown: 7,
      role:"",
      showDismissibleAlert: false,
      pager: {},
      pageOfItems: [],

      currentOrdersLoading: false,
      connection: null,
      online: null,
      statuses: [],
      allStatus: [],
      newStatus: "",
      myLang: ""
      // ['ASSIGN_TO_DRIVER','DELIVERED','FAILED_TO_RETURN']
    };
  },
  watch: {
    //current
    currentOrdersActivePage() {
      this.getCurrentOrders();
    },
    currentOrdersSorter: {
      handler() {
        this.getCurrentOrders();
      },
      deep: true
    },

    currentOrdersColumnFilter() {
      this.getCurrentOrders();
    }
    //Issue
  },
  created() {
    let self = this;

    this.$pusher.subscribe("twistOrderOperation");
    this.$pusher.bind("App\\Events\\OrderOperation", data => {
      console.log("the error is here");
      console.log(data);
      let order = self.currentOrdersItems.find(
        order => order.id === data.order.id
      );
      let index = self.currentOrdersItems.indexOf(order);

      let previosStatuses = [8, 9, 10, 11];
      if (order && !previosStatuses.includes(data.order.status.id)) {
        let keys = Object.keys(order);
        keys.map(key => {
          self.currentOrdersItems[index][key] = data.order[key];
        });
      } else if (order && previosStatuses.includes(data.order.status.id)) {
        self.currentOrdersItems.splice(index, 1);
        self.previousOrdersItems.push(data.order);
      } else {
        self.currentOrdersItems.push(data.order);
      }
    });
  },
  methods: {
    deleteOrder(id) {
      let self = this;
      axios
        .post(
          "/api/remove-order/" +
            id +
            "?token=" +
            localStorage.getItem("api_token"),
          {
            _method: "DELETE"
          }
        )
        .then(function(response) {
          self.alertColor = "success";
          self.message = "Successfully deleted Order.";
          self.showAlert();
          self.getCurrentOrders();
        })
        .catch(function(error) {
          console.log(error);
          self.alertColor = "danger";
          self.message = "unexpected error occurred in delete the fleet.";
          self.showAlert();
        });
    },
    editLink(id) {
      return `orders/${id.toString()}/edit-order`;
    },
    editOrder(id) {
      const editOrder = this.editLink(id);
      this.$router.push({ path: editOrder });
    },
    bulkOrder() {
      this.$router.push({ path: "new-orders/bulk-order" });
    },
    createOrder2() {
      this.$router.push({ path: "new-orders/create" });
    },
    createOrder() {
      this.$router.push({ path: "new-orders/create" });
    },

    changeItemsLimitCurrentOrders(val) {
      this.currentOrdersItemsLimit = val;
      this.getCurrentOrders();
    },
    getBadge(status) {
      return status.class;
    },
    orderLink(id) {
      return `orders/${id.toString()}`;
    },
    showOrder(id) {
      const orderLink = this.orderLink(id);
      this.$router.push({ path: orderLink });
    },
    getLocale() {
      let locale;
      locale = localStorage.getItem("locale") || "en";
      this.myLang = locale;
    },

    assignOrder(id) {
      this.showFleetModal = true;
      this.orderId = id;
    },
    closeModal() {
      this.showFleetModal = false;
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    getCurrentOrders() {
      this.currentOrdersLoading = true;
      let self = this;
      axios
        .get(
          "/api/issueOrder?page=" +
            self.currentOrdersActivePage +
            "&token=" +
            localStorage.getItem("api_token"),
          {
            params: {
              sorter: self.currentOrdersSorter,
              columnFilter: self.currentOrdersColumnFilter,
              itemsLimit: self.currentOrdersItemsLimit
            }
          }
        )
        .then(function(response) {
          console.log(response);
          self.currentOrdersItems = response.data.issueOrders.data;
          self.currentOrdersMaxPages = response.data.issueOrders.last_page;
          self.currentOrdersLoading = false;
        })
        .catch(function(error) {
          console.log(error);
          self.currentOrdersLoading = false;
          self.alertColor = "danger";
          self.message = "unexpected error occurred in getting current orders.";
        });
    },

    getAllStatus() {
      let self = this;
      axios
        .get("/api/all-statuses?token=" + localStorage.getItem("api_token"))
        .then(function(res) {
          self.allStatus = res.data.statuses;
          self.role = res.data.user.menuroles;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handleChangeStatus(statusId, orderId) {
      console.log("changed ....");
      let self = this;
      axios
        .post(
          "/api/change-status/" +
            orderId +
            "?token=" +
            localStorage.getItem("api_token"),
          {
            status_id: statusId
          }
        )
        .then(function(res) {
          self.getCurrentOrders();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  mounted: function() {
    this.getCurrentOrders();

    this.getAllStatus();
    this.getLocale();
    Pusher.logToConsole = true;
  }
};
</script>
