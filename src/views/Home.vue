<template>
  <div class="home">
    <Nav />
    <Product />
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/product.vue";
import Nav from "@/components/nav.vue";

export default {
  name: "Home",
  components: {
    Product,
    Nav
  }
};
</script>
