<template>
  <section class="showcase">
    <title-component class="showcase__title"> Editar a Seçao </title-component>
    <loading-component class="showcase__loading" v-if="loading" />
    <error-component
      v-else-if="graphqlGetError !== null"
      class="product__error"
      title="Nao foi possivel buscar os dados da vitrine"
      :message="{
        description:
          'O aplicativo conseguiu se conectar com o servidor, mas um problema interno aconteceu na hora de processar os dados.',
        error: graphqlGetError.message,
      }"
    />
    <error-component
      v-else-if="graphqlPostError !== null"
      class="product__error"
      title="Nao foi possivel enviar os dados da vitrine"
      :message="{
        description:
          'O aplicativo conseguiu se conectar com o servidor, mas um problema interno aconteceu na hora de processar os dados.',
        error: graphqlPostError.message,
      }"
    />
    <form-showcase :form="form" @submit="submit" v-else />
  </section>
</template>

<script setup lang="ts">
  import TitleComponent from "@/components/utils/title-component.vue";
  import { useMutation, useQuery } from "@vue/apollo-composable";
  import gql from "graphql-tag";
  import { onMounted, reactive, ref, watch } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import type { Showcase } from "@/models/Showcase";
  import FormShowcase from "@/components/form/form-showcase.vue";
  import LoadingComponent from "@/components/utils/loading-component.vue";
  import ErrorComponent from "@/components/utils/error-component.vue";

  const router = useRouter();
  const route = useRoute();

  const id = ref<string>(route.params["id"] as string);

  const form = reactive({
    name: "",
    description: "",
    products: [] as string[],
  });

  interface Query {
    showcase: Showcase;
  }

  const {
    result: showcase,
    loading,
    error: graphqlGetError,
  } = useQuery<Query>(
    gql`
      query getShowcaseDetails($id: ID!) {
        showcase(id: $id) {
          name
          description
          products {
            id
            name
            price
            description
            image
          }
        }
      }
    `,
    { id: id.value }
  );

  watch(showcase, (newState) => {
    if (newState === undefined) return;

    form.name = newState.showcase.name;
    form.description = newState.showcase.description;
    form.products = newState.showcase.products.map(({ id }) => id);
  });

  interface Mutation {
    updateShowcase: Showcase;
  }

  const {
    mutate: updateShowcase,
    onDone,
    error: graphqlPostError,
  } = useMutation<Mutation>(
    gql`
      mutation updateShowcase($id: ID!, $input: ShowcaseInput) {
        updateShowcase(id: $id, input: $input) {
          id
        }
      }
    `
  );

  function submit(form: {
    name: string;
    description: string;
    products: string[];
  }) {
    updateShowcase({
      id: id.value,
      input: {
        name: form.name,
        description: form.description,
        products: form.products ?? [],
      },
    });

    onDone((result) =>
      router.replace({
        name: "showcase",
        params: { id: result.data?.updateShowcase.id },
      })
    );
  }

  onMounted(() => (id.value = route.params["id"] as string));
</script>

<style lang="scss" scoped>
  .showcase {
    margin: 20px auto;

    width: calc(100vw - 50px);

    display: flex;
    flex-flow: column nowrap;
    row-gap: 30px;

    &__title {
      font-size: 2rem;
    }

    &__form {
      display: flex;
      flex-flow: column nowrap;
      row-gap: 20px;
    }

    &__loading {
      align-self: center;
      margin: 100px 0;
    }

    &__submit {
      height: 50px;
      width: 200px;
      align-self: flex-end;
    }
  }
</style>
