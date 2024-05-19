<template>
  <section class="product">
    <title-component class="product__title">
      Criar um novo produto
    </title-component>
    <loading-component class="product__loading" v-if="loading" />
    <error-component class="product__error" v-else-if="graphqlError !== null" />
    <form-product @submit="submit($event)" v-else />
  </section>
</template>

<script setup lang="ts">
  import { useMutation } from "@vue/apollo-composable";
  import gql from "graphql-tag";
  import FormProduct from "@/components/form/form-product.vue";
  import LoadingComponent from "@/components/utils/loading-component.vue";
  import ErrorComponent from "@/components/utils/error-component.vue";
  import router from "@/router";
  import TitleComponent from "../components/utils/title-component.vue";

  interface Mutation {
    createProduct: {
      id: string;
    };
  }

  const {
    mutate: sendProduct,
    error: graphqlError,
    loading,
  } = useMutation<Mutation>(gql`
    mutation postProduct($input: ProductInput) {
      createProduct(input: $input) {
        id
      }
    }
  `);

  function submit(form: {
    name: string;
    description: string;
    price: string;
    image: string;
  }) {
    const productInput = {
      name: form.name,
      price: parseFloat(form.price),
      description: form.description,
      image: form.image,
    };

    const id = sendProduct({ input: productInput });
    id.then((result) => {
      const id = result?.data?.createProduct.id;
      if (id !== undefined) router.push({ name: "product", params: { id } });
    });
  }
</script>

<style lang="scss" scoped>
  .product {
    margin: 10px auto;
    max-width: 1000px;
    width: calc(100vw - 30px);

    &__title {
      margin-bottom: 40px;
    }

    &__loading {
      margin: 40px auto;
    }

    &__error {
      margin: 0 auto;
    }
  }
</style>
