<template>
  <div class="columns is-centered is-multiline">
    <div
      class="card column is-one-quarter"
      v-for="product in products"
      :key="product.id"
    >
      <VmProducts :product="product" />
    </div>
    <div class="section" v-if="products.length === 0">
      {{ noProductLabel }}
    </div>
  </div>
</template>

<script>
import VmProducts from "@/components/Products.vue";
import { getByTitle } from '@/assets/filters.js'
export default {
  name: "VmProducstList",
  data() {
    return {
      id: "",
      noProductLable: "No product found",
      productsFiltered: [],
    };
  },
  components: {
    VmProducts,
  },
  computed: {
      products () {
          if(this.$store.state.userInfo.hasSearched){
              return this.getProductByTitle()
          } else {
              return this.$store.state.products
          }
      }
  },
  methods: {
      getProductByTitle () {
          let listOfProducts = this.$store.state.products,
          titleSearched = this.$store.state.userInfo.productTitleSearched;

          return this.productsFiltered = getByTitle(listOfProducts, titleSearched)
      }
  },
};
</script>

<style scoped>
.card {
    margin: 10px;
}
</style>