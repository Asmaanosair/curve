<template>
  <CRow>
    <CCol col="12" xl="12">
      <transition name="slide">
        <CCard>
          <CCardHeader>
            {{$t("drivers")}}
          </CCardHeader>
          <CCardBody>
            <h4>    {{$t("total_balance")}} <CBadge :color="getWalletBadge(balance)">{{balance}}</CBadge> </h4>
            <CButton class="m-3" color="primary" @click="withdrawModal = true">Withdraw Money From this wallet</CButton>
            <CAlert
              :show.sync="dismissCountDown"
              :color="alertColor"
              fade
            >
              ({{dismissCountDown}}) {{ message }}
            </CAlert>
            <CCol sm="12">
              <CDataTable
                :items="items"
                :fields="fields"
                index-column
                hover
                table-column
                items-per-page-select
                :sorter="{ external: true, resetable: true }"
                :columnFilter="{ external: true, lazy: true }"
                @pagination-change="changeItemsLimit"
                :sorter-value.sync="sorter"
                :column-filter-value.sync="columnFilter"
                :loading="loading"
              >

                <template #description="{item}">
                  <td v-if="item.meta !== null">
                    {{item.meta.description}}
                  </td>
                  <td v-else>
                  </td>
                </template>

                <template #amount="{item}">
                  <td>
                    <CBadge :color="getWalletBadge(item.amount)">{{ item.amount }}</CBadge>
                  </td>
                </template>

                <template #type="{item}">
                  <td>
                    <CBadge :color="getBadge(item.type)">{{ item.type }}</CBadge>
                  </td>
                </template>

              </CDataTable>
              <CPagination
                :pages="maxPages"
                :active-page.sync="activePage"
              />
            </CCol>
          </CCardBody>
        </CCard>
      </transition>
    </CCol>


    <CModal
      :title="`Withdraw Fund From ${balance}`"
      :show.sync="withdrawModal"
    >

      <CInput type="text" label="Amount" placeholder="Amount" v-model="withdrawAmount"></CInput>
      <CInput type="text" label="Description" placeholder="Description" v-model="withdrawDescription"></CInput>


      <div slot="footer">
        <CButton class="float-right" color="primary" @click="withdraw()">
          save
        </CButton>
        <CButton class="" color="danger" @click="withdrawModal = false">
          Close
        </CButton>
      </div>
    </CModal>

  </CRow>

</template>


<script>
  import axios from 'axios'
  // import TwistPagination from '../twistPagination/Paginate.vue'

  export default {
    name: 'Wallet',
    data: () => {
      return {
        items: [],
        fields: ['amount','description', 'created_at','type'],
        sorter: {column: '', asc: false},
        activePage: 1,
        maxPages: 1,
        message: '',
        alertColor:'',
        showMessage: false,
        dismissSecs: 3,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        columnFilter: {},
        pageOfItems: [],
        loading: false,
        balance:0,
        withdrawModal:false,
        withdrawAmount:null,
        withdrawDescription:null
      }
    },
    watch: {
      activePage(){
        this.getWallet();
      },
      sorter: {
        handler(){
          this.getWallet();
        },
        deep: true
      },

      columnFilter(){
        this.getWallet();
      }
    },
    methods: {
      changeItemsLimit( val ){
        this.itemsLimit = val;
        this.getWallet();
      },
      getBadge (type) {
        return type === 'deposit' ? 'success'
          : type === 'withdraw' ? 'danger' : 'primary'
      },
      getWalletBadge(balance){
        return parseFloat(balance) <= 0 ? 'danger': 'success';
      },

      withdraw( ) {
        let self = this;
        axios.post(  '/api/fleet/wallet/withdraw/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"), {
         amount: self.withdrawAmount,
         description: self.withdrawDescription,
        })
          .then(function (response) {
            self.alertColor = 'success';
            self.message = 'Successfully withdrew money.';
            self.showAlert();
            self.withdrawModal = false;
            self.getWallet();
          }).catch(function (error) {
          console.log(error);
          self.alertColor = 'danger';
          self.message = 'unexpected error occurred in delete the fleet.';
          self.showAlert();
        });
      },
      countDownChanged (dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert () {
        this.dismissCountDown = this.dismissSecs
      },
      getWallet (){
        this.loading = true;
        let self= this;
        this.items = [];
        axios.get(  '/api/fleet/wallet/'+self.$route.params.id +'?page=' + self.activePage + '&token='+localStorage.getItem("api_token"),{
          params: {
            sorter: self.sorter,
            columnFilter: self.columnFilter,
            itemsLimit: self.itemsLimit
          }
        })
          .then(function (response) {
            console.log(response)

            self.items = self.items.concat(response.data.wallet.transactions.data);
            self.maxPages = response.data.wallet.transactions.last_page;
            self.balance = response.data.wallet.balance;
            self.loading = false
          }).catch(function (error) {
          console.log(error);
          self.loading = false
          self.alertColor = 'danger';
          self.message = 'unexpected error occurred in gettin fleets.';
          self.showAlert();
        });

      },
      makeFilter(){
        this.getWallet();
      },
    },
    mounted: function(){
      this.getWallet();
    },

  }
</script>
