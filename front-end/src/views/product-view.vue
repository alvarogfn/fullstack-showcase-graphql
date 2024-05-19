<template>
  <section class="product">
    <loading-component v-if="loading" />
    <error-component
      :title="''"
      :message="{ description: '', error: '' }"
      v-else-if="graphqlError !== null"
    />
    <div class="product__content" v-else>
      <div class="product__details">
        <title-component class="product__title">
          {{ product.name }}
        </title-component>
        <p class="product__description">{{ product.description }}</p>
        <p class="product__price">{{ formatAsMoney(product.price) }}</p>
      </div>
      <image-component
        class="product__img"
        :src="product.image"
        :alt="product.name"
      />
      <nav class="product__buttons">
        <router-link
          class="product__button"
          :to="{ name: 'product-edit', params: { id: product.id } }"
        >
          <icon-edit />
        </router-link>
        <button-icon
          :icon="IconDelete"
          @click="deleteProduct({ id: product.id })"
        />
      </nav>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { Product } from "@/models/Product";
  import { formatAsMoney } from "@/utils/formatAsMoney";
  import { useQuery, useMutation } from "@vue/apollo-composable";
  import gql from "graphql-tag";
  import { computed, onMounted, onUpdated, reactive, ref } from "vue";
  import { useRoute } from "vue-router";
  import ImageComponent from "@/components/utils/image-component.vue";
  import TitleComponent from "@/components/utils/title-component.vue";
  import LoadingComponent from "@/components/utils/loading-component.vue";
  import ErrorComponent from "@/components/utils/error-component.vue";
  import IconEdit from "@/components/icons/icon-edit.vue";
  import IconDelete from "@/components/icons/icon-delete.vue";
  import router from "@/router";
  import ButtonIcon from "@/components/button/button-icon.vue";

  const route = useRoute();

  const id = ref<string>(route.params["id"] as string);

  const queryVariables = reactive({
    id,
  });

  interface Query {
    product: Product;
  }

  const {
    result,
    loading: queryLoading,
    error: graphqlError,
    refetch,
  } = useQuery<Query>(
    gql`
      query getProduct($id: ID!) {
        product(id: $id) {
          name
          description
          price
          id
          image
        }
      }
    `,
    queryVariables
  );

  const {
    mutate: deleteProduct,
    onDone,
    loading: deleteLoading,
  } = useMutation(gql`
    mutation deleteProduct($id: ID!) {
      deleteProduct(id: $id)
    }
  `);

  onDone(() => router.replace({ name: "home" }));

  const product = computed(() => result.value?.product!);
  const loading = computed(() => deleteLoading.value || queryLoading.value);
  onUpdated(() => (id.value = route.params["id"] as string));
  onMounted(() => refetch());
</script>

<style lang="scss" scoped>
  .product {
    margin: 20px auto;

    &__content {
      position: relative;

      width: calc(100vw - 30px);
      max-width: 1200px;

      margin: 0 auto;

      display: grid;
      grid-template-rows: 250px 250px;
      row-gap: 20px;
    }

    &__img {
      grid-row: 1 / 2;
      height: 100%;
      width: 100%;

      object-fit: cover;
      border: 2px solid var(--color-6);
    }

    &__details {
      display: flex;
      flex-flow: column nowrap;
    }

    &__title {
      font-size: 2rem;
      text-align: center;
    }

    &__description {
      flex-grow: 1;
      font-size: 1.15rem;

      color: var(--color-6);
      letter-spacing: 0.05rem;

      padding: 10px;

      &::first-letter {
        text-transform: uppercase;

        font-size: 1.25em;
        font-weight: bold;

        color: var(--color-5);
      }
    }

    &__price {
      font-size: 2rem;
      font-weight: 900;

      text-align: right;
      color: var(--color-6);
    }

    &__buttons {
      position: absolute;

      top: 10px;
      right: 10px;

      display: flex;
      flex-flow: row nowrap;
      column-gap: 20px;
    }

    &__button {
      background-color: var(--color-6);
      height: 40px;
      width: 40px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (min-width: 800px) {
    .product {
      margin-top: 100px;

      &__content {
        grid-template-columns: 500px 1fr;
        grid-template-rows: 400px;
        column-gap: 20px;
      }

      &__img {
        justify-self: center;

        grid-row: 1 / 2;
        height: 100%;
        width: 100%;

        max-width: 400px;
        max-height: 700px;
      }

      &__details {
        padding: 20px;
      }

      &__title {
        font-size: 3rem;
        text-align: left;
      }

      &__buttons {
        top: -20px;
        right: 0px;
      }
    }
  }
</style>
