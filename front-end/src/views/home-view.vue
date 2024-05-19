<template>
  <main class="home">
    <section class="home__showcases">
      <loading-component class="home__loading" v-if="loading" />
      <error-component
        v-else-if="graphqlError !== null"
        class="home__error"
        :title="error.title"
        :message="{ error: graphqlError?.message, description: error.message }"
      />
      <empty-component
        title="Não há vitrines para mostrar. Que tal criar alguma?"
        class="home__empty"
        v-else-if="showcases.length === 0"
      />
      <ul class="home__list" v-else>
        <li class="home__item" v-for="showcase in showcases" :key="showcase.id">
          <showcase-section v-bind="showcase" />
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
  import { useQuery } from "@vue/apollo-composable";
  import gql from "graphql-tag";
  import { computed, onMounted } from "vue";
  import type { Showcase } from "@/models/Showcase";
  import ShowcaseSection from "@/components/showcase/showcase-section.vue";
  import LoadingComponent from "@/components/utils/loading-component.vue";
  import ErrorComponent from "@/components/utils/error-component.vue";
  import EmptyComponent from "@/components/utils/empty-component.vue";

  interface Query {
    showcases: Showcase[];
  }

  const {
    result: getShowcases,
    refetch,
    loading,
    error: graphqlError,
  } = useQuery<Query>(
    gql`
      query getShowcases {
        showcases {
          id
          name
          products {
            name
            image
            price
            description
            id
          }
        }
      }
    `
  );

  const showcases = computed(() => getShowcases.value?.showcases ?? []);

  const error = computed(() => ({
    title: "Não foi possível buscar os dados do servidor!",
    message: "Um erro aconteceu na requisição dos dados do nosso servidor.",
  }));

  onMounted(() => refetch());
</script>

<style lang="scss" scoped>
  .home {
    margin: 20px 0;
    display: flex;
    flex-flow: column nowrap;

    &__list {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
    }

    &__item {
      flex: 1;
    }

    &__empty,
    &__loading,
    &__error {
      margin: 50px auto;
      width: calc(100vw - 20px);
    }
  }
</style>
