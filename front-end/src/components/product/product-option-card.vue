<template>
  <section class="product">
    <h1 class="product__name">{{ props.name }}</h1>
    <image-component
      class="product__img"
      :src="props.image"
      :alt="props.name"
    />
    <p class="product__description">{{ props.description }}</p>
    <p class="product__price">{{ formatAsMoney(props.price) }}</p>
  </section>
</template>

<script setup lang="ts">
  import { formatAsMoney } from "@/utils/formatAsMoney";
  import ImageComponent from "../utils/image-component.vue";

  interface Props {
    name: string;
    image?: string;
    description: string;
    id: string;
    price: number;
  }

  const props = withDefaults(defineProps<Props>(), {});
</script>

<style lang="scss" scoped>
  .product {
    padding: 10px;

    display: grid;
    grid-template-rows: 150px 30px 70px 30px;

    row-gap: 10px;

    color: var(--color-6);

    transition: background-color 200ms ease-in-out;

    cursor: pointer;

    &:hover {
      background-color: var(--color-2);
    }

    &__name {
      grid-row: 2 / 3;
    }

    &__img {
      grid-row: 1 / 2;

      align-self: center;

      border: 2px solid var(--color-6);

      width: 100%;
      height: 100%;

      object-fit: cover;

      fill: var(--color-6);

      &--default {
        padding: 10px;
      }
    }

    &__description {
      grid-row: 3 / 4;

      font-size: 0.8rem;
      overflow: hidden;
      text-align: justify;
    }

    &__price {
      grid-row: 4 / 5;
      text-align: right;
      font-weight: 500;
      font-size: 1.3rem;
    }

    &__buy {
      grid-row: 5 / 6;
      height: 100%;
    }
  }
</style>
