<template>
  <main-layout>
    <template slot="before-logo">
      <transition name="slideDown">
        <a class="fixed-checkout btn btn-success" href="#" @click.prevent="showShoppingCart" v-show="!shoppingCartShown && total > 0" key="checkout-now-button-header">
          <i class="fa fa-shopping-cart"></i>
          {{counted}} Item, total : Rp {{displayHarga(total)}} <br/>
          <i>Klik <strong>disini</strong> untuk Lanjutkan Pembayaran <i class="fa fa-credit-card"></i></i>
        </a>
      </transition>
    </template>

    <template slot="content">
        <!-- when loading the content -->
        <transition-group tag="div" class="row" name="fadeUp">
          <div class="col" v-show="loading" key="loading-note">
            <h1>Loading Items..</h1>
            <i class="fa fa-cog fa-spin big-font"></i>
          </div>
        </transition-group>

        <!-- showing the true content! -->
        <transition-group tag="div" class="row" name="fadeLeft">
          <div v-for="item, idx in items" class="col-sm" :key="'item' + item.id" v-show="!shoppingCartShown">
            <div class="card">
              <img :src="'static/images/' + item.images[0]" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">
                  {{item.name}}
                </h5>
                <p class="card-text">
                  {{item.description}}
                  <br/>
                  Rp. {{displayHarga(item.price)}}
                </p>
                <a href="#" class="btn btn-primary" @click.prevent="buy(item)" :enabled="!addingToCart">
                  <i class="fa fa-cog fa-spin" v-if="addingToCart && item === currentItemAdded"></i>
                  <span v-if="item === currentItemAdded"> Menambahkan item ke keranjang..</span>
                  <span v-else>BELI</span>
                </a>
              </div>
            </div>
          </div>
        </transition-group>

        <!-- cart content -->
        <transition-group tag="div" class="row text-left" name="slideRight">
          <div class="col" key="shopping-cart-content" v-show="shoppingCartShown2">

            <h3 class="text-center">Daftar Belanjaan Anda <small><a class="btn btn-primary" @click.prevent="hideShoppingCart" href="#"><i class="fa fa-times"></i> Tutup</a></small></h3>

            <wizzard-page :setChildrenOffsets="setWizzardPageOffset" ref="myWizzardPage">
              <!-- SHOPPING CART -->
              <div :style="{left: wizzardPageOffsets[0]}">
                <table class="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nama</th>
                      <th>QTY</th>
                      <th>Harga</th>
                      <th>Sub Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item,idx) in cart" :key="'cart-item' + idx">
                      <td>{{idx + 1}}</td>
                      <td>
                        <img :src="'static/images/' + item.item.images[0]" class="image-on-cart-list">
                        {{item.item.name}}
                      </td>
                      <td>
                        <button class="btn btn-sm btn-danger" @click="changeQty(idx, -1)"><i class="fa fa-minus"></i> </button> 
                        {{item.qty}} 
                        <button class="btn btn-sm btn-warning" @click="changeQty(idx, 1)"><i class="fa fa-plus"></i></button></td>
                      <td>{{displayHarga(item.item.price)}}</td>
                      <td>{{displayHarga(item.total)}}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="4" :style="{textAlign: 'right'}"><strong>Total</strong></td>
                      <td><strong> Rp. {{displayHarga(total)}}</strong></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <!-- SHIPPING ADDRESS -->
              <div :style="{left: wizzardPageOffsets[1]}">
                <div class="text-center">
                  <h5>Detail Alamat Kirim</h5>
                  <p>
                    <strong>Mr. John Doe</strong><br/>
                    Jl. Sesuatu No. 10 <br>
                    Kota - Propinsi <br>
                    Kode Pos
                  </p>
                  <h5>Metode Pengiriman <i class="fa fa-envelope"></i></h5>
                  <p>POS Kilat Khusus</p>
                </div>
              </div>
              <!-- Payment Method -->
              <div :style="{left: wizzardPageOffsets[2]}">
                <div class="row text-center">
                  <div class="col">
                    <h5>Detail Biaya</h5>
                    <table class="table text-left">
                      <tr>
                        <td class="text-right">Total Belanja</td>
                        <td>Rp. {{displayHarga(total)}}</td>
                      </tr>
                      <tr v-if="paymentMethod">
                        <td class="text-right">Fee {{paymentMethod.name}}{{paymentFee.percent > 0?' - ' + paymentFee.percent + '%':''}}</td>
                        <td>Rp. {{displayHarga(computedPaymentFee)}}</td>
                      </tr>
                      <tr>
                        <td class="text-right">PPN 10%</td>
                        <td>Rp. {{displayHarga(ppn)}}</td>
                      </tr>
                      <tr>
                        <td class="text-right">Grand Total</td>
                        <td>Rp. {{displayHarga(grandTotal)}}</td>
                      </tr>
                    </table>
                  </div>
                  <div class="col">
                    <h5>Silahkan Pilih Metode Pembayaran</h5>
                    <button :class="{
                          'btn btn-block m-2 btn-bayar':true, 
                          'btn-success' : paymentMethod != method,
                          'btn-primary': paymentMethod === method                          
                        }" 
                        v-for="method in paymentMethods" :key="'payment-method'+method.name"
                        @click.prevent="paymentMethod = method"                    
                        >
                        <img :src="'static/' + method.logo"/><br/>{{method.name}}
                    </button>
                  </div>
                </div>

                <div class="row text-center" v-if="paymentMethod">
                  <div class="col">
                    <button class="btn btn-primary btn-lg" @click.prevent="gotoPayment">Selesaikan Pembayaran <i class="fa fa-thumbs-up"></i></button>
                  </div>
                </div>                
              </div>
            </wizzard-page>

          </div>
        </transition-group>


    </template>
  </main-layout>
