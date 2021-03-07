<template>
  <div id="cart">
    <Nav />
    <Tables />
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
import Tables from "@/components/table.vue";


export default {
  name: "Cart",
  components: {
    Nav,
    Tables,
  },
};
</script>

<style>
</style>