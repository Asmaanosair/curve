(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{529:function(e,t,a){"use strict";a.r(t);var s=a(2),o=a.n(s),n={name:"Creat",data:function(){return{allStatus:{},name:"",phone:"",address:"",status:"",password:"",city:"",company_name:"",imageIndex:null,showMessage:!1,message:"",alertColor:"",dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},methods:{goBack:function(){this.$router.go(-1),this.$router.replace({path:"/driver-applications"})},store:function(){var e=this,t=new FormData;t.append("name",this.name),t.append("phone",this.phone),t.append("email",this.email),t.append("city",this.city),t.append("password",this.password),t.append("address",this.address),t.append("status",this.status),t.append("company_name",this.company_name),o.a.post("/api/supplier?token="+localStorage.getItem("api_token"),t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.alertColor="success",e.message="Successfully Created Fleet.",e.showAlert()})).catch((function(t){console.log(t),e.alertColor="danger",e.message="unexpected error occurred in creating new fleet.",e.showAlert()}))},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs},getFleets:function(){this.loading=!0;var e=this;this.items=[],o.a.get("/api/supplier/create?token="+localStorage.getItem("api_token")).then((function(t){console.log(t),e.allStatus=t.data.status})).catch((function(t){console.log(t),e.loading=!1,e.alertColor="danger",e.message="unexpected error occurred in getting fleets.",e.showAlert()}))}},mounted:function(){this.getFleets()}},l=a(1),r=Object(l.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CRow",[a("CCol",{attrs:{col:"12",lg:"6"}},[a("CCard",{attrs:{"no-header":""}},[a("CCardBody",[a("template",{slot:"header"},[e._v("\n           Create Users\n          ")]),e._v(" "),a("CAlert",{attrs:{show:e.dismissCountDown,color:e.alertColor,fade:""},on:{"update:show":function(t){e.dismissCountDown=t}}},[e._v("\n            ("+e._s(e.dismissCountDown)+") "+e._s(e.message)+"\n          ")]),e._v(" "),a("CInput",{attrs:{type:"text",label:"Name",placeholder:"Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),a("CInput",{attrs:{type:"text",label:"Mobile",placeholder:"Mobile"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),a("CInput",{attrs:{type:"text",label:"Email",placeholder:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("CInput",{attrs:{type:"text",label:"Address",placeholder:"Address"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),e._v(" "),a("CInput",{attrs:{type:"text",label:"City",placeholder:"City"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}}),e._v(" "),a("CInput",{attrs:{type:"text",label:"Password",placeholder:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],2)],1)],1),e._v(" "),a("CCol",{attrs:{col:"12",lg:"6"}},[a("CCard",{attrs:{"no-header":""}},[a("CCardBody",[a("CInput",{attrs:{type:"text",label:"Company_name",placeholder:"Company_name"},model:{value:e.company_name,callback:function(t){e.company_name=t},expression:"company_name"}}),e._v(" "),a("div",{staticClass:"form-group",attrs:{role:"group"}},[a("label",{},[e._v("   Status ")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.status,expression:"status"}],staticClass:"form-control",attrs:{type:"text"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.status=t.target.multiple?a:a[0]}}},e._l(e.allStatus,(function(t){return a("option",{domProps:{value:t.name}},[e._v(" "+e._s(t.name)+" ")])})),0)]),e._v(" "),a("CButton",{attrs:{color:"primary"},on:{click:function(t){return e.store()}}},[e._v("Save")]),e._v(" "),a("CButton",{attrs:{color:"primary"},on:{click:e.goBack}},[e._v("Back")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);