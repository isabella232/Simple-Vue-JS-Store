webpackJsonp([1],{"6A3X":function(t,a){},"7Otq":function(t,a,e){t.exports=e.p+"static/img/logo.37474eb.png"},"8Oe6":function(t,a){},N1DE:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var s=e("VU/8")({name:"App"},i,!1,function(t){e("8Oe6")},null,null).exports,r=e("/ocq"),o=e("Xxa5"),l=e.n(o),c=e("exGp"),d=e.n(c),u=e("7t+N"),p={name:"WizzardPage",props:{setChildrenOffsets:{required:!0,type:Function},icons:{required:!1,type:Array,default:function(){return["shopping-cart","truck","credit-card"]}},steps:{required:!1,type:Array,default:function(){return["Keranjang Belanja","Alamat Pengiriman","Pilih Metode Pembayaran"]}}},data:function(){return{containerStyle:{width:"100%",overflowX:"hidden",height:"356px"},offsets:[],currentPage:0,filledSteps:[]}},methods:{prevPage:function(){this.setPage(this.currentPage-1)},nextPage:function(){this.filledSteps.indexOf(this.currentPage)<0&&this.filledSteps.push(this.currentPage),this.setPage(this.currentPage+1)},setPage:function(t){this.currentPage=t,this.calculateContainer()},calculateContainer:function(){for(var t=u(this.$refs.container).width(),a=[],e=0;e<this.steps.length;++e)a[e]=e*t-this.currentPage*t+"px";this.offsets=a},isFilled:function(t){return this.filledSteps.indexOf(t)>=0}},mounted:function(){this.calculateContainer()},computed:{progress:function(){return(this.currentPage+1)/this.steps.length*100}},watch:{offsets:function(t,a){this.setChildrenOffsets(this.offsets)}}},v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"wizzard-navigation"},[e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar",style:{width:t.progress+"%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}},[t._v("\n                "+t._s(t.steps[t.currentPage])+"\n              ")])]),t._v(" "),e("div",{staticClass:"next-buttons"},[e("div",{staticClass:"row text-center"},t._l(t.steps,function(a,n){return e("div",{key:"page-icon"+n,staticClass:"col"},[e("button",{class:"btn btn-sm btn-"+(n===t.currentPage?"success":t.isFilled(n)?"primary":"info"),attrs:{disabled:!t.isFilled(n)},on:{click:function(a){a.preventDefault(),t.isFilled(n)&&t.setPage(n)}}},[t._v("\n                      Langkah "+t._s(n+1)+". "),e("i",{class:"fa fa-"+t.icons[n]}),t._v(" "+t._s(t.steps[n])+"\n                  ")])])}))])]),t._v(" "),e("div",{ref:"container",staticClass:"wizzard-container",style:t.containerStyle},[t._t("default",t._l(t.steps,function(a,n){return e("div",{key:"page"+n,style:{left:t.offsets[n]},attrs:{id:"sample-wizz-page"+n}},[e("h3",[t._v("Page"+t._s(n))]),t._v("\n                "+t._s(t.offsets)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"clearfix"}),t._v(" "),e("div",{staticClass:"wizzard-footer"},[t.currentPage>0?e("button",{staticClass:"btn btn-primary float-left",on:{click:function(a){a.preventDefault(),t.prevPage(a)}}},[e("i",{staticClass:"fa fa-angle-left"}),t._v(" Kembali\n            ")]):t._e(),t._v(" "),t.currentPage<t.steps.length-1?e("button",{staticClass:"btn btn-primary float-right",on:{click:function(a){a.preventDefault(),t.nextPage(a)}}},[t._v("\n                "+t._s(t.steps[t.currentPage+1])+" "),e("i",{staticClass:"fa fa-angle-right"})]):t._e()])])])},staticRenderFns:[]};var h=e("VU/8")(p,v,!1,function(t){e("iRLt")},"data-v-b2ff5f74",null).exports,m={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row text-center"},[a("div",{staticClass:"col"},[a("div",{staticClass:"header-section"},[this._t("before-logo"),this._v(" "),a("img",{attrs:{src:e("7Otq")}}),this._v(" "),a("h1",[this._v("Demo Toko")])],2),this._v(" "),a("hr"),this._v(" "),this._t("content")],2)])])},staticRenderFns:[]},_=e("VU/8")({name:"MainLayout"},m,!1,null,null,null).exports;e("6A3X"),e("7t+N"),e("qb6w"),e("Bb4J");var f=e("mtWM"),g=e("L6bb"),y={name:"HelloWorld",components:{WizzardPage:h,MainLayout:_},data:function(){return{loading:!0,shoppingCartShown:!1,shoppingCartShown2:!1,items:[],cart:[],addingToCart:!1,currentItemAdded:null,paymentMethod:null,paymentFee:{percent:0,cost:0},paymentMethods:[],wizzardPageOffsets:[0,0,0]}},mounted:function(){var t=this;return d()(l.a.mark(function a(){var e,n,i;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.get("static/items.json");case 3:return e=a.sent,a.next=6,f.get("static/payment-methods.json");case 6:n=a.sent,i=t,setTimeout(function(){i.loading=!1,i.$nextTick(function(){setTimeout(function(){i.items=e.data.items,i.paymentMethods=n.data},1e3)})},1500),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),alert(a.t0);case 14:case"end":return a.stop()}},a,t,[[0,11]])}))()},watch:{shoppingCartShown:function(){var t=this;setTimeout(function(){t.shoppingCartShown2=t.shoppingCartShown,t.$nextTick(function(){t.$refs.myWizzardPage.calculateContainer()})},1e3)},paymentMethod:function(){this.paymentMethod?this.paymentFee=this.paymentMethod.fee:this.paymentFee={percent:0,cost:0}}},methods:{setWizzardPageOffset:function(t){this.wizzardPageOffsets=t},displayHarga:function(t){return Intl.NumberFormat("id-ID").format(t)},showShoppingCart:function(){this.shoppingCartShown=!0,this.paymentMethod=null},hideShoppingCart:function(){var t=this;this.shoppingCartShown2=!1,this.$nextTick(function(){setTimeout(function(){t.shoppingCartShown=!1},1e3)})},buy:function(t){this.addingToCart=!0,this.currentItemAdded=t,this.$nextTick(function(){var a=this,e={item:t,qty:1,total:t.price},n=this.cart.findIndex(function(a){return a.item===t});if(n<0)this.cart.push(e);else{var i=this.cart[n];i.qty+=1,i.total=i.qty*i.item.price}setTimeout(function(){a.addingToCart=!1,a.currentItemAdded=null},1e3)})},changeQty:function(t,a){var e=this.cart[t];e.qty+=a,e.qty<1?this.cart.splice(t,1):e.total=e.qty*e.item.price},gotoPayment:function(){if(this.paymentMethod){var t=g(this.grandTotal+"marketingmolpayyour-order-id473597fa188235c13f7a336c3e365517");switch(this.paymentMethod.id){case"cc":var a="https://secure.omnipay.co.id/OmniPay/pay/marketingmolpay/index.php?amount="+this.grandTotal+"&orderid=your%20ourder%20id&bill_name=John%20Doe&bill_email=demo@omnipay.co.id&bill_mobile=08987171771&bill_desc=This%20is%20only%20a%20test&country=ID&langcode=id&returnurl=http://my-return-url.domain.tld/return.php&vcode="+t;document.location.href=a;break;case"permata":return this.$router.push({name:"PermataPaymentPage",params:{order:{id:"OID/12311/TX",grandTotal:this.grandTotal,va:"8786990000392927"}}});case"artajasa":return this.$router.push({name:"ArtajasaPaymentPage",params:{order:{id:"OID/12311/TX",grandTotal:this.grandTotal,va:"500031142308"}}})}}else alert("Pilih dulu metode pembayarn yang Anda inginkan")}},computed:{counted:function(){var t=0;return this.cart.forEach(function(a,e){t+=a.qty}),t},total:function(){var t=0;return this.cart.forEach(function(a,e){t+=a.total}),t},computedPaymentFee:function(){return this.total*this.paymentFee.percent/100+this.paymentFee.cost},ppn:function(){return.1*(this.total+this.computedPaymentFee)},grandTotal:function(){return Math.ceil(this.total+this.computedPaymentFee+this.ppn)}}},b={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main-layout",[e("template",{slot:"before-logo"},[e("transition",{attrs:{name:"slideDown"}},[e("a",{directives:[{name:"show",rawName:"v-show",value:!t.shoppingCartShown&&t.total>0,expression:"!shoppingCartShown && total > 0"}],key:"checkout-now-button-header",staticClass:"fixed-checkout btn btn-success",attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.showShoppingCart(a)}}},[e("i",{staticClass:"fa fa-shopping-cart"}),t._v("\n        "+t._s(t.counted)+" Item, total : Rp "+t._s(t.displayHarga(t.total))+" "),e("br"),t._v(" "),e("i",[t._v("Klik "),e("strong",[t._v("disini")]),t._v(" untuk Lanjutkan Pembayaran "),e("i",{staticClass:"fa fa-credit-card"})])])])],1),t._v(" "),e("template",{slot:"content"},[e("transition-group",{staticClass:"row",attrs:{tag:"div",name:"fadeUp"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],key:"loading-note",staticClass:"col"},[e("h1",[t._v("Loading Items..")]),t._v(" "),e("i",{staticClass:"fa fa-cog fa-spin big-font"})])]),t._v(" "),e("transition-group",{staticClass:"row",attrs:{tag:"div",name:"fadeLeft"}},t._l(t.items,function(a,n){return e("div",{directives:[{name:"show",rawName:"v-show",value:!t.shoppingCartShown,expression:"!shoppingCartShown"}],key:"item"+a.id,staticClass:"col"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top",attrs:{src:"static/images/"+a.images[0]}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("\n                "+t._s(a.name)+"\n              ")]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("\n                "+t._s(a.description)+"\n                "),e("br"),t._v("\n                Rp. "+t._s(t.displayHarga(a.price))+"\n              ")]),t._v(" "),e("a",{staticClass:"btn btn-primary",attrs:{href:"#",enabled:!t.addingToCart},on:{click:function(e){e.preventDefault(),t.buy(a)}}},[t.addingToCart&&a===t.currentItemAdded?e("i",{staticClass:"fa fa-cog fa-spin"}):t._e(),t._v(" "),a===t.currentItemAdded?e("span",[t._v(" Menambahkan item ke keranjang..")]):e("span",[t._v("BELI")])])])])])})),t._v(" "),e("transition-group",{staticClass:"row text-left",attrs:{tag:"div",name:"slideRight"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.shoppingCartShown2,expression:"shoppingCartShown2"}],key:"shopping-cart-content",staticClass:"col"},[e("h3",{staticClass:"text-center"},[t._v("Daftar Belanjaan Anda "),e("small",[e("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.hideShoppingCart(a)}}},[e("i",{staticClass:"fa fa-times"}),t._v(" Tutup")])])]),t._v(" "),e("wizzard-page",{ref:"myWizzardPage",attrs:{setChildrenOffsets:t.setWizzardPageOffset}},[e("div",{style:{left:t.wizzardPageOffsets[0]}},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",[t._v("#")]),t._v(" "),e("th",[t._v("Nama")]),t._v(" "),e("th",[t._v("QTY")]),t._v(" "),e("th",[t._v("Harga")]),t._v(" "),e("th",[t._v("Sub Total")])])]),t._v(" "),e("tbody",t._l(t.cart,function(a,n){return e("tr",{key:"cart-item"+n},[e("td",[t._v(t._s(n+1))]),t._v(" "),e("td",[e("img",{staticClass:"image-on-cart-list",attrs:{src:"static/images/"+a.item.images[0]}}),t._v("\n                      "+t._s(a.item.name)+"\n                    ")]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(a){t.changeQty(n,-1)}}},[e("i",{staticClass:"fa fa-minus"})]),t._v(" \n                      "+t._s(a.qty)+" \n                      "),e("button",{staticClass:"btn btn-sm btn-warning",on:{click:function(a){t.changeQty(n,1)}}},[e("i",{staticClass:"fa fa-plus"})])]),t._v(" "),e("td",[t._v(t._s(t.displayHarga(a.item.price)))]),t._v(" "),e("td",[t._v(t._s(t.displayHarga(a.total)))])])})),t._v(" "),e("tfoot",[e("tr",[e("td",{style:{textAlign:"right"},attrs:{colspan:"4"}},[e("strong",[t._v("Total")])]),t._v(" "),e("td",[e("strong",[t._v(" Rp. "+t._s(t.displayHarga(t.total)))])])])])])]),t._v(" "),e("div",{style:{left:t.wizzardPageOffsets[1]}},[e("div",{staticClass:"text-center"},[e("h5",[t._v("Detail Alamat Kirim")]),t._v(" "),e("p",[e("strong",[t._v("Mr. John Doe")]),e("br"),t._v("\n                  Jl. Sesuatu No. 10 "),e("br"),t._v("\n                  Kota - Propinsi "),e("br"),t._v("\n                  Kode Pos\n                ")]),t._v(" "),e("h5",[t._v("Metode Pengiriman "),e("i",{staticClass:"fa fa-envelope"})]),t._v(" "),e("p",[t._v("POS Kilat Khusus")])])]),t._v(" "),e("div",{style:{left:t.wizzardPageOffsets[2]}},[e("div",{staticClass:"row text-center"},[e("div",{staticClass:"col"},[e("h5",[t._v("Detail Biaya")]),t._v(" "),e("table",{staticClass:"table text-left"},[e("tr",[e("td",{staticClass:"text-right"},[t._v("Total Belanja")]),t._v(" "),e("td",[t._v("Rp. "+t._s(t.displayHarga(t.total)))])]),t._v(" "),t.paymentMethod?e("tr",[e("td",{staticClass:"text-right"},[t._v("Fee "+t._s(t.paymentMethod.name)+t._s(t.paymentFee.percent>0?" - "+t.paymentFee.percent+"%":""))]),t._v(" "),e("td",[t._v("Rp. "+t._s(t.displayHarga(t.computedPaymentFee)))])]):t._e(),t._v(" "),e("tr",[e("td",{staticClass:"text-right"},[t._v("PPN 10%")]),t._v(" "),e("td",[t._v("Rp. "+t._s(t.displayHarga(t.ppn)))])]),t._v(" "),e("tr",[e("td",{staticClass:"text-right"},[t._v("Grand Total")]),t._v(" "),e("td",[t._v("Rp. "+t._s(t.displayHarga(t.grandTotal)))])])])]),t._v(" "),e("div",{staticClass:"col"},[e("h5",[t._v("Silahkan Pilih Metode Pembayaran")]),t._v(" "),t._l(t.paymentMethods,function(a){return e("button",{key:"payment-method"+a.name,class:{"btn w-100 m-2":!0,"btn-success":t.paymentMethod!=a,"btn-primary":t.paymentMethod===a},on:{click:function(e){e.preventDefault(),t.paymentMethod=a}}},[t._v("\n                    "+t._s(a.name)+"\n                  ")])})],2)]),t._v(" "),t.paymentMethod?e("div",{staticClass:"row text-center"},[e("div",{staticClass:"col"},[e("button",{staticClass:"btn btn-primary btn-lg",on:{click:function(a){a.preventDefault(),t.gotoPayment(a)}}},[t._v("Selesaikan Pembayaran "),e("i",{staticClass:"fa fa-thumbs-up"})])])]):t._e()])])],1)])],1)],2)},staticRenderFns:[]};var k=e("VU/8")(y,b,!1,function(t){e("TtbA")},"data-v-03214987",null).exports,C={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[this._v("\n  Hello "+this._s(this.name)+"\n  "),a("router-link",{attrs:{to:"/"}},[this._v("Go to Home")])],1)},staticRenderFns:[]};var P=e("VU/8")({name:"Yohan",data:function(){return{name:"Yohan Ya?"}}},C,!1,function(t){e("oUt/")},"data-v-79bc6aa2",null).exports,w={name:"ArtajasaPaymentPage",components:{MainLayout:_},props:["order"],created:function(){this.order||this.$router.push("/")}},x={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main-layout",[e("template",{slot:"content"},[e("div",{staticStyle:{width:"100%"}},[e("p",{staticStyle:{"text-align":"center"}},[t._v("\r\n                Terimakasih untuk pembelian anda, Order ID anda adalah: #"+t._s(t.order.id)+" "),e("br"),t._v("\r\n                Silahkan lakukan pembayaran sesuai metode yang Anda pilih sebagai berikut:\r\n            ")]),t._v(" "),e("div",{staticStyle:{"max-width":"90%",width:"600px",padding:"1em",border:"1px double black",margin:"1em auto","text-align":"left"}},[e("h1",{staticStyle:{"text-align":"center"}},[t._v("Pembayaran Melalui ATM Bersama")]),t._v(" "),e("table",{staticClass:"table"},[e("tr",[e("td",[t._v("Jumlah")]),t._v(" "),e("td",[e("input",{attrs:{type:"text",readonly:""},domProps:{value:t.order.grandTotal}})])]),t._v(" "),e("tr",[e("td",[t._v("Nomor Akun Virtual")]),t._v(" "),e("td",[e("input",{attrs:{type:"text",readonly:""},domProps:{value:t.order.va}})])]),t._v(" "),e("tr",[e("td",[t._v("Kode Bank")]),t._v(" "),e("td",[e("input",{attrs:{type:"text",value:"987",readonly:""}})])])]),t._v(" "),e("p",[t._v("Panduan untuk melakukan transfer VIA ATM, "),e("strong",[t._v("kode bank dalah 987, nama Bank akan muncul\r\n                        ATMB-PLUS")])]),t._v(" "),e("ol",[e("li",[t._v("Menu Utama > Transaksi Lainnya > Transfer > Transfer ke Bank Lain")]),t._v(" "),e("li",[t._v("Masukkan Nomor 987"+t._s(t.order.va)+" (Kode 987 dan 16 Digit Nomor Virtual Account)")]),t._v(" "),e("li",[t._v("Masukkan jumlah yang harus dibayarkan (Jumlah harus tepat sesuai dengan tagihan anda, jika jumlah tidak\r\n                        tepat maka akan membatalkan transaksi)\r\n                    ")]),t._v(" "),e("li",[t._v("Jumlah, Nomor Rekening, dan Nama akan muncul jika Input anda sudah benar")]),t._v(" "),e("li",[t._v("Tunggu proses hingga selesai")])])])])])],2)},staticRenderFns:[]};var T=e("VU/8")(w,x,!1,function(t){e("N1DE")},null,null).exports,M={name:"PermataPaymentPage",props:["order"],components:{MainLayout:_},created:function(){this.order||this.$router.push("/")}},A={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main-layout",[e("template",{slot:"content"},[e("div",{staticStyle:{width:"100%"}},[e("p",{staticStyle:{"text-align":"center"}},[t._v("\r\n                Terimakasih untuk pembelian anda, Order ID anda adalah: #"+t._s(t.order.id)+" "),e("br"),t._v("\r\n                Silahkan lakukan pembayaran sesuai metode yang Anda pilih sebagai berikut:\r\n            ")]),t._v(" "),e("div",{staticStyle:{"max-width":"90%",width:"600px",padding:"1em",border:"1px double black",margin:"1em auto","text-align":"left"}},[e("h1",{staticStyle:{"text-align":"center"}},[t._v("Pembayaran Melalui ATM Permata")]),t._v(" "),e("table",{staticClass:"table"},[e("tr",[e("td",[t._v("Jumlah")]),t._v(" "),e("td",[e("input",{attrs:{type:"text",readonly:""},domProps:{value:t.order.grandTotal}})])]),t._v(" "),e("tr",[e("td",[t._v("Nomor Akun Virtual")]),t._v(" "),e("td",[e("input",{attrs:{type:"text",readonly:""},domProps:{value:t.order.va}})])]),t._v(" "),e("tr",[e("td",[t._v("Kode Bank")]),t._v(" "),e("td",[e("input",{attrs:{type:"text",value:"013",readonly:""}})])])]),t._v(" "),e("p",[t._v("Panduan untuk melakukan transfer VIA ATM")]),t._v(" "),e("ul",[e("li",[t._v("\r\n                        ATM Permata/ATM Alto\r\n                        "),e("ol",[e("li",[t._v("Menu Utama > Transaksi Lainnya > Transaksi Pembayaran > Lainnya > Pembayaran Virtual Account\r\n                            ")]),t._v(" "),e("li",[t._v("Masukkan 16 Digit Virtual Account "+t._s(t.order.va))]),t._v(" "),e("li",[t._v('Jumlah yang akan dibayarkan akan muncul, jika benar klik pada tombol "Benar"')]),t._v(" "),e("li",[t._v("Transaksi Selesai")])])]),t._v(" "),e("li",[t._v("\r\n                        ATM Lainnya\r\n                        "),e("ol",[e("li",[t._v("Menu Utama > Transaksi Lainnya > Transfer > Transfer ke Bank Lain")]),t._v(" "),e("li",[t._v("Masukkan Nomor 013"+t._s(t.order.va)+" (Kode 013 dan 16 Digit Nomor Virtual Account)")]),t._v(" "),e("li",[t._v("Masukkan jumlah yang harus dibayarkan (Jumlah harus tepat sesuai dengan tagihan anda, jika\r\n                                jumlah\r\n                                tidak\r\n                                tepat maka akan membatalkan transaksi)\r\n                            ")]),t._v(" "),e("li",[t._v("Jumlah, Nomor Rekening, dan Nama akan muncul jika Input anda sudah benar")]),t._v(" "),e("li",[t._v("Tunggu proses hingga selesai")])])])])])])])],2)},staticRenderFns:[]};var S=e("VU/8")(M,A,!1,function(t){e("rBe4")},null,null).exports;n.a.use(r.a);var z=new r.a({routes:[{path:"/",name:"HelloWorld",component:k},{path:"/yohan",name:"Yohan",component:P},{path:"/permata-payment-page",name:"PermataPaymentPage",component:S,props:!0},{path:"/artajasa-payment-page",name:"ArtajasaPaymentPage",component:T,props:!0}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:z,components:{App:s},template:"<App/>"})},TtbA:function(t,a){},iRLt:function(t,a){},"oUt/":function(t,a){},qb6w:function(t,a){},rBe4:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.4a063798dfd6f89397e2.js.map