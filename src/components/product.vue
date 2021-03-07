<template>
  <div id="product">
    <div class="container">
      <h2 class="nameStore text-center">ร้านขายขนมไทย</h2>
      <hr />
      <div class="row">
        <div class="col-md-3 col-sm-4" v-for="(item, index) in productFromstore" :key="index">
          <b-card
            :title="item.name"
            :img-src="item.image"
            style="max-width: 20rem"
            class="mb-2 text-center"
          >
            <b-card-text>ราคา&nbsp;{{ item.price }}&nbsp;บาท</b-card-text>

            <b-button href="#" variant="dark" @click="addCart(item)">Add to cart</b-button>
          </b-card>
        </div>
      </div>
      <!-- <div > </div> -->
      <b-button
        v-for="(productcart,index) in cart"
        :key="index"
        @click="addProductToCart(productcart)"
      >ยืนยัน</b-button>

      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      cart: [],
      p1: 0,
      p2: 0,
      p3: 0,
      p4: 0,
      p5: 0,
      p6: 0,
      p7: 0,
      p8: 0,
    };
  },
  computed: {
    productFromstore() {
      return this.$store.getters.productsArray;
    },
  },
  methods: {
    addProductToCart(productcart) {
      //วนลูป cart ในหน้านี้แล้วส่งตัวแปรไปให้หน้า store
      this.$store.dispatch("getCartFromProduct", productcart);
    },
    addCart: function (item) {
      var found;
      if (item.id == 1) {
        this.p1 += 1;
        if (this.p1 <= 1) {
          //ซื้อรอบเดียว
          this.pushData(item);
        } else {
          //ซื้อซ้ำ
          found = this.findID(item);
          this.cart[found].qty += 1;
          this.cart[found].total =
            this.cart[found].qty * this.cart[found].price;
        }
      } else if (item.id == 2) {
        //ซื้ออย่างอื่น
        this.p2 += 1;
        if (this.p2 <= 1) {
          //ซื้อรอบเดียว
          this.pushData(item);
        } else {
          //ซื้อซ้ำ
          found = this.findID(item);
          this.cart[found].qty += 1;
          this.cart[found].total =
            this.cart[found].qty * this.cart[found].price;
        }
      } else if (item.id == 3) {
        //ซื้ออย่างอื่น
        this.p3 += 1;
        if (this.p3 <= 1) {
          //ซื้อรอบเดียว
          this.pushData(item);
        } else {
          //ซื้อซ้ำ
          found = this.findID(item);
          this.cart[found].qty += 1;
          this.cart[found].total =
            this.cart[found].qty * this.cart[found].price;
        }
      } else if (item.id == 4) {
        //ซื้ออย่างอื่น
        this.p4 += 1;
        if (this.p3 <= 1) {
          //ซื้อรอบเดียว
          this.pushData(item);
        } else {
          //ซื้อซ้ำ
          found = this.findID(item);
          this.cart[found].qty += 1;
          this.cart[found].total =
            this.cart[found].qty * this.cart[found].price;
        }
      } else if (item.id == 5) {
        //ซื้ออย่างอื่น
        this.p5 += 1;
        if (this.p5 <= 1) {
          //ซื้อรอบเดียว
          this.pushData(item);
        } else {
          //ซื้อซ้ำ
          found = this.findID(item);
          this.cart[found].qty += 1;
          this.cart[found].total =
            this.cart[found].qty * this.cart[found].price;
        }
      } else if (item.id == 6) {
        //ซื้ออย่างอื่น
        this.p6 += 1;
        if (this.p6 <= 1) {
          //ซื้อรอบเดียว
          this.pushData(item);
        } else {
          //ซื้อซ้ำ
          found = this.findID(item);
          this.cart[found].qty += 1;
          this.cart[found].total =
            this.cart[found].qty * this.cart[found].price;
        }
      } else if (item.id == 7) {
        //ซื้ออย่างอื่น
        this.p7 += 1;
        if (this.p7 <= 1) {
          //ซื้อรอบเดียว
          this.pushData(item);
        } else {
          //ซื้อซ้ำ
          found = this.findID(item);
          this.cart[found].qty += 1;
          this.cart[found].total =
            this.cart[found].qty * this.cart[found].price;
        }
      } else if (item.id == 8) {
        //ซื้ออย่างอื่น
        this.p8 += 1;
        if (this.p8 <= 1) {
          //ซื้อรอบเดียว
          this.pushData(item);
        } else {
          //ซื้อซ้ำ
          found = this.findID(item);
          this.cart[found].qty += 1;
          this.cart[found].total =
            this.cart[found].qty * this.cart[found].price;
        }
      }
    },
    pushData(item) {
      this.cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        qty: 1,
        total: item.price,
      });
    },
    findID: function (item) {
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id == item.id) {
          return i; //ตำแหนงสินค้าที่ค้นเจอในตะกร้า
        }
      }
      return -1;
    },
  },
};
</script>

<style scoped>
.nameStore {
  margin: 10px;
}
.product {
  padding: 40px;
}
</style>
