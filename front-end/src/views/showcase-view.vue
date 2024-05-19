<template>
  <section class="showcase">
    <loading-component class="showcase__loading" v-if="loading" />
    <error-component
      v-else-if="graphqlError !== null"
      :title="error.title"
      :message="{ description: error.message, error: error.code }"
    />
    <div class="showcase__content" v-else>
      <header class="showcase__header">
        <showcase-details v-bind="showcase" />
      </header>
      <divider-component>Produtos</divider-component>
      <section>
        <empty-component title="Não há nenhum produto aqui" v-if="isEmpty" />
        <showcase-products :products="showcase.products" v-else />
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed, onUpdated, ref } from "vue";
  import { useRoute } from "vue-router";
  import DividerComponent from "../components/utils/divider-component.vue";
  import LoadingComponent from "../components/utils/loading-component.vue";
  import ErrorComponent from "../components/utils/error-component.vue";
  import EmptyComponent from "../components/utils/empty-component.vue";
  import ShowcaseDetails from "../components/showcase/showcase-details.vue";
  import ShowcaseProducts from "../components/showcase/showcase-products.vue";
  import { useQuery } from "@vue/apollo-composable";
  import gql from "graphql-tag";
  import type { Showcase } from "@/models/Showcase";

  const route = useRoute();

  const id = ref<string>(route.params["id"] as string);

  onUpdated(() => (id.value = route.params["id"] as string));

  interface Query {
    showcase: Showcase;
  }

  const {
    result,
    loading,
    error: graphqlError,
  } = useQuery<Query>(
    gql`
      query getShowcase($id: ID!) {
        showcase(id: $id) {
          name
          description
          id
          products {
            name
            price
            description
            image
            id
          }
        }
      }
    `,
    { id: id.value }
  );

  const showcase = computed(() => result.value?.showcase!);
  const products = computed(() => result.value?.showcase.products!);

  const error = computed(() => ({
    title: "Não foi possível carregar a vitrine de produtos",
    message:
      "Um erro ocorreu ao fazer a requisição para o nosso servidor. Tente reiniciar a página.",
    code: graphqlError.value?.message,
  }));

  const isEmpty = computed(
    () => products.value.length === 0 || typeof products.value === "undefined"
  );
</script>

<style lang="scss" scoped>
  .showcase {
    margin-top: 10px;

    &__loading {
      margin: 100px auto;
    }

    &__header {
      margin: 0 20px;
    }

    &__empty {
      margin-top: 100px;
    }
  }
</style>
