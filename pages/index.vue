<template>
  <div>
    <VmHero />
    <VmProductsList />
  </div>
</template>

<script>
import VmHero from "@/components/Hero.vue";
import VmProductsList from "@/components/ProductsListContainer.vue";

export default {
  name: "index",
  components: {
    VmHero,
    VmProductsList
  },
};
</script>

<style lang="scss" scoped>
</style>