<template>
  <section class="product">
    <title-component>Editar o Produto</title-component>
    <loading-component v-if="loading" class="product__loading" />
    <error-component
      v-else-if="graphqlGetError !== null"
      class="product__error"
      title="Nao foi possivel buscar os dados do produto"
      :message="{
        description:
          'O aplicativo conseguiu se conectar com o servidor, mas um problema interno aconteceu na hora de processar os dados.',
        error: graphqlGetError.message,
      }"
    />
    <error-component
      v-else-if="graphqlPostError !== null"
      class="product__error"
      title="Nao foi possivel enviar os dados do produto"
      :message="{
        description:
          'O aplicativo conseguiu se conectar com o servidor, mas um problema interno aconteceu na hora de processar os dados.',
        error: graphqlPostError.message,
      }"
    />
    <form-product v-else :form="product" @submit="submit($event)" />
  </section>
</template>

<script setup lang="ts">
  import { useMutation, useQuery } from "@vue/apollo-composable";
  import gql from "graphql-tag";
  import { computed, ref } from "vue";
  import { useRoute } from "vue-router";
  import FormProduct from "@/components/form/form-product.vue";
  import LoadingComponent from "@/components/utils/loading-component.vue";
  import ErrorComponent from "@/components/utils/error-component.vue";
  import router from "@/router";
  import TitleComponent from "../components/utils/title-component.vue";

  const route = useRoute();

  const id = ref<string>(route.params["id"] as string);

  interface Product {
    name: string;
    price: string;
    description: string;
    image: string;
  }

  interface Query {
    product: Product;
  }

  const {
    result: ProductResponse,
    error: graphqlGetError,
    loading,
  } = useQuery<Query>(
    gql`
      query GetProduct($id: ID!) {
        product(id: $id) {
          name
          price
          description
          image
        }
      }
    `,
    { id: id }
  );

  const product = computed(() => {
    const product = ProductResponse.value?.product;
    if (product === undefined) return;
    const { name, description, price, image } = product;
    if (!name || !description || !price || !image) return;
    return { name, description, price, image };
  });

  interface Mutation {
    updateProduct: {
      id: string;
    };
  }

  const { mutate: editProduct, error: graphqlPostError } =
    useMutation<Mutation>(gql`
      mutation editProduct($id: ID!, $input: ProductInput) {
        updateProduct(id: $id, input: $input) {
          id
        }
      }
    `);

  function submit(form: Product) {
    const productInput = {
      name: form.name,
      price: parseFloat(form.price),
      description: form.description,
      image: form.image,
    };

    const result = editProduct({ id: id.value, input: productInput });

    result.then((result) => {
      const id = result?.data?.updateProduct.id;
      if (id !== undefined) router.push({ name: "product", params: { id } });
    });
  }
</script>

<style lang="scss" scoped>
  .product {
    margin: 40px auto;
    max-width: 1000px;
    width: calc(100vw - 30px);

    &__loading {
      margin: 40px auto;
    }

    &__error {
      margin: 50px auto;
    }
  }
</style>
