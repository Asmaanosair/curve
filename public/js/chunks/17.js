(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{122:function(t,e,a){var r=a(199);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(17)(r,o);r.locals&&(t.exports=r.locals)},198:function(t,e,a){"use strict";a(122)},199:function(t,e,a){(t.exports=a(16)(!1)).push([t.i,"\n.c-chart-brand[data-v-135097ea] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100px;\n}\r\n",""])},503:function(t,e,a){"use strict";a.r(e);var r=a(15),o=a(138),n=a(488);function s(t,e){return Math.floor(Math.random()*(e-t+1)+t)}var i={name:"MainChartExample",components:{CChartLine:r.CChartLine},computed:{defaultDatasets:function(){for(var t=Object(o.a)("success")||"#4dbd74",e=Object(o.a)("info")||"#20a8d8",a=Object(o.a)("danger")||"#f86c6b",r=[],i=[],l=[],c=0;c<=27;c++)r.push(s(50,200)),i.push(s(80,100)),l.push(65);return[{label:"My First dataset",backgroundColor:Object(n.a)(e,10),borderColor:e,pointHoverBackgroundColor:e,borderWidth:2,data:r},{label:"My Second dataset",backgroundColor:"transparent",borderColor:t,pointHoverBackgroundColor:t,borderWidth:2,data:i},{label:"My Third dataset",backgroundColor:"transparent",borderColor:a,pointHoverBackgroundColor:a,borderWidth:1,borderDash:[8,5],data:l}]},defaultOptions:function(){return{maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{drawOnChartArea:!1}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250},gridLines:{display:!0}}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}}}}},l=a(1),c=Object(l.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("CChartLine",{attrs:{datasets:this.defaultDatasets,options:this.defaultOptions,labels:["Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su"]}})}),[],!1,null,null,null).exports,d=a(489),u=a(490);function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){C(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function C(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var g={name:"CChartLineSimple",components:{CChartLine:r.CChartLine},props:p(p({},r.CChartLine.props),{},{borderColor:{type:String,default:"rgba(255,255,255,.55)"},backgroundColor:{type:String,default:"transparent"},dataPoints:{type:Array,default:function(){return[10,22,34,46,58,70,46,23,45,78,34,12]}},label:{type:String,default:"Sales"},pointed:Boolean,pointHoverBackgroundColor:String}),computed:{pointHoverColor:function(){return this.pointHoverBackgroundColor?this.pointHoverBackgroundColor:"transparent"!==this.backgroundColor?this.backgroundColor:this.borderColor},defaultDatasets:function(){return[{data:this.dataPoints,borderColor:Object(d.a)(this.borderColor),backgroundColor:Object(d.a)(this.backgroundColor),pointBackgroundColor:Object(d.a)(this.pointHoverColor),pointHoverBackgroundColor:Object(d.a)(this.pointHoverColor),label:this.label}]},pointedOptions:function(){return{scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,this.dataPoints)-5,max:Math.max.apply(Math,this.dataPoints)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}},straightOptions:function(){return{scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}}},defaultOptions:function(){var t=this.pointed?this.pointedOptions:this.straightOptions;return Object.assign({},t,{maintainAspectRatio:!1,legend:{display:!1}})},computedDatasets:function(){return Object(u.a)(this.defaultDatasets,this.datasets||{})},computedOptions:function(){return Object(u.a)(this.defaultOptions,this.options||{})}}},b=Object(l.a)(g,(function(){var t=this.$createElement;return(this._self._c||t)("CChartLine",{attrs:{datasets:this.computedDatasets,options:this.computedOptions,labels:this.labels}})}),[],!1,null,null,null).exports;function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){v(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function v(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var y={name:"CChartBarSimple",components:{CChartBar:r.CChartBar},props:m(m({},r.CChartBar.props),{},{backgroundColor:{type:String,default:"rgba(0,0,0,.2)"},pointHoverBackgroundColor:String,dataPoints:{type:Array,default:function(){return[10,22,34,46,58,70,46,23,45,78,34,12]}},label:{type:String,default:"Sales"},pointed:Boolean}),computed:{defaultDatasets:function(){return[{data:this.dataPoints,backgroundColor:Object(d.a)(this.backgroundColor),pointHoverBackgroundColor:Object(d.a)(this.pointHoverBackgroundColor),label:this.label,barPercentage:.5,categoryPercentage:1}]},defaultOptions:function(){return{maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}}},computedDatasets:function(){return Object(u.a)(this.defaultDatasets,this.datasets||{})},computedOptions:function(){return Object(u.a)(this.defaultOptions,this.options||{})}}},O=Object(l.a)(y,(function(){var t=this.$createElement;return(this._self._c||t)("CChartBar",{attrs:{datasets:this.computedDatasets,options:this.computedOptions,labels:this.labels}})}),[],!1,null,null,null).exports,k={name:"CChartLineExample",components:{CChartLine:r.CChartLine},computed:{defaultDatasets:function(){return[{label:"Data One",backgroundColor:"rgb(228,102,81,0.9)",data:[30,39,10,50,30,70,35]},{label:"Data Two",backgroundColor:"rgb(0,216,255,0.9)",data:[39,80,40,35,40,20,45]}]}}},D=(Object(l.a)(k,(function(){var t=this.$createElement;return(this._self._c||t)("CChartLine",{attrs:{datasets:this.defaultDatasets,labels:"months"}})}),[],!1,null,null,null).exports,{name:"CChartBarExample",components:{CChartBar:r.CChartBar},computed:{defaultDatasets:function(){return[{label:"GitHub Commits",backgroundColor:"#f87979",data:[40,20,12,39,10,40,39,80,40,20,12,11]}]}}}),_=(Object(l.a)(D,(function(){var t=this.$createElement;return(this._self._c||t)("CChartBar",{attrs:{datasets:this.defaultDatasets,labels:"months"}})}),[],!1,null,null,null).exports,{name:"CChartDoughnutExample",components:{CChartDoughnut:r.CChartDoughnut},computed:{defaultDatasets:function(){return[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]}}}),w=(Object(l.a)(_,(function(){var t=this.$createElement;return(this._self._c||t)("CChartDoughnut",{attrs:{datasets:this.defaultDatasets,labels:["VueJs","EmberJs","ReactJs","AngularJs"]}})}),[],!1,null,null,null).exports,{name:"CChartRadarExample",components:{CChartRadar:r.CChartRadar},computed:{defaultDatasets:function(){return[{label:"2019",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",tooltipLabelColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"2020",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",tooltipLabelColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},defaultOptions:function(){return{aspectRatio:1.5}}}}),B=(Object(l.a)(w,(function(){var t=this.$createElement;return(this._self._c||t)("CChartRadar",{attrs:{datasets:this.defaultDatasets,options:this.defaultOptions,labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"]}})}),[],!1,null,null,null).exports,{name:"CChartPieExample",components:{CChartPie:r.CChartPie},computed:{defaultDatasets:function(){return[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]}}}),x=(Object(l.a)(B,(function(){var t=this.$createElement;return(this._self._c||t)("CChartPie",{attrs:{datasets:this.defaultDatasets,labels:["VueJs","EmberJs","ReactJs","AngularJs"]}})}),[],!1,null,null,null).exports,{name:"CChartPolarAreaExample",components:{CChartPolarArea:r.CChartPolarArea},computed:{defaultDatasets:function(){return[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"rgba(179,181,198,1)",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"rgba(255,99,132,1)",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},defaultOptions:function(){return{aspectRatio:1.5}}}}),j=(Object(l.a)(x,(function(){var t=this.$createElement;return(this._self._c||t)("CChartPolarArea",{attrs:{datasets:this.defaultDatasets,options:this.defaultOptions,labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"]}})}),[],!1,null,null,null).exports,{name:"WidgetsDropdown",components:{CChartLineSimple:b,CChartBarSimple:O}}),S=Object(l.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("CRow",[e("CCol",{attrs:{sm:"6",lg:"3"}},[e("CWidgetDropdown",{attrs:{color:"success",header:"onlineCount",text:this.$i18n.translate("dashboard.drivers_online")}})],1),this._v(" "),e("CCol",{attrs:{sm:"6",lg:"3"}},[e("CWidgetDropdown",{attrs:{color:"secondary",header:"7.200",text:this.$i18n.translate("dashboard.drivers-offilne")}})],1),this._v(" "),e("CCol",{attrs:{sm:"6",lg:"3"}},[e("CWidgetDropdown",{attrs:{color:"primary",header:"10.000",text:this.$i18n.translate("dashboard.all-drivers")}})],1)],1)}),[],!1,null,null,null).exports,P={name:"WidgetsBrand",components:{CChartLineSimple:b},props:{noCharts:Boolean}},E=(a(198),{name:"Dashboard",components:{MainChartExample:c,WidgetsDropdown:S,WidgetsBrand:Object(l.a)(P,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("CRow",[t.noCharts?[a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"facebook","right-header":"89k","right-footer":"friends","left-header":"459","left-footer":"feeds"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-facebook",height:"56"}})],1)],1),t._v(" "),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"twitter","right-header":"973k","right-footer":"followers","left-header":"1.792","left-footer":"tweets"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-twitter",height:"56"}})],1)],1),t._v(" "),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"linkedin","right-header":"500+","right-footer":"contracts","left-header":"292","left-footer":"feeds"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-linkedin",height:"56"}})],1)],1),t._v(" "),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{"right-header":"12","right-footer":"events","left-header":"4","left-footer":"meetings",color:"gradient-warning"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cil-calendar",height:"56"}})],1)],1)]:[a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"facebook","right-header":"89k","right-footer":"friends","left-header":"459","left-footer":"feeds"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-facebook",height:"52"}}),t._v(" "),a("CChartLineSimple",{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[65,59,84,84,51,55,40],label:"Friends",labels:"months"}})],1)],1),t._v(" "),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"twitter","right-header":"973k","right-footer":"followers","left-header":"1.792","left-footer":"tweets"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-twitter",height:"52"}}),t._v(" "),a("CChartLineSimple",{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[1,13,9,17,34,41,38],label:"Followers",labels:"months"}})],1)],1),t._v(" "),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{color:"linkedin","right-header":"500+","right-footer":"contracts","left-header":"292","left-footer":"feeds"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cib-linkedin",height:"52"}}),t._v(" "),a("CChartLineSimple",{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[78,81,80,45,34,12,40],label:"Contracts",labels:"months"}})],1)],1),t._v(" "),a("CCol",{attrs:{md:"3",sm:"6"}},[a("CWidgetBrand",{attrs:{"right-header":"12","right-footer":"events","left-header":"4","left-footer":"meetings",color:"gradient-warning"}},[a("CIcon",{staticClass:"my-4",attrs:{name:"cil-calendar",height:"52"}}),t._v(" "),a("CChartLineSimple",{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[35,23,56,22,97,23,64],label:"Followers",labels:"months"}})],1)],1)]],2)}),[],!1,null,"135097ea",null).exports},data:function(){return{selected:"Month",loading:!1,onlineDrivers:30,offlineDrivers:0,allDrivers:100,tableItems:[{avatar:{url:"img/avatars/1.jpg",status:"success"},user:{name:"Yiorgos Avraamu",new:!0,registered:"Jan 1, 2015"},country:{name:"USA",flag:"cif-us"},usage:{value:50,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Mastercard",icon:"cib-cc-mastercard"},activity:"10 sec ago"},{avatar:{url:"img/avatars/2.jpg",status:"danger"},user:{name:"Avram Tarasios",new:!1,registered:"Jan 1, 2015"},country:{name:"Brazil",flag:"cif-br"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Visa",icon:"cib-cc-visa"},activity:"5 minutes ago"},{avatar:{url:"img/avatars/3.jpg",status:"warning"},user:{name:"Quintin Ed",new:!0,registered:"Jan 1, 2015"},country:{name:"India",flag:"cif-in"},usage:{value:74,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Stripe",icon:"cib-stripe"},activity:"1 hour ago"},{avatar:{url:"img/avatars/4.jpg",status:""},user:{name:"Enéas Kwadwo",new:!0,registered:"Jan 1, 2015"},country:{name:"France",flag:"cif-fr"},usage:{value:98,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"PayPal",icon:"cib-paypal"},activity:"Last month"},{avatar:{url:"img/avatars/5.jpg",status:"success"},user:{name:"Agapetus Tadeáš",new:!0,registered:"Jan 1, 2015"},country:{name:"Spain",flag:"cif-es"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Google Wallet",icon:"cib-google-pay"},activity:"Last week"},{avatar:{url:"img/avatars/6.jpg",status:"danger"},user:{name:"Friderik Dávid",new:!0,registered:"Jan 1, 2015"},country:{name:"Poland",flag:"cif-pl"},usage:{value:43,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Amex",icon:"cib-cc-amex"},activity:"Last week"}],tableFields:[{key:"avatar",label:"",_classes:"text-center"},{key:"user",label:this.$i18n.translate("dashboard.user")},{key:"country",label:this.$i18n.translate("dashboard.country"),_classes:"text-center"},{key:"usage",label:this.$i18n.translate("dashboard.usage")},{key:"payment",label:this.$i18n.translate("dashboard.payment_method"),_classes:"text-center"},{key:"activity",label:this.$i18n.translate("dashboard.activity")}]}},methods:{color:function(t){var e;return t<=25?e="info":t>25&&t<=50?e="success":t>50&&t<=75?e="warning":t>75&&t<=100&&(e="danger"),e}},getDrivers:function(){this.loading=!0;var t=this;this.items=[],axios.get("/api/drivers?&token="+localStorage.getItem("api_token"),{}).then((function(e){console.log(e),t.onlineDrivers=e.data.onlineDrivers,t.allDrivers=e.data.allDrivers,t.loading=!1})).catch((function(t){console.log(t)}))},mounted:function(){this.getDrivers()}}),W=Object(l.a)(E,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CRow",[a("CCol",{attrs:{sm:"6",lg:"3"}},[a("CWidgetDropdown",{attrs:{color:"success",text:t.$i18n.translate("dashboard.drivers_online")}},[a("CCol",{attrs:{col:"3"}},[a("small",{staticClass:"text-muted"},[t._v("Online")]),a("br"),t._v(" "),a("strong",{staticClass:"h4"},[t._v(t._s(t.onlineDrivers))])])],1)],1),t._v(" "),a("CCol",{attrs:{sm:"6",lg:"3"}},[a("CWidgetDropdown",{attrs:{color:"secondary",text:t.$i18n.translate("dashboard.drivers-offilne")}},[a("CCol",{attrs:{col:"3"}},[a("small",{staticClass:"text-muted"},[t._v("Offline")]),a("br"),t._v(" "),a("strong",{staticClass:"h4"},[t._v(t._s(t.allDrivers-t.onlineDrivers))])])],1)],1),t._v(" "),a("CCol",{attrs:{sm:"6",lg:"3"}},[a("CWidgetDropdown",{attrs:{color:"primary",text:t.$i18n.translate("dashboard.all-drivers")}},[a("CCol",{attrs:{col:"3"}},[a("small",{staticClass:"text-muted"},[t._v("All")]),a("br"),t._v(" "),a("strong",{staticClass:"h4"},[t._v(t._s(t.allDrivers))])])],1)],1)],1),t._v(" "),a("CCard",[a("CCardBody",[a("CRow",[a("CCol",{attrs:{sm:"5"}},[a("h4",{staticClass:"card-title mb-0",attrs:{id:"traffic"}},[t._v(t._s(t.$t("dashboard.Traffic")))]),t._v(" "),a("div",{staticClass:"small text-muted"},[t._v(t._s(t.$t("dashboard.september"))+" 2017")])]),t._v(" "),a("CCol",{staticClass:"d-none d-md-block",attrs:{sm:"7"}},[a("CButton",{staticClass:"float-right",attrs:{color:"primary"}},[a("CIcon",{attrs:{name:"cil-cloud-download"}})],1),t._v(" "),a("CButtonGroup",{staticClass:"float-right mr-3"},t._l([t.$t("dashboard.day"),t.$t("dashboard.month"),t.$t("dashboard.year")],(function(e,r){return a("CButton",{key:r,staticClass:"mx-0",attrs:{color:"outline-secondary",pressed:e===t.selected},on:{click:function(a){t.selected=e}}},[t._v("\n              "+t._s(e)+"\n            ")])})),1)],1)],1),t._v(" "),a("MainChartExample",{staticStyle:{height:"300px","margin-top":"40px"}})],1)],1)],1)}),[],!1,null,null,null);e.default=W.exports}}]);