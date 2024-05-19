<template>
  <section class="showcase">
    <showcase-section-header
      class="showcase__header"
      :name="props.name"
      :id="props.id"
    />
    <empty-component
      title="Não há nenhum produto aqui"
      v-if="products.length === 0"
    />
    <showcase-section-products
      v-else
      class="showcase__products"
      :products="products"
      :showcase-id="id"
    />
  </section>
</template>

<script setup lang="ts">
  import type { Product as ProductProp } from "@/models/Product";
  import ShowcaseSectionHeader from "./showcase-section-header.vue";
  import ShowcaseSectionProducts from "./showcase-section-products.vue";
  import EmptyComponent from "@/components/utils/empty-component.vue";

  interface Props {
    name: string;
    id: string;
    products: ProductProp[];
  }

  const props = withDefaults(defineProps<Props>(), {});
</script>

<style lang="scss" scoped>
  .showcase {
    margin: 10px 0 20px;
    padding-inline: 10px;
    display: flex;
    flex-flow: column nowrap;

    row-gap: 10px;

    &__header {
      padding-inline: 10px;

      transition: 200ms ease-in-out;

      &:hover {
        background-color: var(--color-2);
      }
    }

    &__products {
      padding-inline: 10px;

      min-height: 300px;
    }
  }
</style>
