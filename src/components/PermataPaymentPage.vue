<template>
<main-layout>
    <template slot="content">
        <div style="width: 100%">
            <p style="text-align: center">
                Terimakasih untuk pembelian anda, Order ID anda adalah: #{{order.id}} <br/>
                Silahkan lakukan pembayaran sesuai metode yang Anda pilih sebagai berikut:
            </p>
            <div style="max-width: 90%; width: 600px; padding: 1em; border: 1px double black; margin: 1em auto; text-align: left">
                <h1 style="text-align: center">Pembayaran Melalui ATM Permata</h1>
                <table class="table">
                    <tr>
                        <td>Jumlah</td>
                        <td><input type="text" :value="order.grandTotal" readonly></td>
                    </tr>
                    <tr>
                        <td>Nomor Akun Virtual</td>
                        <td><input type="text" :value="order.va" readonly></td>
                    </tr>
                    <tr>
                        <td>Kode Bank</td>
                        <td><input type="text" value="013" readonly/></td>
                    </tr>
                </table>

                <p>Panduan untuk melakukan transfer VIA ATM</p>

                <ul>
                    <li>
                        ATM Permata/ATM Alto
                        <ol>
                            <li>Menu Utama > Transaksi Lainnya > Transaksi Pembayaran > Lainnya > Pembayaran Virtual Account
                            </li>
                            <li>Masukkan 16 Digit Virtual Account {{order.va}}</li>
                            <li>Jumlah yang akan dibayarkan akan muncul, jika benar klik pada tombol "Benar"</li>
                            <li>Transaksi Selesai</li>
                        </ol>
                    </li>
                    <li>
                        ATM Lainnya
                        <ol>
                            <li>Menu Utama > Transaksi Lainnya > Transfer > Transfer ke Bank Lain</li>
                            <li>Masukkan Nomor 013{{order.va}} (Kode 013 dan 16 Digit Nomor Virtual Account)</li>
                            <li>Masukkan jumlah yang harus dibayarkan (Jumlah harus tepat sesuai dengan tagihan anda, jika
                                jumlah
                                tidak
                                tepat maka akan membatalkan transaksi)
                            </li>
                            <li>Jumlah, Nomor Rekening, dan Nama akan muncul jika Input anda sudah benar</li>
                            <li>Tunggu proses hingga selesai</li>
                        </ol>
                    </li>
                </ul>
            </div>
        </div>
    </template>
</main-layout>
</template>

<script>
import MainLayout from "@/components/MainLayout";

export default {
  name: "PermataPaymentPage",
  props: ["order"],
  components: {MainLayout},
  created: function() {
    if (!this.order) {
      this.$router.push("/");
    }
  }
};
</script>

<style>

</style>

