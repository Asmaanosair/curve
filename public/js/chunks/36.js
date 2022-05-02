(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{511:function(t,n,e){"use strict";e.r(n);var s=e(2),i=e.n(s),r={name:"Users",data:function(){return{items:[],fields:["id","name","registered","roles","status","show","edit","delete"],fieldsAr:["رقم_التسلسل","الأسم","تاريخ_التسجيل","الصلاحيات","الحالة","عرض","تعديل","حذف"],myLang:"",currentPage:1,perPage:5,totalRows:0,you:null,message:"",showMessage:!1,dismissSecs:7,dismissCountDown:0,showDismissibleAlert:!1}},paginationProps:{align:"center",doubleArrows:!1,previousButtonHtml:"prev",nextButtonHtml:"next"},methods:{getArray:function(){localStorage.getItem("locale")},getBadge:function(t){return"Active"===t?"success":"Inactive"===t?"secondary":"Pending"===t?"warning":"Banned"===t?"danger":"primary"},userLink:function(t){return"users/".concat(t.toString())},editLink:function(t){return"users/".concat(t.toString(),"/edit")},showUser:function(t){var n=this.userLink(t);this.$router.push({path:n})},editUser:function(t){var n=this.editLink(t);this.$router.push({path:n})},deleteUser:function(t){var n=this;i.a.post("/api/users/"+t+"?token="+localStorage.getItem("api_token"),{_method:"DELETE"}).then((function(t){n.message="Successfully deleted user.",n.showAlert(),n.getUsers()})).catch((function(t){console.log(t),n.$router.push({path:"/login"})}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},getUsers:function(){var t=this;i.a.get("/api/users?token="+localStorage.getItem("api_token")).then((function(n){t.items=n.data.users,t.you=n.data.you})).catch((function(n){console.log(n),t.$router.push({path:"/login"})}))},getLocale:function(){var t;t=localStorage.getItem("locale")||"en",this.myLang=t}},mounted:function(){this.getUsers(),this.getLocale()}},o=e(1),a=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("CRow",{staticClass:"justify-content-center"},[e("CCol",{attrs:{col:"12",xl:"8"}},[e("transition",{attrs:{name:"slide"}},["en"==t.myLang?e("CCard",[e("CCardHeader",[t._v(" "+t._s(t.$t("users"))+" ")]),t._v(" "),e("CCardBody",[e("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(n){t.dismissCountDown=n}}},[t._v("\n            ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+"\n          ")]),t._v(" "),e("CDataTable",{attrs:{items:t.items,fields:t.fields,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"id",fn:function(n){var s=n.item;return[e("td",[t._v("\n                "+t._s(s.id)+"\n              ")])]}},{key:"name",fn:function(n){var s=n.item;return[e("td",[t._v("\n                "+t._s(s.name)+"\n              ")])]}},{key:"registered",fn:function(n){var s=n.item;return[e("td",[t._v("\n                "+t._s(s.registered)+"\n              ")])]}},{key:"roles",fn:function(n){var s=n.item;return[e("td",[t._v("\n                "+t._s(s.roles)+"\n              ")])]}},{key:"status",fn:function(n){var s=n.item;return[e("td",[e("CBadge",{attrs:{color:t.getBadge(s.status)}},[t._v(t._s(s.status))])],1)]}},{key:"show",fn:function(n){var s=n.item;return[e("td",[e("CButton",{staticClass:"my-btn",on:{click:function(n){return t.showUser(s.id)}}},[e("img",{staticClass:"control-img",attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKcHbnEx0bIoJmfthMQ2Jnc97Uz-qjLGOjSg&usqp=CAU",alt:""}})])],1)]}},{key:"edit",fn:function(n){var s=n.item;return[e("td",[e("CButton",{staticClass:"my-btn",on:{click:function(n){return t.editUser(s.id)}}},[e("img",{staticClass:"control-img",attrs:{src:"https://www.pinclipart.com/picdir/big/164-1646319_ewsully-com-img-activities-icons-edit-icon-png.png",alt:""}})])],1)]}},{key:"delete",fn:function(n){var s=n.item;return[e("td",[t.you!=s.id?e("CButton",{staticClass:"my-btn",on:{click:function(n){return t.deleteUser(s.id)}}},[e("img",{staticClass:"control-img",attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGp9jrAF7I5Wc0eAcIu6BS8_620EiL9Dd8Xg&usqp=CAU",alt:""}})]):t._e()],1)]}}],null,!1,3110897803)})],1)],1):e("CCard",{staticClass:"style-ar"},[e("CCardHeader",[t._v(" "+t._s(t.$t("users"))+" ")]),t._v(" "),e("CCardBody",[e("CAlert",{attrs:{show:t.dismissCountDown,color:"primary",fade:""},on:{"update:show":function(n){t.dismissCountDown=n}}},[t._v("\n            ("+t._s(t.dismissCountDown)+") "+t._s(t.message)+"\n          ")]),t._v(" "),e("CDataTable",{attrs:{items:t.items,fields:t.fieldsAr,"items-per-page":10,pagination:""},scopedSlots:t._u([{key:"رقم_التسلسل",fn:function(n){var s=n.item;return[e("td",[t._v("\n                "+t._s(s.id)+"\n              ")])]}},{key:"الأسم",fn:function(n){var s=n.item;return[e("td",[t._v("\n                "+t._s(s.name)+"\n              ")])]}},{key:"تاريخ_التسجيل",fn:function(n){var s=n.item;return[e("td",[t._v("\n                "+t._s(s.registered)+"\n              ")])]}},{key:"الصلاحيات",fn:function(n){var s=n.item;return[e("td",[t._v("\n                "+t._s(s.roles)+"\n              ")])]}},{key:"الحالة",fn:function(n){var s=n.item;return[e("td",[e("CBadge",{attrs:{color:t.getBadge(s.status)}},[t._v(t._s(s.status))])],1)]}},{key:"عرض",fn:function(n){var s=n.item;return[e("td",[e("CButton",{staticClass:"my-btn",on:{click:function(n){return t.showUser(s.id)}}},[e("img",{staticClass:"control-img",attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKcHbnEx0bIoJmfthMQ2Jnc97Uz-qjLGOjSg&usqp=CAU",alt:""}})])],1)]}},{key:"تعديل",fn:function(n){var s=n.item;return[e("td",[e("CButton",{staticClass:"my-btn",on:{click:function(n){return t.editUser(s.id)}}},[e("img",{staticClass:"control-img",attrs:{src:"https://www.pinclipart.com/picdir/big/164-1646319_ewsully-com-img-activities-icons-edit-icon-png.png",alt:""}})])],1)]}},{key:"حذف",fn:function(n){var s=n.item;return[e("td",[t.you!=s.id?e("CButton",{staticClass:"my-btn",on:{click:function(n){return t.deleteUser(s.id)}}},[e("img",{staticClass:"control-img",attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGp9jrAF7I5Wc0eAcIu6BS8_620EiL9Dd8Xg&usqp=CAU",alt:""}})]):t._e()],1)]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=a.exports}}]);