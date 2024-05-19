<template>
  <router-link class="product" :to="{ name: 'product', params: { id } }">
    <image-component
      class="product__img"
      :src="props.image"
      :alt="props.name"
    />
    <h1 class="product__name">{{ props.name }}</h1>
    <p class="product__description">{{ props.description }}</p>
    <p class="product__price">{{ formatAsMoney(props.price) }}</p>
  </router-link>
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
    display: flex;
    flex-flow: column nowrap;
    row-gap: 5px;

    padding: 10px;
    border-radius: 5px;

    color: var(--color-6);

    cursor: pointer;

    &:hover {
      background-color: var(--color-2);
    }

    &__name {
      font-size: 1rem;
    }

    &__img {
      align-self: center;

      border: 2px solid var(--color-6);

      width: 100%;
      height: 100%;

      height: 160px;

      object-fit: cover;

      fill: var(--color-6);

      &--default {
        padding: 10px;
      }
    }

    &__description {
      font-size: 0.8rem;
      text-align: justify;
      max-height: 100px;
    }

    &__price {
      text-align: right;
      font-weight: 500;
      font-size: 1.3rem;
    }
  }
</style>