</template>

<script>
// TODO: Request REAL VA Number

require("vue2-animate/dist/vue2-animate.min.css");
require("jquery");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.min.js");
// require("font-awesome/css/font-awesome.min.css");

import WizzardPage from "@/components/WizzardPage";
import MainLayout from "@/components/MainLayout";

const axios = require("axios");
const md5 = require("md5");

export default {
  name: "HelloWorld",
  components: { WizzardPage, MainLayout },
  data() {
    return {
      loading: true,
      shoppingCartShown: false,
      shoppingCartShown2: false,
      items: [],
      cart: [],
      addingToCart: false,
      currentItemAdded: null,
      paymentMethod: null,
      paymentFee: {
        percent: 0, // if payment fee is in percent
        cost: 0 // if payment fee is in cost
      },
      paymentMethods: [],
      wizzardPageOffsets: [0, 0, 0]
    };
  },
  async mounted() {
    try {
      const items = await axios.get("static/items.json");
      const paymentMethods = await axios.get("static/payment-methods.json");

      // console.log(paymentMethods.data);

      // not loading anymore
      const that = this;

      setTimeout(function() {
        that.loading = false;

        that.$nextTick(function() {
          setTimeout(function() {
            that.items = items.data.items;
            that.paymentMethods = paymentMethods.data;
          }, 1000);
        });
      }, 1500);
    } catch (e) {
      alert(e);
    }
  },
  watch: {
    // untuk keperluan animasi, jadi animasi muncul shopping cart di delay supaya nggak tumpang tindih
    shoppingCartShown: function() {
      const that = this;
      setTimeout(function() {
        that.shoppingCartShown2 = that.shoppingCartShown;
        that.$nextTick(function() {
          //setTimeout(function() {
          // pastikan bahwa kita menghitung lebar container saat element kita terlihat --> display != hidden
          that.$refs.myWizzardPage.calculateContainer();
          //}, 300);
        });
      }, 1000);
    },
    // fee diambil waktu paymentMethod berubah
    paymentMethod: function() {
      if (!this.paymentMethod) {
        this.paymentFee = {
          percent: 0,
          cost: 0
        };
      } else {
        this.paymentFee = this.paymentMethod.fee;
      }
    }
  },
  methods: {
    setWizzardPageOffset: function(offsets) {
      // console.log(this);
      this.wizzardPageOffsets = offsets;
    },
    displayHarga: function(num) {
      return Intl.NumberFormat("id-ID").format(num);
    },
    showShoppingCart: function() {
      this.shoppingCartShown = true;
      // reset pemilihan payment method
      this.paymentMethod = null;
    },
    hideShoppingCart: function() {
      const that = this;
      this.shoppingCartShown2 = false;
      this.$nextTick(function() {
        setTimeout(function() {
          that.shoppingCartShown = false;
        }, 1000);
      });
    },
    buy: function(item) {
      this.addingToCart = true;
      this.currentItemAdded = item;

      this.$nextTick(function() {
        const obj = {
          item,
          qty: 1,
          total: item.price
        };

        const idx = this.cart.findIndex(function(v) {
          return v.item === item;
        });

        if (idx < 0) {
          this.cart.push(obj);
        } else {
          // since the added object is already an Observer, we should be able to do this..
          const obj = this.cart[idx];
          obj.qty += 1;
          obj.total = obj.qty * obj.item.price;
        }

        setTimeout(() => {
          this.addingToCart = false;
          this.currentItemAdded = null;
        }, 1000);
      });
    },
    changeQty: function(idx, addition) {
      const obj = this.cart[idx];
      obj.qty += addition;

      if (obj.qty < 1) {
        // remove me..
        this.cart.splice(idx, 1);
      } else {
        obj.total = obj.qty * obj.item.price;
      }
    },
    gotoPayment: function() {
      if (!this.paymentMethod) {
        alert("Pilih dulu metode pembayaran yang Anda inginkan");
      } else {
        // everybody needs a vcode!
        const vcode = md5(
          this.grandTotal +
            "marketingmolpay" +
            "your-order-id" +
            "473597fa188235c13f7a336c3e365517"
        );

        switch (this.paymentMethod.id) {
          case "cc":
            const url =
              "https://secure.omnipay.co.id/OmniPay/pay/marketingmolpay/index.php?" +
              "amount=" +
              this.grandTotal +
              "&orderid=your%20ourder%20id" +
              "&bill_name=John%20Doe" +
              "&bill_email=demo@omnipay.co.id" +
              "&bill_mobile=08987171771" +
              "&bill_desc=This%20is%20only%20a%20test" +
              "&country=ID&langcode=id&returnurl=http://my-return-url.domain.tld/return.php" +
              "&vcode=" +
              vcode;

            // redirect to omnipay payment page
            document.location.href = url;
            break;

          case "permata":
            return this.$router.push({
              name: "PermataPaymentPage",
              params: {
                order: {
                  id: "OID/12311/TX",
                  grandTotal: this.grandTotal,
                  va: "8786990000392927"
                }
              }
            });
            break;

          case "artajasa":
            return this.$router.push({
              name: "ArtajasaPaymentPage",
              params: {
                order: {
                  id: "OID/12311/TX",
                  grandTotal: this.grandTotal,
                  va: "500031142308"
                }
              }
            });
            break;

          default:
            break;
        }
      }
    }
  },
  computed: {
    // jumlah item di shopping cart
    counted: function() {
      var total = 0;
      this.cart.forEach((v, i) => {
        total += v.qty;
      });
      return total;
    },
    // total belanja shopping cart
    total: function() {
      var total = 0;
      this.cart.forEach((v, i) => {
        total += v.total;
      });
      return total;
    },
    // fee yang terhitung dari pemilihan metode pembayaran
    computedPaymentFee: function() {
      return this.total * this.paymentFee.percent / 100 + this.paymentFee.cost;
    },
    // nilai ppn
    ppn: function() {
      return 0.1 * (this.total + this.computedPaymentFee);
    },
    // total nilai yang harus dibayarkan
    grandTotal: function() {
      return Math.ceil(this.total + this.computedPaymentFee + this.ppn);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.big-font {
  font-size: 2em;
}

.fixed-checkout {
  position: absolute;
  right: 0;
  top: 1em;
  padding: 0.5em;
}

.header-section {
  position: relative;
}

.image-on-cart-list {
  width: 3em;
  height: auto;
}

.btn-bayar img {
  height: 1em;
}
</style>
