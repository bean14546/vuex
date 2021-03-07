<template>
  <div id="table">
    <div class="table">
      <table class="col-md-12" align="center">
        <thead class="table-dark">
          <tr>
            <th scope="col">ภาพ</th>
            <th scope="col">ชื่อ</th>
            <th scope="col">ราคา</th>
            <th scope="col">จำนวณ</th>
            <th scope="col">รวม</th>
            <th scope="col">ลบ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product,index) in  cartFromstore" :key="index">
            <td>
              <img :src="product.image" width="80px" height="60px" />
            </td>
            <td>{{product.name}}</td>
            <td>{{product.price}}</td>
            <td>
              <i class="fa fa-minus qty-minus" @click="minusQty(product)"></i>
              {{product.qty}}
              <i class="fa fa-plus qty-plus" @click="plusQty(product)"></i>
            </td>
            <td>{{product.total}}</td>
            <td>
              <button @click="removeProduct(product)">ลบ</button>
            </td>
          </tr>
          <tr v-if=" cartFromstore != 0">
            <td>
              <h4>ยอดชำระเงินทั้งหมด</h4>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <h4>{{total()}}</h4>
            </td>
            <td>
              <h4>บาท</h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  computed: {
    cartFromstore() {
      return this.$store.getters.cartArray;
    },
  },
  methods: {
    minusQty: function (product) {
      product.qty -= 1;
      if (product.qty <= 1) {
        product.qty = 1;
      }
      product.total = product.qty * product.price;
    },
    plusQty: function (product) {
      product.qty += 1;
      product.total = product.qty * product.price;
    },
    removeProduct(product) {
      if (confirm("คุณต้องการลบหรือไม่ ?")) {
        var index = this.cartFromstore.indexOf(product);
        this.cartFromstore.splice(index, 1);
      }
    },
    total: function () {
      var sum = 0;
      this.cartFromstore.forEach(function (item) {
        sum += item.total;
      });
      return sum;
    },
  },
};
</script>

<style>
</style>