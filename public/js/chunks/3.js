(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{496:function(t,e,n){"use strict";var i=n(3),o=function(t){var e={};for(var n in t){var i=t[n];null!=i&&(e[n]=i)}return e};function r(t,e,n,i,o,r,s,a,c,p){"boolean"!=typeof s&&(c=a,a=s,s=!1);var u,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),i&&(l._scopeId=i),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=u):e&&(u=s?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),u)if(l.functional){var d=l.render;l.render=function(t,e){return u.call(e),d(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,u):[u]}return n}var s=r({render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"LIcon",props:{iconUrl:{type:String,custom:!0,default:null},iconRetinaUrl:{type:String,custom:!0,default:null},iconSize:{type:[Object,Array],custom:!0,default:null},iconAnchor:{type:[Object,Array],custom:!0,default:null},popupAnchor:{type:[Object,Array],custom:!0,default:function(){return[0,0]}},tooltipAnchor:{type:[Object,Array],custom:!0,default:function(){return[0,0]}},shadowUrl:{type:String,custom:!0,default:null},shadowRetinaUrl:{type:String,custom:!0,default:null},shadowSize:{type:[Object,Array],custom:!0,default:null},shadowAnchor:{type:[Object,Array],custom:!0,default:null},bgPos:{type:[Object,Array],custom:!0,default:function(){return[0,0]}},className:{type:String,custom:!0,default:""},options:{type:Object,custom:!0,default:function(){return{}}}},data:function(){return{parentContainer:null,observer:null,recreationNeeded:!1,swapHtmlNeeded:!1}},mounted:function(){var t=this;this.parentContainer=function(t){for(var e=!1;t&&!e;)void 0===t.mapObject?t=t.$parent:e=!0;return t}(this.$parent),function(t,e,n,o){var r=function(o){var r,s="set"+((r=o)&&"function"==typeof r.charAt?r.charAt(0).toUpperCase()+r.slice(1):r),a=n[o].type===Object||n[o].type===Array||Array.isArray(n[o].type);n[o].custom&&t[s]?t.$watch(o,(function(e,n){t[s](e,n)}),{deep:a}):"setOptions"===s?t.$watch(o,(function(t,n){Object(i.setOptions)(e,t)}),{deep:a}):e[s]&&t.$watch(o,(function(t,n){e[s](t)}),{deep:a})};for(var s in n)r(s)}(this,this.$parent.mapObject,this.$options.props),this.observer=new MutationObserver((function(){t.scheduleHtmlSwap()})),this.observer.observe(this.$el,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),this.scheduleCreateIcon()},beforeDestroy:function(){this.parentContainer.mapObject&&this.parentContainer.mapObject.setIcon(this.parentContainer.$props.icon),this.observer.disconnect()},methods:{scheduleCreateIcon:function(){this.recreationNeeded=!0,this.$nextTick(this.createIcon)},scheduleHtmlSwap:function(){this.htmlSwapNeeded=!0,this.$nextTick(this.createIcon)},createIcon:function(){if(this.htmlSwapNeeded&&!this.recreationNeeded&&this.iconObject&&this.parentContainer.mapObject.getElement())return this.parentContainer.mapObject.getElement().innerHTML=this.$el.innerHTML,void(this.htmlSwapNeeded=!1);if(this.recreationNeeded){this.iconObject&&i.DomEvent.off(this.iconObject,this.$listeners);var t=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var i=o(n);t=o(t);var r=e.$options.props;for(var s in t){var a=r[s]?r[s].default&&"function"==typeof r[s].default?r[s].default.call():r[s].default:Symbol("unique"),c=!1;c=Array.isArray(a)?JSON.stringify(a)===JSON.stringify(t[s]):a===t[s],i[s]&&!c?(console.warn(s+" props is overriding the value passed in the options props"),i[s]=t[s]):i[s]||(i[s]=t[s])}return i}({iconUrl:this.iconUrl,iconRetinaUrl:this.iconRetinaUrl,iconSize:this.iconSize,iconAnchor:this.iconAnchor,popupAnchor:this.popupAnchor,tooltipAnchor:this.tooltipAnchor,shadowUrl:this.shadowUrl,shadowRetinaUrl:this.shadowRetinaUrl,shadowSize:this.shadowSize,shadowAnchor:this.shadowAnchor,bgPos:this.bgPos,className:this.className,html:this.$el.innerHTML||this.html},this);t.html?this.iconObject=Object(i.divIcon)(t):this.iconObject=Object(i.icon)(t),i.DomEvent.on(this.iconObject,this.$listeners),this.parentContainer.mapObject.setIcon(this.iconObject),this.recreationNeeded=!1,this.htmlSwapNeeded=!1}},setIconUrl:function(){this.scheduleCreateIcon()},setIconRetinaUrl:function(){this.scheduleCreateIcon()},setIconSize:function(){this.scheduleCreateIcon()},setIconAnchor:function(){this.scheduleCreateIcon()},setPopupAnchor:function(){this.scheduleCreateIcon()},setTooltipAnchor:function(){this.scheduleCreateIcon()},setShadowUrl:function(){this.scheduleCreateIcon()},setShadowRetinaUrl:function(){this.scheduleCreateIcon()},setShadowAnchor:function(){this.scheduleCreateIcon()},setBgPos:function(){this.scheduleCreateIcon()},setClassName:function(){this.scheduleCreateIcon()},setHtml:function(){this.scheduleCreateIcon()}},render:function(){return null}},void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=s},497:function(t,e,n){"use strict";var i=n(3),o=function(t){var e={};for(var n in t){var i=t[n];null!=i&&(e[n]=i)}return e};function r(t,e,n,i,o,r,s,a,c,p){"boolean"!=typeof s&&(c=a,a=s,s=!1);var u,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),i&&(l._scopeId=i),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=u):e&&(u=s?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),u)if(l.functional){var d=l.render;l.render=function(t,e){return u.call(e),d(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,u):[u]}return n}var s=r({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{display:"none"}},[this.ready?this._t("default"):this._e()],2)},staticRenderFns:[]},void 0,{name:"LPolyline",mixins:[{mixins:[{mixins:[{props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null,custom:!0},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){this.$parent.mapObject.attributionControl.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}},{props:{interactive:{type:Boolean,default:!0},bubblingMouseEvents:{type:Boolean,default:!0}},mounted:function(){this.interactiveLayerOptions={interactive:this.interactive,bubblingMouseEvents:this.bubblingMouseEvents}}}],props:{lStyle:{type:Object,custom:!0,default:null},stroke:{type:Boolean,custom:!0,default:!0},color:{type:String,custom:!0,default:"#3388ff"},weight:{type:Number,custom:!0,default:3},opacity:{type:Number,custom:!0,default:1},lineCap:{type:String,custom:!0,default:"round"},lineJoin:{type:String,custom:!0,default:"round"},dashArray:{type:String,custom:!0,default:null},dashOffset:{type:String,custom:!0,default:null},fill:{type:Boolean,custom:!0,default:!1},fillColor:{type:String,custom:!0,default:"#3388ff"},fillOpacity:{type:Number,custom:!0,default:.2},fillRule:{type:String,custom:!0,default:"evenodd"},className:{type:String,custom:!0,default:null}},mounted:function(){if(this.pathOptions=Object.assign({},this.layerOptions,this.interactiveLayerOptions,{stroke:this.stroke,color:this.color,weight:this.weight,opacity:this.opacity,lineCap:this.lineCap,lineJoin:this.lineJoin,dashArray:this.dashArray,dashOffset:this.dashOffset,fill:this.fill,fillColor:this.fillColor,fillOpacity:this.fillOpacity,fillRule:this.fillRule,className:this.className}),this.lStyle)for(var t in console.warn("lStyle is deprecated and is going to be removed in the next major version"),this.lStyle)this.pathOptions[t]=this.lStyle[t]},beforeDestroy:function(){this.parentContainer?this.parentContainer.removeLayer(this):console.error("Missing parent container")},methods:{setLStyle:function(t){this.mapObject.setStyle(t)},setStroke:function(t){this.mapObject.setStyle({stroke:t})},setColor:function(t){this.mapObject.setStyle({color:t})},setWeight:function(t){this.mapObject.setStyle({weight:t})},setOpacity:function(t){this.mapObject.setStyle({opacity:t})},setLineCap:function(t){this.mapObject.setStyle({lineCap:t})},setLineJoin:function(t){this.mapObject.setStyle({lineJoin:t})},setDashArray:function(t){this.mapObject.setStyle({dashArray:t})},setDashOffset:function(t){this.mapObject.setStyle({dashOffset:t})},setFill:function(t){this.mapObject.setStyle({fill:t})},setFillColor:function(t){this.mapObject.setStyle({fillColor:t})},setFillOpacity:function(t){this.mapObject.setStyle({fillOpacity:t})},setFillRule:function(t){this.mapObject.setStyle({fillRule:t})},setClassName:function(t){this.mapObject.setStyle({className:t})}}}],props:{smoothFactor:{type:Number,custom:!0,default:1},noClip:{type:Boolean,custom:!0,default:!1}},data:function(){return{ready:!1}},mounted:function(){this.polyLineOptions=Object.assign({},this.pathOptions,{smoothFactor:this.smoothFactor,noClip:this.noClip})},methods:{setSmoothFactor:function(t){this.mapObject.setStyle({smoothFactor:t})},setNoClip:function(t){this.mapObject.setStyle({noClip:t})},addLatLng:function(t){this.mapObject.addLatLng(t)}}},{props:{options:{type:Object,default:function(){return{}}}}}],props:{latLngs:{type:Array,default:function(){return[]}}},data:function(){return{ready:!1}},mounted:function(){var t=this,e=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var i=o(n);t=o(t);var r=e.$options.props;for(var s in t){var a=r[s]?r[s].default&&"function"==typeof r[s].default?r[s].default.call():r[s].default:Symbol("unique"),c=!1;c=Array.isArray(a)?JSON.stringify(a)===JSON.stringify(t[s]):a===t[s],i[s]&&!c?(console.warn(s+" props is overriding the value passed in the options props"),i[s]=t[s]):i[s]||(i[s]=t[s])}return i}(this.polyLineOptions,this);this.mapObject=Object(i.polyline)(this.latLngs,e),i.DomEvent.on(this.mapObject,this.$listeners),function(t,e,n,o){var r=function(o){var r,s="set"+((r=o)&&"function"==typeof r.charAt?r.charAt(0).toUpperCase()+r.slice(1):r),a=n[o].type===Object||n[o].type===Array||Array.isArray(n[o].type);n[o].custom&&t[s]?t.$watch(o,(function(e,n){t[s](e,n)}),{deep:a}):"setOptions"===s?t.$watch(o,(function(t,n){Object(i.setOptions)(e,t)}),{deep:a}):e[s]&&t.$watch(o,(function(t,n){e[s](t)}),{deep:a})};for(var s in n)r(s)}(this,this.mapObject,this.$options.props),this.ready=!0,this.parentContainer=function(t){for(var e=!1;t&&!e;)void 0===t.mapObject?t=t.$parent:e=!0;return t}(this.$parent),this.parentContainer.addLayer(this,!this.visible),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))}},void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=s},498:function(t,e,n){"use strict";var i=n(3);function o(t,e,n,i,o,r,s,a,c,p){"boolean"!=typeof s&&(c=a,a=s,s=!1);var u,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),i&&(l._scopeId=i),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=u):e&&(u=s?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),u)if(l.functional){var d=l.render;l.render=function(t,e){return u.call(e),d(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,u):[u]}return n}var r=o({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{display:"none"}},[this.ready?this._t("default"):this._e()],2)},staticRenderFns:[]},void 0,{name:"LLayerGroup",mixins:[{mixins:[{props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null,custom:!0},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){this.$parent.mapObject.attributionControl.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}}],mounted:function(){this.layerGroupOptions=this.layerOptions},methods:{addLayer:function(t,e){e||this.mapObject.addLayer(t.mapObject),this.parentContainer.addLayer(t,!0)},removeLayer:function(t,e){e||this.mapObject.removeLayer(t.mapObject),this.parentContainer.removeLayer(t,!0)}}},{props:{options:{type:Object,default:function(){return{}}}}}],data:function(){return{ready:!1}},mounted:function(){var t=this;this.mapObject=Object(i.layerGroup)(),function(t,e,n,o){var r=function(o){var r,s="set"+((r=o)&&"function"==typeof r.charAt?r.charAt(0).toUpperCase()+r.slice(1):r),a=n[o].type===Object||n[o].type===Array||Array.isArray(n[o].type);n[o].custom&&t[s]?t.$watch(o,(function(e,n){t[s](e,n)}),{deep:a}):"setOptions"===s?t.$watch(o,(function(t,n){Object(i.setOptions)(e,t)}),{deep:a}):e[s]&&t.$watch(o,(function(t,n){e[s](t)}),{deep:a})};for(var s in n)r(s)}(this,this.mapObject,this.$options.props),i.DomEvent.on(this.mapObject,this.$listeners),this.ready=!0,this.parentContainer=function(t){for(var e=!1;t&&!e;)void 0===t.mapObject?t=t.$parent:e=!0;return t}(this.$parent),this.visible&&this.parentContainer.addLayer(this),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))}},void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=r},499:function(t,e,n){"use strict";var i=n(3),o=function(t){var e={};for(var n in t){var i=t[n];null!=i&&(e[n]=i)}return e};function r(t,e,n,i,o,r,s,a,c,p){"boolean"!=typeof s&&(c=a,a=s,s=!1);var u,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),i&&(l._scopeId=i),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=u):e&&(u=s?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),u)if(l.functional){var d=l.render;l.render=function(t,e){return u.call(e),d(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,u):[u]}return n}var s=r({},void 0,{name:"LControlZoom",mixins:[{props:{position:{type:String,default:"topright"}},mounted:function(){this.controlOptions={position:this.position}},beforeDestroy:function(){this.mapObject&&this.mapObject.remove()}},{props:{options:{type:Object,default:function(){return{}}}}}],props:{zoomInText:{type:String,default:"+"},zoomInTitle:{type:String,default:"Zoom in"},zoomOutText:{type:String,default:"-"},zoomOutTitle:{type:String,default:"Zoom out"}},mounted:function(){var t=this,e=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var i=o(n);t=o(t);var r=e.$options.props;for(var s in t){var a=r[s]?r[s].default&&"function"==typeof r[s].default?r[s].default.call():r[s].default:Symbol("unique"),c=!1;c=Array.isArray(a)?JSON.stringify(a)===JSON.stringify(t[s]):a===t[s],i[s]&&!c?(console.warn(s+" props is overriding the value passed in the options props"),i[s]=t[s]):i[s]||(i[s]=t[s])}return i}(Object.assign({},this.controlOptions,{zoomInText:this.zoomInText,zoomInTitle:this.zoomInTitle,zoomOutText:this.zoomOutText,zoomOutTitle:this.zoomOutTitle}),this);this.mapObject=i.control.zoom(e),function(t,e,n,o){var r=function(o){var r,s="set"+((r=o)&&"function"==typeof r.charAt?r.charAt(0).toUpperCase()+r.slice(1):r),a=n[o].type===Object||n[o].type===Array||Array.isArray(n[o].type);n[o].custom&&t[s]?t.$watch(o,(function(e,n){t[s](e,n)}),{deep:a}):"setOptions"===s?t.$watch(o,(function(t,n){Object(i.setOptions)(e,t)}),{deep:a}):e[s]&&t.$watch(o,(function(t,n){e[s](t)}),{deep:a})};for(var s in n)r(s)}(this,this.mapObject,this.$options.props),this.mapObject.addTo(this.$parent.mapObject),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},render:function(){return null}},void 0,void 0,void 0,!1,void 0,void 0,void 0);e.a=s},500:function(t,e,n){"use strict";var i=n(3),o=function(t){var e={};for(var n in t){var i=t[n];null!=i&&(e[n]=i)}return e};function r(t,e,n,i,o,r,s,a,c,p){"boolean"!=typeof s&&(c=a,a=s,s=!1);var u,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),i&&(l._scopeId=i),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=u):e&&(u=s?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),u)if(l.functional){var d=l.render;l.render=function(t,e){return u.call(e),d(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,u):[u]}return n}var s=r({},void 0,{name:"LControlAttribution",mixins:[{props:{position:{type:String,default:"topright"}},mounted:function(){this.controlOptions={position:this.position}},beforeDestroy:function(){this.mapObject&&this.mapObject.remove()}},{props:{options:{type:Object,default:function(){return{}}}}}],props:{prefix:{type:[String,Boolean],default:null}},mounted:function(){var t=this,e=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var i=o(n);t=o(t);var r=e.$options.props;for(var s in t){var a=r[s]?r[s].default&&"function"==typeof r[s].default?r[s].default.call():r[s].default:Symbol("unique"),c=!1;c=Array.isArray(a)?JSON.stringify(a)===JSON.stringify(t[s]):a===t[s],i[s]&&!c?(console.warn(s+" props is overriding the value passed in the options props"),i[s]=t[s]):i[s]||(i[s]=t[s])}return i}(Object.assign({},this.controlOptions,{prefix:this.prefix}),this);this.mapObject=i.control.attribution(e),function(t,e,n,o){var r=function(o){var r,s="set"+((r=o)&&"function"==typeof r.charAt?r.charAt(0).toUpperCase()+r.slice(1):r),a=n[o].type===Object||n[o].type===Array||Array.isArray(n[o].type);n[o].custom&&t[s]?t.$watch(o,(function(e,n){t[s](e,n)}),{deep:a}):"setOptions"===s?t.$watch(o,(function(t,n){Object(i.setOptions)(e,t)}),{deep:a}):e[s]&&t.$watch(o,(function(t,n){e[s](t)}),{deep:a})};for(var s in n)r(s)}(this,this.mapObject,this.$options.props),this.mapObject.addTo(this.$parent.mapObject),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},render:function(){return null}},void 0,void 0,void 0,!1,void 0,void 0,void 0);e.a=s},501:function(t,e,n){"use strict";var i=n(3),o=function(t){var e={};for(var n in t){var i=t[n];null!=i&&(e[n]=i)}return e};function r(t,e,n,i,o,r,s,a,c,p){"boolean"!=typeof s&&(c=a,a=s,s=!1);var u,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),i&&(l._scopeId=i),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=u):e&&(u=s?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),u)if(l.functional){var d=l.render;l.render=function(t,e){return u.call(e),d(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,u):[u]}return n}var s=r({},void 0,{name:"LControlScale",mixins:[{props:{position:{type:String,default:"topright"}},mounted:function(){this.controlOptions={position:this.position}},beforeDestroy:function(){this.mapObject&&this.mapObject.remove()}},{props:{options:{type:Object,default:function(){return{}}}}}],props:{maxWidth:{type:Number,default:100},metric:{type:Boolean,default:!0},imperial:{type:Boolean,default:!0},updateWhenIdle:{type:Boolean,default:!1}},mounted:function(){var t=this,e=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var i=o(n);t=o(t);var r=e.$options.props;for(var s in t){var a=r[s]?r[s].default&&"function"==typeof r[s].default?r[s].default.call():r[s].default:Symbol("unique"),c=!1;c=Array.isArray(a)?JSON.stringify(a)===JSON.stringify(t[s]):a===t[s],i[s]&&!c?(console.warn(s+" props is overriding the value passed in the options props"),i[s]=t[s]):i[s]||(i[s]=t[s])}return i}(Object.assign({},this.controlOptions,{maxWidth:this.maxWidth,metric:this.metric,imperial:this.imperial,updateWhenIdle:this.updateWhenIdle}),this);this.mapObject=i.control.scale(e),function(t,e,n,o){var r=function(o){var r,s="set"+((r=o)&&"function"==typeof r.charAt?r.charAt(0).toUpperCase()+r.slice(1):r),a=n[o].type===Object||n[o].type===Array||Array.isArray(n[o].type);n[o].custom&&t[s]?t.$watch(o,(function(e,n){t[s](e,n)}),{deep:a}):"setOptions"===s?t.$watch(o,(function(t,n){Object(i.setOptions)(e,t)}),{deep:a}):e[s]&&t.$watch(o,(function(t,n){e[s](t)}),{deep:a})};for(var s in n)r(s)}(this,this.mapObject,this.$options.props),this.mapObject.addTo(this.$parent.mapObject),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},render:function(){return null}},void 0,void 0,void 0,!1,void 0,void 0,void 0);e.a=s},502:function(t,e,n){"use strict";var i=n(3),o=function(t){var e={};for(var n in t){var i=t[n];null!=i&&(e[n]=i)}return e};function r(t,e,n,i,o,r,s,a,c,p){"boolean"!=typeof s&&(c=a,a=s,s=!1);var u,l="function"==typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),i&&(l._scopeId=i),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=u):e&&(u=s?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),u)if(l.functional){var d=l.render;l.render=function(t,e){return u.call(e),d(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,u):[u]}return n}var s=r({},void 0,{name:"LControlLayers",mixins:[{props:{position:{type:String,default:"topright"}},mounted:function(){this.controlOptions={position:this.position}},beforeDestroy:function(){this.mapObject&&this.mapObject.remove()}},{props:{options:{type:Object,default:function(){return{}}}}}],props:{collapsed:{type:Boolean,default:!0},autoZIndex:{type:Boolean,default:!0},hideSingleBase:{type:Boolean,default:!1},sortLayers:{type:Boolean,default:!1},sortFunction:{type:Function,default:void 0}},mounted:function(){var t=this,e=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var i=o(n);t=o(t);var r=e.$options.props;for(var s in t){var a=r[s]?r[s].default&&"function"==typeof r[s].default?r[s].default.call():r[s].default:Symbol("unique"),c=!1;c=Array.isArray(a)?JSON.stringify(a)===JSON.stringify(t[s]):a===t[s],i[s]&&!c?(console.warn(s+" props is overriding the value passed in the options props"),i[s]=t[s]):i[s]||(i[s]=t[s])}return i}(Object.assign({},this.controlOptions,{collapsed:this.collapsed,autoZIndex:this.autoZIndex,hideSingleBase:this.hideSingleBase,sortLayers:this.sortLayers,sortFunction:this.sortFunction}),this);this.mapObject=i.control.layers(null,null,e),function(t,e,n,o){var r=function(o){var r,s="set"+((r=o)&&"function"==typeof r.charAt?r.charAt(0).toUpperCase()+r.slice(1):r),a=n[o].type===Object||n[o].type===Array||Array.isArray(n[o].type);n[o].custom&&t[s]?t.$watch(o,(function(e,n){t[s](e,n)}),{deep:a}):"setOptions"===s?t.$watch(o,(function(t,n){Object(i.setOptions)(e,t)}),{deep:a}):e[s]&&t.$watch(o,(function(t,n){e[s](t)}),{deep:a})};for(var s in n)r(s)}(this,this.mapObject,this.$options.props),this.$parent.registerLayerControl(this),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},methods:{addLayer:function(t){"base"===t.layerType?this.mapObject.addBaseLayer(t.mapObject,t.name):"overlay"===t.layerType&&this.mapObject.addOverlay(t.mapObject,t.name)},removeLayer:function(t){this.mapObject.removeLayer(t.mapObject)}},render:function(){return null}},void 0,void 0,void 0,!1,void 0,void 0,void 0);e.a=s}}]);