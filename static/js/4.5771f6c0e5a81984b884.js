webpackJsonp([4],{AsiW:function(t,e){t.exports={navLinkLeft:"_1hyzLaD6ehOEkUN8GoU9si_0",navLinkRight:"_2zkP7PNlNosLWT4zKVxpDy_0"}},Cdx3:function(t,e,n){var o=n("sB3e"),r=n("lktj");n("uqUo")("keys",function(){return function(t){return r(o(t))}})},OJ61:function(t,e){t.exports={navWork:"_2A0GVFdvhlzWzh2mXvTfi__0",navLinkLeft:"C89HHZ2Jh6YCcwoT8tumm_0",navLinkRight:"_3LKNzlOBAe0WhLPr3GOCw8_0",navButtonLeft:"_31yQhLf2w4Kz2Ce53S7JBw_0",navButtonRight:"_2jsZABqOtGYj1S8GoCseno_0"}},SBLI:function(t,e,n){var o={"./mtgDiscovery.png":["7vM5",3],"./myVisto.png":["ZXfu",2],"./primitive.png":["2aTf",1],"./santelena.png":["Ak0g",0]};function r(t){var e=o[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}r.keys=function(){return Object.keys(o)},r.id="SBLI",t.exports=r},YyhM:function(t,e){t.exports={workContainer:"v7Yt7MEG15BmqG-jzZk9Z_0",backgroundImg:"_1EJCooK3kc9DFvys_bG4-l_0",content:"OK_XUwWOBzTHqvFs8YF9m_0",navigation:"_3Jfxeqe3oLCPXfOTDvGw7b_0",row:"mG3WQPC8_0VTwf0PxPTlm_0",rowName:"_1FZhpUplwbFSIyqBUUdkZK_0",workName:"_32SYIMI29sXjlJNjZb5ApX_0",workLink:"VjvoK0YEN8TLBFPO39-iS_0",colImg:"F78vT_1Hlq4lYoshbUh3Q_0",logo:"_3aRQ_sGqcUAJXXw1bDStt_0",colDescr:"_1UfFYBNmu26F5O6ZIiCkmn_0",colTech:"_3Bro5AjHn8ch5tGx5JI-pW_0",singleTech:"MU1VuAu9zZIqGXwus7c19_0",colTitle:"_2Iy2PNjPsTTZA0WqbGiZut_0"}},fZjL:function(t,e,n){t.exports={default:n("jFbC"),__esModule:!0}},jFbC:function(t,e,n){n("Cdx3"),t.exports=n("FeBl").Object.keys},mHHr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("fZjL"),r=n.n(o),s=n("mM6X"),a={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("router-link",{class:[t.isNext?t.$style.navLinkRight:t.$style.navLinkLeft,"app-link"],attrs:{to:"/works/"+t.link}},[t.isNext?[t._v("\n\t\t"+t._s(t.text)+" ››\n\t")]:[t._v("\n\t\t‹‹"+t._s(t.text)+"\n\t")]],2)},staticRenderFns:[]};var i=n("VU/8")({props:{link:{default:""},isNext:{default:!0},text:{default:null}}},a,!1,function(t){this.$style=n("AsiW")},null,null).exports,l={props:{works:{default:[]},work:{default:""}},computed:{prev:function(){return this.works[this.works.indexOf(this.work)-1]||null},next:function(){return this.works[this.works.indexOf(this.work)+1]||null}},components:{"app-nav-work-item":i}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",{class:t.$style.navWork},[n("b-col",{class:t.$style.navLinkLeft,attrs:{cols:"6"}},[t.prev?n("app-nav-work-item",{attrs:{text:"Prev Work",link:t.prev,isNext:!1}}):t._e()],1),t._v(" "),n("b-col",{class:t.$style.navLinkRight,attrs:{cols:"6"}},[t.next?n("app-nav-work-item",{attrs:{text:"Next Work",link:t.next}}):t._e()],1)],1)},staticRenderFns:[]};var u=n("VU/8")(l,c,!1,function(t){this.$style=n("OJ61")},null,null).exports,k={name:"work",data:function(){return{prev:null,next:null,works:s.a,work:{},logo:""}},beforeRouteUpdate:function(t,e,n){s.a[t.params.work]?(this.initWork(this.$route.params.work),n()):n({path:"/notFound"})},mounted:function(){this.initWork(this.$route.params.work)},methods:{initWork:function(t){this.work=this.getWork(t),this.getImage(),this.getNav()},getWork:function(t){return s.a[t]},getImage:function(){var t=this;this.imgLink().then(function(e){t.logo=e})},getNav:function(){var t=r()(s.a),e=t.indexOf(this.$route.params.work);this.prev=t[e-1]||null,this.next=t[e+1]||null}},computed:{imgLink:function(){var t=this;return function(){return n("SBLI")("./"+t.$route.params.work+".png")}}},components:{"app-grid-container":n("uvaA").a,"app-nav-work-item":i,"app-nav-work":u}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.workContainer},[n("b-container",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.logo,expression:"logo",arg:"background-image"}],class:[t.$style.backgroundImg,"d-none d-md-flex"],attrs:{fluid:""}}),t._v(" "),n("b-container",{class:t.$style.content},[n("b-row",{class:[t.$style.rowName,t.$style.row],attrs:{"align-h":"center"}},[n("b-col",{class:t.$style.workName,attrs:{cols:"11",md:"12",lg:"11"}},[n("b-row",{class:t.$style.workLink,attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"2"}},[t.prev?n("app-nav-work-item",{staticClass:"app-link d-none d-md-block",attrs:{link:t.prev,isNext:!1}}):t._e()],1),t._v(" "),n("b-col",{attrs:{cols:"8"}},[n("a",{staticClass:"app-link",attrs:{href:t.work.link,target:"_blank"}},[t._v(t._s(t.work.name))])]),t._v(" "),n("b-col",{attrs:{cols:"2"}},[t.next?n("app-nav-work-item",{staticClass:"app-link d-none d-md-block",attrs:{link:t.next}}):t._e()],1)],1)],1)],1),t._v(" "),n("b-row",{class:[t.$style.rowInfo,t.$style.row],attrs:{"align-h":"center"}},[n("b-col",{class:[t.$style.colImg,"d-md-none"],attrs:{cols:"10"}},[n("img",{class:t.$style.logo,attrs:{src:t.logo}})]),t._v(" "),n("b-col",{class:t.$style.colDescr,attrs:{cols:"11",md:"7","offset-md":"1","order-md":"2"}},[n("div",{domProps:{innerHTML:t._s(t.work.description)}})]),t._v(" "),n("b-col",{attrs:{cols:"11",md:"4","offset-md":"0","order-md":"1"}},[n("h3",{class:t.$style.colTitle},[t._v("techs used")]),t._v(" "),n("app-grid-container",{attrs:{data:t.work.techs,colForRow:"6",colForRowLg:"4"}})],1)],1),t._v(" "),n("b-row",{class:[t.$style.navigation,"d-md-none"],attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"12"}},[n("app-nav-work",{attrs:{works:Object.keys(t.works),work:t.$route.params.work,type:"mobile"}})],1)],1)],1)],1)},staticRenderFns:[]};var v=n("VU/8")(k,p,!1,function(t){this.$style=n("YyhM")},null,null);e.default=v.exports},uqUo:function(t,e,n){var o=n("kM2E"),r=n("FeBl"),s=n("S82l");t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],a={};a[t]=e(n),o(o.S+o.F*s(function(){n(1)}),"Object",a)}}});
//# sourceMappingURL=4.5771f6c0e5a81984b884.js.map