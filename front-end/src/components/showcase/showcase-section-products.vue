<template>
  <section class="products">
    <ul class="products__list">
      <li
        class="products__item"
        v-for="product in props.products"
        :key="product.id"
      >
        <product-card class="products__card" v-bind="product" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
  import type { Product as ProductProp } from "@/models/Product";
  import ProductCard from "../product/product-card.vue";

  interface Props {
    products: ProductProp[];
    showcaseId: string;
  }

  const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
  .products {
    overflow: hidden;
    max-height: 300px;
    &__list {
      display: flex;
      flex-flow: row wrap;

      gap: 30px;
      margin: 10px 0;
    }

    &__item {
      width: 100%;
      max-width: 225px;
    }

    &__card {
      height: 300px;
    }
  }
</style>
