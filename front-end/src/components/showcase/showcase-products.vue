<template>
  <section class="products">
    <ul class="products__list">
      <li
        class="products__item"
        v-for="product in props.products"
        :key="product.id"
      >
        <product-card class="products" v-bind="product" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
  import type { Product as ProductProp } from "@/models/Product";
  import ProductCard from "@/components/product/product-card.vue";

  interface Props {
    products: ProductProp[];
  }
  const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
  .products {
    overflow: hidden;
    margin: 5px;

    &__list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
      gap: 15px;

      margin: 15px -20px 15px 0;

      overflow-y: scroll;
      box-sizing: content-box;

      padding-right: 20px;

      width: 100%;
      max-height: 800px;
    }
  }
</style>
